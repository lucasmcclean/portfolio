<script lang="ts">
	import type { ArticleMeta } from '$lib/articles';
	import ArticleCollectionMeta from '$lib/components/ArticleCollectionMeta.svelte';
	import { SITE_NAME } from '$lib/consts.js';

	const { data } = $props();
	const articles: ArticleMeta[] = data.articles;
</script>

<ArticleCollectionMeta
	title={`Articles | ${SITE_NAME}`}
	description="Temp"
	path="/articles"
	{articles}
/>

<div class="xs:text-lg mx-auto flex max-w-2xl flex-col items-center px-8">
	<main class="w-full min-h-screen">
		<header class="my-16">
			<h1 class="xs:text-6xl text-4xl flex font-semibold tracking-tight sm:text-7xl">
				All Articles
				<span class="text-primary flex flex-grow justify-around px-2" aria-hidden="true">
					<span>/</span><span>/</span><span>/</span><span>/</span><span>/</span>
				</span>
			</h1>
		</header>

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
</div>
