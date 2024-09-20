<script lang="ts">
  import { page } from '$app/stores';
  import Meta from '$lib/components/Meta.svelte';
  console.log($page.params);
</script>

<Meta title={`Higher Lower: ${$page.params.id ?? 1}`} />
ID : {$page.params.id}
