<script lang="ts">
  import Accordion from '$lib/components/Accordion.svelte';
  import Hero from '$lib/components/Hero.svelte';

  import type { PageData } from './$types';
  let currentFaq: number | null = null;
  export let data: PageData;
</script>

<div class="container flex flex-col">
  <Hero header="Frequently Asked|Question" />
  <div class="flex flex-col gap-4">
    {#each data.faqLists as faqList, index}
      <Accordion question={faqList.question} answer={faqList.answer} bind:currentFaq {index} />
    {/each}
  </div>
</div>
