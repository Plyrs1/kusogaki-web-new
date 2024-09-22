<script lang="ts">
  import { page } from '$app/stores';
  import Post from '$lib/components/thread/Post.svelte';
  import Reply from '$lib/components/thread/Reply.svelte';

  const postItem: PostItem = {
    id: $page.params.threadId,
    avatar: '/assets/images/fern1.png',
    author: 'OP 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
    createdAt: Date.now()
  };

  const replyItems: Array<ThreadReplyItem> = [
    { id: 'reply1', author: 'Test1', avatar: '/assets/images/fern1.png', content: 'Hello', createdAt: Date.now() },
    {
      id: 'reply2',
      author: 'Test2',
      avatar: '/assets/images/fern1.png',
      content: 'Content with reply',
      createdAt: Date.now(),
      subitem: [
        { id: 'reply2-1', author: 'Test3', avatar: '/assets/images/fern1.png', content: 'Nice reply', createdAt: Date.now() },
        {
          id: 'reply2-2',
          author: 'Test4',
          avatar: '/assets/images/fern1.png',
          content: 'Whats up',
          createdAt: Date.now(),
          subitem: [
            {
              id: 'reply2-2-1',
              author: 'Test5',
              avatar: '/assets/images/fern1.png',
              content: 'Not much. How about you?',
              createdAt: Date.now(),
              subitem: [
                {
                  id: 'reply2-2-1-1',
                  author: 'Test6',
                  avatar: '/assets/images/fern1.png',
                  content: 'Good!',
                  createdAt: Date.now()
                }
              ]
            },
            {
              id: 'reply2-2-2',
              author: 'Test6',
              avatar: '/assets/images/fern1.png',
              content: 'Good!',
              createdAt: Date.now()
            }
          ]
        }
      ]
    }
  ];
</script>

<div class="w-auto p-8">
  <div class="w-full rounded-xl bg-card p-3">
    <span class="ts-h2">
      Awaiz' Secret Stash {$page.params.threadId}
    </span>
  </div>
  <div class="w-full p-3">
    <span class="ts-h2"> GTA Threads </span>
  </div>
  <div class="flex w-full flex-col gap-4 rounded-xl bg-card p-6">
    <Post {...postItem} />
  </div>
  <div class="mt-4 flex w-full flex-col gap-4 rounded-xl bg-card p-4">
    {#each replyItems as item}
      <Reply {...item} />
    {/each}
  </div>
</div>
