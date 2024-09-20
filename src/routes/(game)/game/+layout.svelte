<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import { isMobile } from '$lib/stores/page';
  import type { NavigationItem } from '$lib/types/navigation';
  let innerWidth = 0;
  $: if (innerWidth > 1024) isMobile.set(false);
  else isMobile.set(true);

  const navItems: Array<NavigationItem> = [{ label: 'Home', href: '/' }];
</script>

<svelte:window bind:innerWidth />
<Navbar {navItems} />
<slot />
