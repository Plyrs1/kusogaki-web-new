<script lang="ts">
  import type { EventData } from '$lib/components/event';
  import EventCard from '$lib/components/EventCard.svelte';
  import EventHighlight from '$lib/components/EventHighlight.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import type { PageData } from './$types';

  interface EventReducer {
    upcoming: Array<EventData>;
    past: Array<EventData>;
  }
  export let data: PageData;
  const splitData = data.eventData.toSorted((a,b) => b.date - a.date).reduce<EventReducer>(
    (carry, item) => {
      if (item.date > new Date().getTime()) carry.upcoming.push(item);
      else carry.past.push(item);
      return carry;
    },
    { upcoming: [], past: [] }
  );
</script>

<!--
  WIP: remove unnecessary classes, because they were generated from figma
-->
<Meta />
<div class="container flex flex-col gap-4">
  <Hero />
  <EventHighlight data={splitData.upcoming.slice(0, 1)[0]} />

  <div class="mb-12 flex flex-col items-center rounded-2xl bg-kusogaki-dark">
    <div class="p-4 text-center text-5xl uppercase text-white">Upcoming Events</div>
    <div class="grid w-full grid-cols-3 content-start items-stretch justify-center gap-4 self-stretch p-4">
      {#each splitData.upcoming.slice(1) as data}
        <EventCard bind:data />
      {/each}
    </div>
  </div>
  <div class="mb-12 flex flex-col items-center rounded-2xl bg-kusogaki-dark">
    <div class="p-4 text-center text-5xl uppercase text-white">Past Events</div>
    <div class="grid w-full grid-cols-3 content-start items-stretch justify-center gap-4 self-stretch p-4">
      {#each splitData.past as data}
        <EventCard bind:data />
      {/each}
    </div>
  </div>
</div>
