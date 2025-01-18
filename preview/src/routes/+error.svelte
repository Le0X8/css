<script lang="ts">
  import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} {page?.error?.message} | StandardCSS</title>
</svelte:head>

<main>
  <h1>{page.status} {page?.error?.message}</h1>
  <p>
    If you think this is a mistake, please <a href="https://github.com/StandardCSS/StandardCSS/issues/new">open an issue</a>.
  </p>
</main>