<script lang="ts">
    import { page } from "$app/stores";
    import Post from "$lib/components/thread/Post.svelte";
    import Reply from "$lib/components/thread/Reply.svelte";

    const replyItems: Array<ThreadReplyItem> = [
        { author: 'Test1', avatar: '/assets/images/fern1.png', content: 'Hello'},
        {
            author: 'Test2',
            avatar: '/assets/images/fern1.png',
            content: 'Content with reply',
            subitem: [
                { author: 'Test3', avatar: '/assets/images/fern1.png', content: 'Nice reply'},
                {
                    author: 'Test4',
                    avatar: '/assets/images/fern1.png',
                    content: 'Whats up',
                    subitem: [
                        {
                            author: 'Test5',
                            avatar: '/assets/images/fern1.png',
                            content: 'Not much. How about you?',
                            subitem: [
                                {
                                    author: 'Test6',
                                    avatar: '/assets/images/fern1.png',
                                    content: 'Good!'
                                },
                            ]
                        },
                    ]
                },
            ]}
    ]
</script>
<div class="w-auto p-8">
    <div class="bg-card rounded-xl w-full p-3">
        <span class="ts-h2">
            Awaiz' Secret Stash {$page.params.id}
        </span>
    </div>
    <div class="w-full p-3">
        <span class="ts-h2">
            GTA Threads
        </span>
    </div>
    <div class="flex flex-col gap-4 bg-card rounded-xl w-full p-6">
        <Post />
    </div>
    <div class="mt-4 flex flex-col gap-4 bg-card rounded-xl w-full p-4">
        {#each replyItems as item}
            <Reply {...item} />
        {/each}
    </div>
</div>