<script lang="ts">
  import type { EventData } from '$lib/components/event';
  import EventCard from '$lib/components/EventCard.svelte';
  import EventHighlight from '$lib/components/EventHighlight.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import Panel from '$lib/components/Panel.svelte';

  import type { PageData } from './$types';

  interface EventReducer {
    upcoming: Array<EventData>;
    past: Array<EventData>;
  }
  export let data: PageData;
  data.eventData.sort((a, b) => a.date - b.date);
  const splitData = data.eventData.reduce<EventReducer>(
    (carry, item) => {
      if (item.date > new Date().getTime()) carry.upcoming.push(item);
      else carry.past.push(item);
      return carry;
    },
    { upcoming: [], past: [] }
  );
</script>

<Meta />
<div class="container flex flex-col gap-4">
  <Hero header="Welcome to|Kusogaki" />
  <EventHighlight data={splitData.upcoming.slice(0, 1)[0]} />
  <Panel title="Upcoming Events">
    {#each splitData.upcoming.slice(1) as data}
      <EventCard bind:data />
    {/each}
  </Panel>
  <Panel title="Past Events">
    {#each splitData.past as data}
      <EventCard bind:data />
    {/each}
  </Panel>
</div>
