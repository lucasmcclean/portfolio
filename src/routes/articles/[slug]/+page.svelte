<script lang="ts">
	import { error } from '@sveltejs/kit';
	import { getArticleModule } from '$lib/articles';
	import Navbar from '$lib/components/Navbar.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';

	const { data } = $props();
	const { slug } = data;

	const mod = getArticleModule(slug);
	if (!mod) throw error(404, `Article "${slug}" not found`);

	const Content = mod.Content;
	const article = mod.metadata;
</script>

<ArticleMeta {article} />

<Navbar />

{#if Content && article}
	<article>
		<h1>{article.title}</h1>
		<p>
			{new Date(article.date).toLocaleDateString(undefined, {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
			{#if article.authors.length}
				· by {article.authors.join(', ')}
			{/if}
		</p>
		<Content />
	</article>
{:else}
	<p>Loading...</p>
{/if}

<footer class="xs:text-base mt-auto w-full space-y-2 py-8 text-sm opacity-80">
	<div class="flex flex-wrap justify-between">
		<p>&copy; 2025 Lucas McClean. All rights reserved.</p>
		<p class="font-display text-primary ms-auto">//LM</p>
	</div>
</footer>
