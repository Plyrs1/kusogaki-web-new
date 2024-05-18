import { redirect } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, locals: { supabase } }) => {
  const code = url.searchParams.get('code');
  const next = url.searchParams.get('next') ?? '/';
  if (!code) throw redirect(302, '/');
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (!error) throw redirect(302, next);
  redirect(302, '/');
};
