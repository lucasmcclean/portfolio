import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';
import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const { default: theme } = await import('@shikijs/themes/vitesse-dark');
const highlighter = await createHighlighter({
	theme: theme,
	langs: ['go', 'bash']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
			highlight: {
				highlighter: async (code, lang) => {
					let html = highlighter.codeToHtml(code, { lang: lang, theme: theme });
					return `{@html \`${html}\`}`;
				}
			},
			smartypants: {
				quotes: true,
				ellipses: true,
				backticks: false,
				dashes: true
			},
			layout: {
				article: 'src/lib/components/internal/ArticleLayout.svelte'
			}
		})
	],
	kit: {
		adapter: staticAdapter({
			fallback: '404.html'
		})
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
