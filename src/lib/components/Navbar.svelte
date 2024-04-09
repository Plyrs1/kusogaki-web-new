<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { Unsubscriber } from 'svelte/store';
  import { slide } from 'svelte/transition';

  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { isMobile } from '$lib/stores/page';

  let currentPage: string | null = '/';
  let isNavbarOpen = true;

  $: currentPage = $page.route.id;

  // hacks to fix desktop navbar not showing in first page load
  // original code:
  // let unsubscribeIsMobile = isMobile.subscribe((value) => (isNavbarOpen = !value));
  let unsubscribeIsMobile: Unsubscriber;
  onMount(() => {
    unsubscribeIsMobile = isMobile.subscribe((value) => (isNavbarOpen = !value));
  });
  onDestroy(() => unsubscribeIsMobile && unsubscribeIsMobile());

  interface NavigationItem {
    label: string;
    href: string;
  }
  const navItems: Array<NavigationItem> = [
    { label: 'Home', href: '/' },
    { label: 'Team', href: '/team' },
    { label: 'Events', href: '/events' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Login', href: '/#top' }
  ];
</script>

<nav class="fixed z-10 w-full bg-kusogaki-indigo" id="top">
  <div class="container flex flex-col items-stretch gap-5 p-5 lg:flex-row lg:justify-between">
    <header class="logo-style flex justify-between text-left font-inter text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
      <div class="logo-jp">クソガキ</div>
      <div class="logo-en">/ku so ga ki/</div>
      <div class="lg:hidden"><button on:click={() => (isNavbarOpen = !isNavbarOpen)}>=</button></div>
    </header>
    {#if isNavbarOpen}
      <div class="gap-2 self-center pt-4 font-lemon-milk text-lg uppercase text-white sm:text-2xl lg:flex lg:pt-0" transition:slide>
        <ul class="flex flex-col gap-2 lg:flex-row lg:gap-0">
          {#each navItems as navItem}
            <li>
              <a
                href="{base}{navItem.href}"
                class="p-1 lg:p-4 {currentPage === navItem.href ? 'active' : ''}"
                on:click={() => {
                  if ($isMobile) isNavbarOpen = false;
                }}>{navItem.label}</a
              >
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</nav>

<style>
  a {
    position: relative;
    z-index: 20;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
    color: rgb(98 105 200);
  }
  a.active {
    color: rgb(98 105 200);
    background-color: #fff;
  }
  a::before {
    background-color: #fff;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;

    bottom: 0;
    left: 0;
    transform-origin: bottom;
    transform: scaleY(0);
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }

  a:hover::before {
    transform-origin: bottom;
    transform: scaleY(1);
  }

  .logo-style {
    text-shadow: 4px 4px 8px rgba(22, 22, 22, 0.3);
  }

  .logo-style:hover .logo-jp {
    display: none;
  }

  .logo-style .logo-en {
    display: none;
  }

  .logo-style:hover .logo-en {
    display: block;
  }
</style>
