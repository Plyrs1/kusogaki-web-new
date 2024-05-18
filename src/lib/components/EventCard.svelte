<script lang="ts">
  import type { EventData } from '$lib/types/event';
  export let data: EventData;
  const formatDate = (date: number) => {
    const dateObj = new Date(date);
    const ordinal = (day: number) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    };
    return `${dateObj.toLocaleDateString('en-us', { day: 'numeric', month: 'long' })}${ordinal(dateObj.getDate())}`;
  };
  const onImageError = (e: Event) => {
    (e.target as HTMLImageElement).srcset = '/assets/images/640x214.svg';
  };
</script>

<div class="flex w-full flex-col">
  <img
    alt="event"
    loading="lazy"
    srcset={data.image ?? '/assets/images/640x214.svg'}
    on:error={onImageError}
    class="aspect-[3.18] w-full rounded-md object-cover object-center"
  />
  <div class="text-xl uppercase text-kusogaki-purple md:text-2xl">
    {data.title}
  </div>
  <div class="text-xs uppercase text-neutral-300 md:text-sm">
    {formatDate(data.date)}
  </div>
</div>
