<script lang="ts">
    import { onMount } from 'svelte';

  export let data;
</script>

<svelte:head>
  <title>{data?.metadata?.title ? data.metadata.title + ' | StandardCSS' : 'StandardCSS'}</title>
</svelte:head>

<main>
  {#if data?.metadata?.title}
    <h1>{data.metadata.title}</h1>
  {/if}

  <svelte:component this={data.content} />
</main>
