<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { type Unsubscriber, type Writable, writable } from 'svelte/store';
  import { slide } from 'svelte/transition';

  import { isLoggedIn, isMobile } from '$lib/stores/page';
  import { profile } from '$lib/stores/session';

  let isMenuVisible: Writable<boolean> = writable(false);
  let hideMenu = (e: Event) => {
    const el = e.target as HTMLDivElement;
    if (el.closest('avatar') || el.id === 'avatar') return;
    else isMenuVisible.set(false);
  };
  let avatarError = false;

  const onAvatarClick = () => !$isMobile && isMenuVisible.set(true);

  let isMenuUnsubscriber: Unsubscriber;
  let isMobileUnsubscriber: Unsubscriber;
  onMount(() => {
    isMenuUnsubscriber = isMenuVisible.subscribe((visible) => {
      if ($isMobile) return;
      if (visible) addEventListener('click', hideMenu);
      else removeEventListener('click', hideMenu);
    });
    isMobileUnsubscriber = isMobile.subscribe((mobile) => {
      if (!mobile) return;
      removeEventListener('click', hideMenu);
    });
  });

  onDestroy(() => {
    isMenuUnsubscriber && isMenuUnsubscriber();
    isMobileUnsubscriber && isMobileUnsubscriber();
    removeEventListener('click', hideMenu);
  });
</script>

<div class="relative flex flex-col items-center text-white lg:inline-block lg:pl-4">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    id="avatar"
    class="relative h-12 w-12 overflow-hidden rounded-full bg-gray-100 object-center"
    tabindex="0"
    role="button"
    on:click={onAvatarClick}
  >
    {#if !$profile?.avatar_url || avatarError}
      <svg
        class="pointer-events-none absolute -left-1 h-14 w-14 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
      </svg>
    {:else}
      <img class="pointer-events-none" alt="avatar" src={$profile?.avatar_url} on:error={() => (avatarError = true)} />
    {/if}
  </div>

  {#if $isMenuVisible || $isMobile}
    <div
      id="userDropdown"
      class="z-40 w-64 lg:absolute lg:-translate-x-48 lg:rounded-lg lg:bg-kusogaki-dark lg:shadow {isLoggedIn ? 'divide-y divide-white' : ''} mt-2"
      transition:slide
    >
      {#if $isLoggedIn}
        <div class="px-4 py-3 text-sm">
          <div>Hello {$profile?.username ?? ''}!</div>
        </div>
        <ul class="py-2 text-sm" aria-labelledby="avatarButton">
          <li class="px-4 py-2">
            <a href="/" class="px-4 py-2">Dashboard</a>
          </li>
          <li class="px-4 py-2">
            <a href="/" class="px-4 py-2">Settings</a>
          </li>
          <li class="px-4 py-2">
            <a href="/" class="px-4 py-2">Earnings</a>
          </li>
        </ul>
      {:else}
        <div class="px-4 py-3 text-sm">
          <div>To access feature only available for member, please login</div>
        </div>
      {/if}
      <div class="pb-3 pt-1">
        <a href={!$isLoggedIn ? '/login/anilist' : '/logout'} class="px-4 py-2 text-sm">{!$isLoggedIn ? 'Login with Anilist' : 'Logout'}</a>
      </div>
    </div>
  {/if}
</div>

<style>
  a {
    position: relative;
    z-index: 20;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
    color: rgb(98 105 200);
  }

  a::before {
    background-color: #fff;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;

    bottom: 0;
    left: 0;
    transform-origin: bottom;
    transform: scaleY(0);
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }

  a:hover::before {
    transform-origin: bottom;
    transform: scaleY(1);
  }
</style>
