<script lang="ts">
  import Icon from '@iconify/svelte';

  import { goto } from '$app/navigation';
  import Editor from '$lib/components/thread/Editor.svelte';
  import Post from '$lib/components/thread/Post.svelte';

  const postItem: PostItem = {
    id: 'post1',
    avatar: '/assets/images/fern1.png',
    author: 'OP 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    createdAt: Date.now()
  };

  const handleCancelButton = () => {
    goto('..');
  };

  const handleSendButton = () => {
    goto('..');
  };
</script>

<div class="w-auto p-8">
  <div class="flex w-full flex-col gap-4 rounded-xl bg-card p-6">
    <Post isReplying={true} {...postItem} />
    <Editor />
    <div class="flex w-full justify-end">
      <button
        type="button"
        class="mb-2 me-2 inline-flex items-center rounded-lg px-3 py-2 text-center text-sm font-medium"
        on:click={handleCancelButton}
      >
        <span>Cancel</span>
      </button>
      <button
        type="button"
        class="mb-2 me-2 inline-flex items-center rounded-lg bg-button px-3 py-2 text-center text-sm font-medium"
        on:click={handleSendButton}
      >
        <Icon class="me-2 h-4 w-4" icon="iconoir:send" />
        <span>Send</span>
      </button>
    </div>
  </div>
</div>
