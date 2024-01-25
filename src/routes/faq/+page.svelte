<script lang="ts">
  import Accordion from '$lib/components/Accordion.svelte';
  import Hero from '$lib/components/Hero.svelte';

  import type { PageData } from './$types';
  let currentFaq: number | null = null;
  export let data: PageData;
</script>

<div class="grid w-full place-items-center p-4">
  <Hero header="Frequently Asked|Question" />
  <div class="container flex w-full flex-col place-items-center gap-4">
    {#each data.faqLists as faqList, index}
      <Accordion question={faqList.question} answer={faqList.answer} bind:currentFaq {index} />
    {/each}
  </div>
</div>
