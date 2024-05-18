<script lang="ts">
  import { onMount } from 'svelte';

  import { isLoggedIn } from '$lib/stores/page';

  import type { PageData } from './$types';

  export let data: PageData;

  onMount(() => {
    setTimeout(async () => {
      await data.supabase.auth.signOut();
      window.location.href = '/';
      $isLoggedIn = false;
    }, 3000);
  });
</script>

<div class="container flex h-full flex-col items-center justify-center">
  <div class="flex w-64 flex-col gap-2 rounded-lg bg-kusogaki-dark p-4 text-white">Logging out...</div>
</div>
