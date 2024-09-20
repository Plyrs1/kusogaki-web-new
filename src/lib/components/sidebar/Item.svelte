<script lang="ts">
    import Icon from "@iconify/svelte";
    import { createEventDispatcher } from "svelte";
    import { slide } from "svelte/transition";
    import { goto } from "$app/navigation";
    import type { SidebarItem } from "./sidebar";

    export let name: string;
    export let icon: string = "";
    export let href: string = "";
    export let subitem: Array<SidebarItem> = [];
    export let isSubitem = false;
    export let unread: number = 0;

    let isSubitemOpen = false;
    const dispatch = createEventDispatcher();
    const handleItemClick = () => {
        if (subitem && subitem.length > 0) return isSubitemOpen = !isSubitemOpen;
        if (href) return goto(href);
        dispatch('itemclick', name)
    }
</script>

<li>
    <button
        type="button"
        class="flex items-center w-full p-2 text-base transition duration-75 group hover:bg-black/10 text-left {isSubitemOpen ? 'bg-black/10 rounded-t-lg' : (!isSubitem ? 'rounded-lg' : '')}"
        on:click={handleItemClick}
    >
        {#if icon}
            <Icon icon={icon} class="w-5 h-5 transition duration-75"/>
        {/if}
        <span class="ms-3 whitespace-nowrap line-clamp-1">{name}</span>
        {#if unread && unread > 0}
            <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                {unread}
            </span>
        {/if}
        {#if !icon} 
            <Icon icon="iconoir:check-circle" class="text-green-400 ml-auto duration-75 w-5 h-5 transition {isSubitemOpen ? 'rotate-180' : ''}"/>
        {/if}
        {#if subitem?.length > 0}
            <Icon icon="iconoir:nav-arrow-down" class="ml-auto duration-75 w-5 h-5 transition {isSubitemOpen ? 'rotate-180' : ''}"/>
        {/if}
    </button>
    {#if subitem && subitem.length > 0 && isSubitemOpen} 
        <ul class="py-2 space-y-2 bg-black/10 rounded-b-lg" transition:slide >
            {#each subitem as item}
                <svelte:self {...item} isSubitem={true} />
            {/each}
        </ul>
    {/if}
</li>