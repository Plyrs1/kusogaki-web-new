<script lang="ts">
  export let header = 'Kusogaki';
  export let content =
    'Type some motivational word here, possibly to make people wants to read more and engaged. Idk what else to write smh I really need to learn public speaking.';
  let [title, subtitle] = header.split('|');
</script>

<div class="mx-auto flex w-full max-w-xl flex-col">
  <header class="mt-24 self-center text-center drop-shadow-[6px_6px_4px_rgba(0,0,0,0.9)]" role="heading" aria-level="1">
    {#if subtitle}
      <p class="text-4xl text-white lg:text-5xl">{title}</p>
      <p class="text-7xl text-kusogaki-indigo lg:text-8xl">{subtitle}</p>
    {:else}
      <p class="text-7xl text-kusogaki-indigo lg:text-8xl">{title}</p>
    {/if}
  </header>
  <div class="text-md mt-6 w-full text-center text-white drop-shadow-[6px_6px_4px_rgba(0,0,0,0.9)] lg:text-2xl" aria-label="Motivational Text">
    {content}
  </div>
  <a
    href="#top"
    class="text-md my-8 self-center rounded-xl bg-kusogaki-indigo px-6 py-1.5 uppercase text-white lg:text-2xl"
    role="button"
    aria-label="Learn More">Learn More</a
  >
</div>
