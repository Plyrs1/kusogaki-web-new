<script lang="ts">
  import Icon from '@iconify/svelte';
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  import { goto } from '$app/navigation';

  import type { SidebarItem } from './sidebar';

  export let name: string;
  export let icon: string = '';
  export let href: string = '';
  export let subitem: Array<SidebarItem> = [];
  export let isSubitem = false;
  export let unread: number = 0;

  let isSubitemOpen = false;
  const dispatch = createEventDispatcher();
  const handleItemClick = () => {
    if (subitem && subitem.length > 0) return (isSubitemOpen = !isSubitemOpen);
    if (href) return goto(href);
    dispatch('itemclick', name);
  };
</script>

<li>
  <button
    type="button"
    class="group flex w-full items-center p-2 text-left text-base transition duration-75 hover:bg-black/10 {isSubitemOpen
      ? 'rounded-t-lg bg-black/10'
      : !isSubitem
        ? 'rounded-lg'
        : ''}"
    on:click={handleItemClick}
  >
    {#if icon}
      <Icon {icon} class="h-5 w-5 transition duration-75" />
    {/if}
    <span class="ms-3 line-clamp-1 whitespace-nowrap">{name}</span>
    {#if unread && unread > 0}
      <span
        class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      >
        {unread}
      </span>
    {/if}
    {#if !icon}
      <Icon icon="iconoir:check-circle" class="ml-auto h-5 w-5 text-green-400 transition duration-75 {isSubitemOpen ? 'rotate-180' : ''}" />
    {/if}
    {#if subitem?.length > 0}
      <Icon icon="iconoir:nav-arrow-down" class="ml-auto h-5 w-5 transition duration-75 {isSubitemOpen ? 'rotate-180' : ''}" />
    {/if}
  </button>
  {#if subitem && subitem.length > 0 && isSubitemOpen}
    <ul class="space-y-2 rounded-b-lg bg-black/10 py-2" transition:slide>
      {#each subitem as item}
        <svelte:self {...item} isSubitem={true} />
      {/each}
    </ul>
  {/if}
</li>
