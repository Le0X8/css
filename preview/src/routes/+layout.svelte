<script lang="ts">
  import '../../../src/main.scss';

  const { children } = $props();
</script>

<style>
  :root {
    --accent: #0284c7;
  }
</style>

{@render children()}