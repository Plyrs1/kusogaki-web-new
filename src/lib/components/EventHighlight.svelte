<script lang="ts">
  import { onDestroy } from 'svelte';

  import type { EventData } from './event';
  export let data: EventData;
  let countdown = new Date(data.date).getTime() - new Date().getTime();
  const pluralize = (day: number) => {
    return day > 1 ? 'days' : 'day';
  };
  const formatTime = (ms: number) => {
    if (ms < 0) return `00:00:00`;
    const _s = 1000;
    const _m = _s * 60;
    const _h = _m * 60;
    const _d = _h * 24;

    const d = Math.floor(ms / _d);
    const h = Math.floor((ms % _d) / _h);
    const m = Math.floor((ms % _h) / _m);
    const s = Math.floor((ms % _m) / _s);
    return `${d > 0 ? `${d} ${pluralize(d)},` : ''} ${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  const interval = setInterval(() => {
    countdown = (new Date(data?.date).getTime() || 0) - new Date().getTime();
    if (countdown > 0) return;
    countdown = 0;
    clearInterval(interval);
  }, 200);
  onDestroy(() => clearInterval(interval));
</script>

<div class="flex flex-col rounded-2xl bg-kusogaki-dark pb-6">
  <header
    class="w-full rounded-t-2xl bg-kusogaki-indigo p-2 text-center text-2xl uppercase text-white md:text-4xl lg:text-5xl"
    role="heading"
    aria-level="1"
  >
    NEXT EVENT IN {formatTime(countdown)}
  </header>
  <div class="overflow-clip p-4">
    <img loading="lazy" srcset={data.image} alt="banner" class="aspect-[3.18] w-full rounded-md object-cover object-center" />
  </div>
  <a href="#top" class="justify-center self-center rounded-xl bg-kusogaki-indigo px-4 py-1 text-center text-2xl uppercase text-white" role="button"
    >Get Notified
  </a>
</div>
