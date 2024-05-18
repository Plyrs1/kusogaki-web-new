<script lang="ts">
  import { onMount } from 'svelte';

  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import EventCard from '$lib/components/EventCard.svelte';
  import EventHighlight from '$lib/components/EventHighlight.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import Panel from '$lib/components/Panel.svelte';
  import type { EventData } from '$lib/types/event';

  import type { PageData } from './$types';

  interface EventReducer {
    upcoming: Array<EventData>;
    past: Array<EventData>;
  }
  export let data: PageData;
  // data.eventData.sort((a, b) => a.date - b.date);
  const splitData = data.eventData.reduce<EventReducer>(
    (carry, item) => {
      if (item.isAnnounced) return carry;
      if (new Date(item.date).getTime() > Date.now()) carry.upcoming.push(item);
      else carry.past.push(item);
      return carry;
    },
    { upcoming: [], past: [] }
  );
  let eventHighlight = data.eventData.filter((i) => i.isAnnounced)[0];

  onMount(() => {
    // eslint-disable-next-line svelte/valid-compile
    const pageHash = new URLSearchParams($page.url.hash.replace('#', '?'));
    if (pageHash.get('error_description')) goto(`/login${$page.url.hash}`);
  });
</script>

<Meta />
<div class="container flex flex-col gap-4">
  <Hero header="Welcome to|Kusogaki" />
  {#if eventHighlight}
    <EventHighlight data={eventHighlight} />
  {/if}
  {#if splitData.upcoming.length > 0}
    <Panel title="Upcoming Events">
      {#each splitData.upcoming.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) as data}
        <EventCard bind:data />
      {/each}
    </Panel>
  {/if}
  <Panel title="Past Events">
    {#each splitData.past as data}
      <EventCard bind:data />
    {/each}
  </Panel>
</div>
