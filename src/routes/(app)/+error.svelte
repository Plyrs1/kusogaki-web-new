<script>
  import { page } from '$app/stores';
</script>

<div class="container flex h-full flex-col items-center justify-center">
  <div class="flex w-64 flex-col gap-2 rounded-lg bg-kusogaki-dark p-4 text-white">
    {$page.error?.message ?? 'Unexpected error happened.'}
  </div>
</div>
