<script lang="ts">
  import type { EventData } from './event';
  export let data: EventData;
  const formatDate = (date: number) => {
    const dateObj = new Date(date)
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
</script>

<div class="flex w-full flex-col items-stretch">
  <img alt="event" loading="lazy" srcset={data.image} class="aspect-[3.18] w-full rounded-md object-cover object-center" />
  <div class="mt-1 overflow-ellipsis whitespace-nowrap text-center text-2xl uppercase text-kusogaki-purple">
    {data.title}
  </div>
  <div class="overflow-ellipsis whitespace-nowrap text-center text-sm uppercase text-neutral-300">
    {formatDate(data.date)}
  </div>
</div>
