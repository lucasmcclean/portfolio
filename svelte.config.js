import { mdsvex } from 'mdsvex';
import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
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
