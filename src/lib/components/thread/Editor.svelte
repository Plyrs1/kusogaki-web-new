<script lang="ts">
  import './editor.css';
  import { Carta, MarkdownEditor } from 'carta-md';

  export let value: string = '';

  const carta = new Carta({
    sanitizer: false
  });
</script>

<MarkdownEditor {carta} bind:value mode="split" placeholder="Write something..." />
