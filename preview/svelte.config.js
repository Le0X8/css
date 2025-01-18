import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      highlight: {
        highlighter: async (code, lang = 'text') => {
          const highlighter = await createHighlighter({
            themes: ['github-dark'],
            langs: ['typescript', 'svelte', 'scss', 'bash'],
          });
          await highlighter.loadLanguage('typescript', 'svelte', 'scss', 'bash');
          const html = escapeSvelte(
            highlighter.codeToHtml(code, { lang, theme: 'github-dark' })
          );
          return `{@html \`${html}\` }`;
        },
      },
    }),
  ],

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),

    prerender: {
      handleHttpError: 'warn'
    }
  },

  extensions: ['.svelte', '.svx'],
};

export default config;
