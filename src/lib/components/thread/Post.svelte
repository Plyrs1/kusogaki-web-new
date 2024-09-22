<script lang="ts">
  import Icon from '@iconify/svelte';

  import { goto } from '$app/navigation';
  export let isReplying = false;
  export let id: string;
  export let author: string;
  export let content: string;
  export let likes: number = 0;
  export let replies: number = 0;
  export let createdAt: number;

  const handleReplyClick = () => {
    goto(`/admin/thread/${id}/reply`);
  };
</script>

<div class="flex flex-row items-center">
  {#if isReplying}
    <span class="pr-4">
      Replying to: {id}
    </span>
  {/if}
  <img class="h-16 w-16" src="/assets/images/fern1.png" alt="Profile" />
  <span class="h-fit flex-1">{author}</span>
  <span class="h-fit">{new Date(createdAt).toLocaleDateString()}</span>
</div>
<span class="">{content}</span>
{#if !isReplying}
  <div class="flex flex-row items-center">
    <button type="button" class="mb-2 me-2 inline-flex items-center rounded-lg bg-button px-3 py-2 text-center text-sm font-medium">
      <Icon class="me-2 h-4 w-4" icon="iconoir:heart" />
      <span>{likes} Likes</span>
    </button>
    <button
      type="button"
      class="mb-2 me-2 inline-flex items-center rounded-lg bg-button px-3 py-2 text-center text-sm font-medium"
      on:click={handleReplyClick}
    >
      <Icon class="me-2 h-4 w-4" icon="iconoir:chat-bubble-empty" />
      <span>{replies} Replies</span>
    </button>
  </div>
{/if}
