<script lang="ts">
  import '../../../src/main.scss';

  const { children } = $props();
</script>

<style lang="scss">
  :root {
    --nav-bg-light: #fff8;
    --nav-bg-dark: #0008;
  }
</style>

{@render children()}