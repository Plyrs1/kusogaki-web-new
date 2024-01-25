<script lang="ts">
  export let header = 'Kusogaki';
  export let content =
    'Type some motivational word here, possibly to make people wants to read more and engaged. Idk what else to write smh I really need to learn public speaking.';
  let [title, subtitle] = header.split('|');
</script>

<div class="mx-auto flex max-w-xl flex-col">
  <header class="mt-24 self-center whitespace-nowrap text-center drop-shadow-[6px_6px_4px_rgba(0,0,0,0.9)]" role="heading" aria-level="1">
    {#if subtitle}
      <p class="text-5xl text-white">{title}</p>
      <p class="text-8xl text-kusogaki-indigo">{subtitle}</p>
    {:else}
      <p class="text-8xl text-kusogaki-indigo">{title}</p>
    {/if}
  </header>
  <div class="mt-6 w-full text-center text-2xl text-white drop-shadow-[6px_6px_4px_rgba(0,0,0,0.9)]" aria-label="Motivational Text">
    {content}
  </div>
  <a
    href="#top"
    class="mb-12 mt-6 self-center rounded-xl bg-kusogaki-indigo px-6 py-1.5 text-2xl uppercase text-white max-md:mb-10 max-md:px-5"
    role="button"
    aria-label="Learn More">Learn More</a
  >
</div>
