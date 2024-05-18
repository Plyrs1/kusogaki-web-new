<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import Button from '$lib/components/Button.svelte';

  $: searchParams = new URLSearchParams($page.url.hash.replace('#', '?').replaceAll('#', '&'));
  $: message = searchParams.get('message');
</script>

<div class="container flex h-full flex-col items-center justify-center">
  <div class="flex w-64 flex-col gap-2 rounded-lg bg-kusogaki-dark p-4 text-white">
    To access feature only available for member, plase login
    <br />
    <Button text="Login with AniList" size="medium" click={() => goto('/login/anilist', { invalidateAll: true })} />
    {#if message}
      Error: {message}
    {/if}
  </div>
</div>
