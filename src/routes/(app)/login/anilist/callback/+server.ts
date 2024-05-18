import { createClient } from '@supabase/supabase-js';
import { redirect } from '@sveltejs/kit';

import { ANILIST_SECRET, SUPABASE_SERVICE_KEY } from '$env/static/private';
import { PUBLIC_ANILIST_APP_ID, PUBLIC_ANILIST_REDIRECT, PUBLIC_SUPABASE_URL } from '$env/static/public';

import type { RequestHandler } from './$types';

const getAnilistUser = async (token: string) => {
  const query = `
  query {
    Viewer {
      id
      name
      avatar {
        large
      }
    }
  }`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      query
    })
  };

  try {
    const res = await fetch('https://graphql.anilist.co/', options);
    if (!res.ok) return null;

    const data = (await res.json())?.data?.Viewer;
    if (!data) return null;

    return {
      id: data.id,
      name: data.name,
      avatar: data.avatar.large,
      email: `kusoweb-${data.id}@plyrs.eu.org` // create fake email because we'll use this to log in user
    };
  } catch (error) {
    console.error({ func: 'getAnilistUser', error });
  }
  return null;
};

export const GET: RequestHandler = async ({ url }) => {
  let err = '';
  const code = url.searchParams.get('code');
  // TODO: save user's current path before login
  //       then redirect back to the path after login
  // const next = url.searchParams.get('next');
  let isNewUser = false;
  err = 'Invalid authorization code';
  if (!code) throw redirect(302, `/login/#success=false&message=${encodeURIComponent(err)}`);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      grant_type: 'authorization_code',
      client_id: PUBLIC_ANILIST_APP_ID,
      client_secret: ANILIST_SECRET,
      redirect_uri: PUBLIC_ANILIST_REDIRECT, // http://example.com/callback
      code: code // The Authorization Code received previously
    })
  };

  /**
   * Step 1
   * Request token from anilist
   */
  const res = await fetch('https://anilist.co/api/v2/oauth/token', options);
  err = 'Invalid token';
  if (!res.ok) throw redirect(302, `/login/#success=false&message=${encodeURIComponent(err)}`);

  const { access_token, refresh_token } = await res.json();
  err = 'Got empty access token';
  if (!access_token) throw redirect(302, `/login/#success=false&message=${encodeURIComponent(err)}`);

  /**
   * Step 2
   * Get user info from provided token. Returned data :
   * id, username, avatar, and virtual email
   */
  const anilistUser = await getAnilistUser(access_token);
  err = "Can't get data from Anilist, probably token invalid?";
  if (!anilistUser) throw redirect(302, `/login/#success=false&message=${encodeURIComponent(err)}`);

  const supabase = createClient(PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_KEY, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });

  /**
   * Step 3
   * Get if username is registered in database
   */
  const { data, error } = await supabase.rpc('get_user_by_email', { email: anilistUser.email });
  if (error) {
    console.error(error);
    err = 'Error while registering user. Please contact admin.';
    throw redirect(302, `/login/#success=false&message=${encodeURIComponent(err)}`);
  }

  /**
   * Step 4
   * If no such data then create the user
   */
  let userId = data[0]?.id;
  if (!userId) {
    const { data, error } = await supabase.auth.signUp({
      email: anilistUser.email,
      password: refresh_token.substring(0, 32)
    });
    // const { data, error } = await supabase.auth.admin.createUser({
    //   email: anilistUser.email,
    //   email_confirm: true,
    //   user_metadata: {
    //     anilistData: {
    //       access_token,
    //       refresh_token,
    //       expire_in: Date.now() + (expires_in * 1000),
    //       ...anilistUser,
    //     }
    //   }
    // })
    if (!data.user || error) {
      console.error(error);
      err = "Can't register a new user.";
      if (error?.status === 422) err = 'New registration is currently disabled. Please contact admin.';
      throw redirect(302, `/login/#success=false&message=${encodeURIComponent(err)}`);
    }
    userId = data.user.id;
    isNewUser = true;
    // if (data) {
    //   err = `User exists. Your data: ${JSON.stringify(data)}`;
    //   throw redirect(302,  `/login/#success=false&message=${encodeURIComponent(err)}`);
    // }
  }

  /**
   * Step 5
   * Update user metadata
   */
  const { error: userError } = await supabase
    .from('profiles')
    .upsert({
      id: userId,
      username: anilistUser.name,
      avatar_url: anilistUser.avatar,
      anilist_id: anilistUser.id
    })
    .select();

  if (userError) {
    console.error(userError);
    err = `Can't register user. Please contact admin.`;
    if (userError.code === '23505')
      err = `Anilist user "${anilistUser.name}" has been registered, but not with your account. Probably you just changed your Anilist username and someone took it. Please contact admin if you believe this is your account.`;
    throw redirect(302, `/login/#success=false&message=${encodeURIComponent(err)}`);
  }

  /**
   * Step 6
   * Generate login link from the provided email
   */
  err = isNewUser ? 'Register success!' : 'Login success!';
  const redirectTo = new URL(`${url.origin}/login/anilist/#success=true&message=${encodeURIComponent(err)}`).toString();
  const { data: emailData, error: emailError } = await supabase.auth.admin.generateLink({
    type: 'magiclink',
    email: anilistUser.email,
    options: {
      redirectTo
    }
  });
  if (emailData?.properties?.action_link) {
    throw redirect(302, emailData?.properties?.action_link);
  }
  if (emailError) throw redirect(302, `/login/#success=false&message=${encodeURIComponent(JSON.stringify(emailError))}`);

  err = "Can't log in user. Please contact admin with following details: " + JSON.stringify(anilistUser);
  throw redirect(302, `/login/#success=false&message=${encodeURIComponent(err)}`);
  // return new Response(JSON.stringify({access_token, refresh_token, expires_in}))
  // return new Response("Something went wrong :/")
};
