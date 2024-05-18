<script>
  import { page } from '$app/stores';
</script>

<div class="container flex h-full flex-col items-center justify-center">
  <div class="flex w-64 flex-col gap-2 rounded-lg bg-kusogaki-dark p-4 text-white">
    <p class="text-4xl">
      {$page.status ?? 404}
    </p>
    <br />
    {$page.error?.message ?? 'Unexpected error happened.'}
    <br />
    <br />
    <a href="/">Back to Home</a>
  </div>
</div>

<style>
  a {
    text-decoration: underline;
  }
  a:hover {
    color: #8e8e8e;
  }
</style>
