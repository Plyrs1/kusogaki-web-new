<script lang="ts">
  import '../../app.pcss';

  import { onMount } from 'svelte';

  import { goto, invalidate } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import { isLoggedIn, isMobile } from '$lib/stores/page';

  import type { PageData } from './$types';

  let innerWidth = 0;
  $: if (innerWidth > 1024) isMobile.set(false);
  else isMobile.set(true);

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      if (newSession?.expires_at !== session?.expires_at) {
        $isLoggedIn = false;
        invalidate('supabase:auth');
        setTimeout(() => {
          goto('/', { invalidateAll: true });
        }, 3000);
      }
      if (session?.expires_at ?? 0 > Date.now() / 1000) $isLoggedIn = true;
    });

    return () => data.subscription.unsubscribe();
  });

  export let data: PageData;

  let { supabase, session } = data;
  $: ({ session, supabase } = data);
</script>

<svelte:window bind:innerWidth />

<main class="mx-0 grid min-h-screen w-screen grid-rows-1 p-0 text-center transition-colors duration-1000">
  <Navbar />
  <div class="pt-32">
    <slot />
  </div>
  <Footer />
</main>

<style>
  main {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/roxy1.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
</style>
