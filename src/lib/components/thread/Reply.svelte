<script lang="ts">
    import Icon from "@iconify/svelte";

    export let author: string;
    export let avatar: string;
    export let content: string;
    export let subitem: Array<ThreadReplyItem> = [];
    export let isSubitem = false;
    export let isCollapsed = false;

    const handleRootClick = (e: Event) => {
        e.stopPropagation();
        isCollapsed = !isCollapsed
    }
</script>
<div 
    class=" transition duration-75 hover:bg-black/10 cursor-pointer p-2 rounded-xl {isSubitem ? 'border-l-2 pl-4 pb-0 border-button rounded-l-none' : ''} {isCollapsed ? 'flex flex-row pb-4' : ''}"
    role="menuitem"
    tabindex="-1"
    on:click={handleRootClick}
    on:keydown={()=>{}}
>   
    <div class="flex flex-row items-center">
        <img class="w-12 h-12" src={avatar} alt="Profile" />
        <span class="h-fit line-clamp-1 flex-1">{author} • 1m</span>
    </div>
    {#if !isCollapsed}
        <div class="py-4">{content}</div>
    {/if}
    <div class="flex flex-row items-center {!isCollapsed ? 'pb-4' : 'w-full'}" >
        <button
            type="button"
            class="font-medium text-sm px-3 py-2 text-center inline-flex items-center"
        >
            <Icon class="w-4 h-4 me-2" icon="iconoir:heart" />
            <span>120 Likes</span>
        </button>
        <button
            type="button"
            class="font-medium text-sm px-3 py-2 text-center inline-flex items-center"
        >
            <Icon class="w-4 h-4 me-2" icon="iconoir:reply" />
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
