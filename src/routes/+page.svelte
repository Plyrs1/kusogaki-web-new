<script lang="ts">
  import type { EventData } from '$lib/components/event';
  import EventCard from '$lib/components/EventCard.svelte';
  import EventHighlight from '$lib/components/EventHighlight.svelte';
  import Hero from '$lib/components/Hero.svelte';

  const eventData: Array<EventData> = [
    { title: 'Mystery Day', date: new Date('05-14-2023'), image: 'http://localhost:5173/assets/images/640x214.svg' },
    { title: 'Waifu Day', date: new Date('08-2-2023'), image: 'http://localhost:5173/assets/images/640x214.svg' },
    { title: 'Monster Day', date: new Date('11-20-2023'), image: 'http://localhost:5173/assets/images/640x214.svg' },
    { title: 'Shoujo Day', date: new Date('02-28-2023'), image: 'http://localhost:5173/assets/images/640x214.svg' },
    { title: 'Sakura Day', date: new Date('03-27-2023'), image: 'http://localhost:5173/assets/images/640x214.svg' },
    { title: 'Art Day', date: new Date('04-15-2023'), image: 'http://localhost:5173/assets/images/640x214.svg' },
    { title: 'Super Hero Day', date: new Date('04-28-2023'), image: 'http://localhost:5173/assets/images/640x214.svg' },
    { title: 'Light Novel Day', date: new Date('03-25-2023'), image: 'http://localhost:5173/assets/images/640x214.svg' },
    { title: 'Studio Ghibli Day', date: new Date('06-15-2023'), image: 'http://localhost:5173/assets/images/640x214.svg' }
  ];
  const data: EventData = {
    title: 'Countdown test',
    date: new Date('01-24-2024 20:00:00'),
    image: 'http://localhost:5173/assets/images/640x214.svg'
  };
</script>

<!--
  WIP: remove unnecessary classes, because they were generated from figma
-->
<div class="container flex flex-col gap-4">
  <Hero />
  <EventHighlight {data} />

  <div class="container mb-12 flex flex-col items-center rounded-2xl bg-kusogaki-dark">
    <div class="p-4 text-center text-5xl uppercase text-white">Upcoming Events</div>
    <div class="grid w-full grid-cols-3 content-start items-stretch justify-center gap-4 self-stretch p-4">
      {#each eventData as data}
        <EventCard bind:data />
      {/each}
    </div>
  </div>
</div>
