<script lang="ts">
   import Item from '$lib/components/sidebar/Item.svelte';
  import type { SidebarItem } from '$lib/components/sidebar/sidebar';
   import { onMount } from 'svelte';
   const menuItems: Array<SidebarItem> = [
      {name: "Home", icon: "iconoir:home"},
      {
         name: "Threads",
         icon: "iconoir:message-text",
         subitem: [
            {name: "Guess the Anime", href:"/admin/threads/gta", icon: "iconoir:question-mark-circle"},
            {name: "FAQ", href:"/admin/threads/faq", icon: "iconoir:emoji-puzzled"},
         ],
         unread: 10,
      },
      {
         name: "Posts",
         icon: "iconoir:post",
         subitem: [
            {name: "Post by a", href:"/admin/posts/1"},
            {name: "Post by b", href:"/admin/posts/2"},
            {name: "Post by c", href:"/admin/posts/3"},
         ]
      },
   ]
   onMount(() => {
   })
</script>

<div class="bg-card min-w-full min-h-full">
   
<nav class="fixed top-0 z-50 w-full">
   <div class="px-3 py-3 lg:px-5 lg:pl-3">
     <div class="flex items-center justify-between">
       <div class="flex items-center justify-start rtl:justify-end">
         <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
             <span class="sr-only">Open sidebar</span>
             <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
             </svg>
          </button>
         <a href="https://flowbite.com" class="flex ms-2 md:me-24">
           <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" /> -->
           <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">Logo, maybe?</span>
         </a>
       </div>
       <div class="flex items-center">
           <div class="flex items-center ms-3">
             <div>
               <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                 <span class="sr-only">Open user menu</span>
                 <img class="w-8 h-8 rounded-full bg-dark" src="/assets/images/fern1.png" alt="user">
               </button>
             </div>
             <div class="z-50 hidden my-4 text-base list-none divide-y divide-gray-100 rounded shadow" id="dropdown-user">
               <div class="px-4 py-3" role="none">
                 <p class="text-sm text-gray-900" role="none">
                   Neil Sims
                 </p>
                 <p class="text-sm font-medium text-gray-900 truncate" role="none">
                   neil.sims@flowbite.com
                 </p>
               </div>
               <ul class="py-1" role="none">
                 <li>
                   <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                 </li>
                 <li>
                   <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                 </li>
                 <li>
                   <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Earnings</a>
                 </li>
                 <li>
                   <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                 </li>
               </ul>
             </div>
           </div>
         </div>
     </div>
   </div>
</nav>
<aside id="logo-sidebar" class="text-left fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 overflow-clip">
      <ul class="space-y-2 font-medium text-white">
      {#each menuItems as item}
         <Item {...item} />
      {/each}
      </ul>
   </div>
</aside>
 
<div class="mt-14 ml-64 w-auto bg-dark text-white text-left">
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