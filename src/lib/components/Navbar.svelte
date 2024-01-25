<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  let currentPage: string | null = '/';
  $: currentPage = $page.route.id;

  interface NavigationItem {
    label: string;
    href: string;
  }
  const navItems: Array<NavigationItem> = [
    { label: 'Home', href: '/' },
    { label: 'Team', href: '/team' },
    { label: 'Events', href: '/events' },
    { label: 'FAQ', href: '/faq' }
  ];
</script>

<nav class="z-10 w-full" id="top">
  <span class="flex items-stretch justify-between gap-5 bg-kusogaki-indigo py-5 pl-16 pr-20 max-md:flex-wrap max-md:px-5">
    <header class="my-auto text-center font-kozuka-gothic text-5xl text-white max-md:text-4xl">クソガキ</header>
    <span
      class="my-auto flex items-stretch justify-between gap-5 self-center text-center font-lemon-milk text-2xl uppercase text-white max-md:max-w-full max-md:flex-wrap"
    >
      <ul class="mt-32 flex flex-col lg:mt-0 lg:flex-row">
        {#each navItems as navItem}
          <li class="py-4">
            <a href="{base}{navItem.href}" class="font-lemon-milk text-3xl text-white {currentPage === navItem.href ? 'active' : ''}"
              >{navItem.label}</a
            >
          </li>
        {/each}
        <li class="py-4">
          <a href="#top" class="font-lemon-milk text-3xl text-white">Login</a>
        </li>
      </ul>
    </span>
  </span>
</nav>

<style>
  a {
    position: relative;
    padding: 1rem;
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
</style>
