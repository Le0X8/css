<script lang="ts">
  import '../../../src/main.scss';

  const { children } = $props();

  type NavEntry = { title: string, href: string };
  type NavGroup = { title: string, href: string, entries: NavEntry[] };
  type NavItem = NavEntry | NavGroup;

  const nav: NavItem[] = [
    { title: 'Home', href: '/' },
    { title: 'Features', href: '/' },
    { title: 'Components', href: '/', entries: [] },
    { title: 'Customization', href: '/' },
  ];
</script>

<style lang="scss">
  :root {
    --nav-bg-light: #fff8;
    --nav-bg-dark: #0008;
  }
</style>

<nav>
  <a href="/">
    <img src="/favicon.png" alt="favicon" />
    <h1>StandardCSS</h1>
  </a>

  {#each nav as item}
    {#if 'entries' in item}
      <div data-expand>
        <input type="checkbox" id="expand-{item.title}" />
        <label for="expand-{item.title}">
          <a href="{item.href}">{item.title}</a>
        </label>
        <div>
          {#each item.entries as entry}
            <a href="{entry.href}">{entry.title}</a>
          {/each}
        </div>
        <label for="expand-{item.title}" data-close></label>
      </div>
    {:else}
      <a href="{item.href}">{item.title}</a>
    {/if}
  {/each}

  <div data-cta>
    <a href="/" data-primary>Install</a>
    <a href="https://github.com/StandardCSS/StandardCSS">Contribute</a>
  </div>
</nav>

{@render children()}c