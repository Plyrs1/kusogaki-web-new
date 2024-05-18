<script lang="ts">
  import '../app.pcss';

  import { onMount } from 'svelte';

  import { goto, invalidate } from '$app/navigation';
  import { isLoggedIn } from '$lib/stores/page';
  import { profile, session as sessionStore } from '$lib/stores/session';
  import type { UserProfile } from '$lib/types/profile';

  import type { PageData } from './$types';
  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange(async (_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        $isLoggedIn = false;
        invalidate('supabase:auth');
        setTimeout(() => {
          goto('/', { invalidateAll: true });
        }, 3000);
      }
      if (session?.expires_at ?? 0 > Date.now() / 1000) $isLoggedIn = true;
      if (!session?.user) return;
      const { data, error } = await supabase.from('profiles').select('username, avatar_url, anilist_id').eq('id', session.user.id);
      console.log({ data, error });
      if (data[0]) profile.set(data[0] as Partial<UserProfile>);
    });

    return () => data.subscription.unsubscribe();
  });

  export let data: PageData;

  let { supabase, session } = data;
  $: ({ session, supabase } = data);
  $: sessionStore.set(session);
</script>

<main class="mx-0 grid min-h-screen w-screen grid-rows-1 p-0 text-center transition-colors duration-1000">
  <slot />
</main>

<style>
  main {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/roxy1.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
</style>
