<script lang="ts">
  export let title: string;
  export let className: string = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
</script>

<div class="flex flex-col items-center gap-2 rounded-2xl bg-kusogaki-dark p-2 lg:gap-4 lg:p-4">
  <div class="text-center text-2xl uppercase text-white md:text-3xl lg:text-4xl">{title}</div>
  <div class="{className} grid w-full content-start items-stretch justify-center gap-4 self-stretch">
    <slot />
  </div>
</div>
