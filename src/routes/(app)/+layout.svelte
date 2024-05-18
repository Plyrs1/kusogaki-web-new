<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import { isMobile } from '$lib/stores/page';
  let innerWidth = 0;
  $: if (innerWidth > 1024) isMobile.set(false);
  else isMobile.set(true);
</script>

<svelte:window bind:innerWidth />

<Navbar />
<div class="pt-32">
  <slot />
</div>
<Footer />
