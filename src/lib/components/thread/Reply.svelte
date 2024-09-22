<script lang="ts">
  import Icon from '@iconify/svelte';

  import { goto } from '$app/navigation';

  export let id: string;
  export let author: string;
  export let avatar: string;
  export let content: string;
  export let subitem: Array<ThreadReplyItem> = [];
  export let isSubitem = false;
  export let isCollapsed = false;

  const handleRootClick = (e: Event) => {
    e.stopPropagation();
    isCollapsed = !isCollapsed;
  };

  const handleReplyClick = (e: Event) => {
    e.stopPropagation();
    goto(`reply/${id}`);
  };
</script>

<div
  class=" cursor-pointer rounded-xl p-2 transition duration-75 hover:bg-black/10 {isSubitem
    ? 'rounded-l-none border-l-2 border-button pb-0 pl-4'
    : ''} {isCollapsed ? 'flex flex-row pb-4' : ''}"
  role="menuitem"
  tabindex="-1"
  on:click={handleRootClick}
  on:keydown={() => {}}
>
  <div class="flex flex-row items-center">
    <img class="h-12 w-12" src={avatar} alt="Profile" />
    <span class="line-clamp-1 h-fit flex-1">{author} • 1m</span>
  </div>
  {#if !isCollapsed}
    <div class="py-4">{content}</div>
  {/if}
  <div class="flex flex-row items-center {!isCollapsed ? 'pb-4' : 'w-full'}">
    <button type="button" class="inline-flex items-center px-3 py-2 text-center text-sm font-medium">
      <Icon class="me-2 h-4 w-4" icon="iconoir:heart" />
      <span>120 Likes</span>
    </button>
    <button type="button" class="inline-flex items-center px-3 py-2 text-center text-sm font-medium" on:click={handleReplyClick}>
      <Icon class="me-2 h-4 w-4" icon="iconoir:reply" />
      <span>120 Replies</span>
    </button>
  </div>
  {#if subitem && subitem.length > 0 && !isCollapsed}
    <div>
      {#each subitem as item}
        <svelte:self {...item} isSubitem={true} />
      {/each}
    </div>
  {/if}
</div>
