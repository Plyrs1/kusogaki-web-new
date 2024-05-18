<script lang="ts">
  import { isBrowser } from '@supabase/ssr';
  import { onMount } from 'svelte';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { PUBLIC_ANILIST_APP_ID, PUBLIC_ANILIST_REDIRECT } from '$env/static/public';

  import type { PageData } from './$types';

  export let data: PageData;
  $: urlHash = new URLSearchParams($page.url.hash.replace('#', '?').replaceAll('#', '&'));
  $: accessToken = urlHash.get('access_token');
  $: refreshToken = urlHash.get('refresh_token');
  $: success = urlHash.get('success');
  $: message = urlHash.get('message');
  $: isBrowser() &&
    message &&
    setTimeout(() => {
      window.location.href = window.localStorage?.getItem('next') ?? '/';
    }, 1000);

  onMount(async () => {
    if (success == 'true') setTimeout(() => goto('/'), 3000);
    if (accessToken && refreshToken) {
      const { data: loginData, error } = await data.supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken
      });
      if (error) return goto(`/login/#success=false&message=${encodeURIComponent(JSON.stringify(error))}`);
      if (loginData.session?.expires_at ?? 0 > Date.now()) {
        // TODO : save user's current path before login and redirect back
        //        to where they were
        window.location.href = '/';
        return goto('/');
      }
      let err = 'Session expired...';
      return goto(`/login/#success=false&message=${encodeURIComponent(err)}`);
    } else {
      setTimeout(() => {
        window.location.href = `https://anilist.co/api/v2/oauth/authorize?client_id=${PUBLIC_ANILIST_APP_ID}&redirect_uri=${PUBLIC_ANILIST_REDIRECT}&response_type=code`;
      }, 1000);
    }
  });
</script>

<div class="container flex h-full flex-col items-center justify-center">
  <div class="flex w-64 flex-col gap-2 rounded-lg bg-kusogaki-dark p-4 text-white">
    {#if success == 'true' && message}
      {message}
    {:else if accessToken}
      Logging in...
    {:else}
      {message ?? 'Redirecting to AniList...'}
    {/if}
  </div>
</div>
