<script lang="ts">
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';

  import Item from '$lib/components/sidebar/Item.svelte';
  import type { SidebarItem } from '$lib/components/sidebar/sidebar';
  const menuItems: Array<SidebarItem> = [
    { name: 'Home', icon: 'iconoir:home' },
    {
      name: 'Threads',
      icon: 'iconoir:message-text',
      subitem: [
        { name: 'Guess the Anime', href: '/admin/thread/gta', icon: 'iconoir:question-mark-circle' },
        { name: 'FAQ', href: '/admin/thread/faq', icon: 'iconoir:emoji-puzzled' }
      ],
      unread: 10
    },
    {
      name: 'Posts',
      icon: 'iconoir:post',
      subitem: [
        { name: 'Post by a', href: '/admin/post/1' },
        { name: 'Post by b', href: '/admin/post/2' },
        { name: 'Post by c', href: '/admin/post/3' }
      ]
    }
  ];

  let isSidebarVisible = false;

  const handleSidebarToggleButton = (e: Event) => {
    e.preventDefault();
    isSidebarVisible = !isSidebarVisible;
    console.log({ isSidebarVisible });
  };

  onMount(() => {});
</script>

<div class="min-h-full min-w-full bg-card">
  <nav class="fixed top-0 z-50 w-full">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button type="button" class="inline-flex items-center rounded-lg p-2 text-sm text-white sm:hidden" on:click={handleSidebarToggleButton}>
            <span class="sr-only">Open sidebar</span>
            <Icon icon="iconoir:menu" class="h-6 w-6" />
          </button>
          <a href="/" class="ms-2 flex md:me-24">
            <!-- TODO: add logo-->
            <!-- <img src="/assets/logo.svg" class="h-8 me-3" alt="Logo" /> -->
            <span class="self-center whitespace-nowrap text-xl font-semibold text-white sm:text-2xl">Logo, maybe?</span>
          </a>
        </div>
        <div class="flex items-center">
          <div class="ms-3 flex items-center">
              <button
                type="button"
                class="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full bg-dark" src="/assets/images/fern1.png" alt="user" />
              </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <aside
    id="logo-sidebar"
    class="fixed left-0 top-0 z-40 h-screen w-64 bg-dark pt-20 text-left transition-transform {!isSidebarVisible
      ? '-translate-x-full'
      : 'translate-x-0'} sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full overflow-clip px-3">
      <ul class="space-y-2 font-medium text-white">
        {#each menuItems as item}
          <Item {...item} />
        {/each}
      </ul>
    </div>
  </aside>

  <div class="mt-14 w-auto bg-dark text-left text-white sm:ml-64">
    <slot />
  </div>
</div>
<svelte:head>
  <style>
    html {
      @apply bg-dark;
    }
  </style>
</svelte:head>
