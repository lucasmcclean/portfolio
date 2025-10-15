import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { createHighlighter } from 'shiki';
import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const { default: theme } = await import('@shikijs/themes/tokyo-night');
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
					let html = highlighter.codeToHtml(code, {
						lang: lang,
						theme: theme,
						transformers: [
							{
								name: 'color-replace',
								tokens(tokens) {
									for (const line of tokens) {
										for (const token of line) {
											if (token.color === '#51597D') token.color = '#CCAAAA';
										}
									}
								}
							}
						]
					});
					return `{@html \`${html}\`}`;
				}
			},
			smartypants: {
				quotes: true,
				ellipses: true,
				backticks: false,
				dashes: true
			},
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'append',
						properties: {
							ariaLabel: 'Link to this section'
						},
						content: {
							type: 'text',
							value: '&nbsp;&nbsp;§'
						}
					}
				]
			],
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
