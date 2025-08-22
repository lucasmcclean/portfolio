<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import type { ArticleMeta } from '$lib/articles';
	import ArticleCollectionMeta from '$lib/components/ArticleCollectionMeta.svelte';
	import { SITE_NAME } from '$lib/consts.js';

	const { data } = $props();
	const articles: ArticleMeta[] = data.articles;
</script>

<ArticleCollectionMeta
	title={`Articles | ${SITE_NAME}`}
	description="Technical articles by Lucas McClean covering software architecture, programming languages, backend development, Rust, Go, and practical software craftsmanship."
	path="/articles"
	{articles}
/>

<div class="xs:text-lg mx-auto flex max-w-2xl flex-col items-center px-8">
	<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>

	<header class="w-fit self-start pt-16 pb-0">
		<h1 class="xs:text-6xl text-4xl font-semibold tracking-tight sm:text-7xl">Articles</h1>
		<h2 class="xs:text-4xl flex justify-between text-2xl font-light ordinal sm:text-5xl">
			On Tech & Philosophy
		</h2>
	</header>

	<Navbar />

	<main id="main-content" class="xs:space-y-16 my-8 w-full space-y-8">
		{#if articles.length === 0}
			<p>No articles found.</p>
		{:else}
			<ul>
				{#each articles as article}
					<li>
						<a href={`/articles/${article.slug}`}>
							<h2>{article.title}</h2>
						</a>
						<p>
							{new Date(article.date).toLocaleDateString(undefined, {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</p>
						<p>{article.description}</p>
					</li>
				{/each}
			</ul>
		{/if}
	</main>

	<footer class="xs:text-base mt-auto w-full space-y-2 py-8 text-sm opacity-80">
		<div class="flex flex-wrap justify-between">
			<p>&copy; 2025 Lucas McClean. All rights reserved.</p>
			<p class="font-display text-primary ms-auto">//LM</p>
		</div>
	</footer>
</div>
