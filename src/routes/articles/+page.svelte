<script lang="ts">
	import type { ArticleMeta } from '$lib/articles';
	import ArticleCollectionMeta from '$lib/components/ArticleCollectionMeta.svelte';
	import Link from '$lib/components/Link.svelte';
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
	<header class="xs:self-start w-fit self-center pt-16 pb-0">
		<h1 class="xs:text-6xl text-4xl font-semibold tracking-tight sm:text-7xl">Articles</h1>
	</header>

	<nav class="xs:justify-start flex w-full justify-center py-4 text-lg sm:justify-between">
		<ul class="hidden gap-x-4 sm:flex">
			<li><Link href="/">//LM</Link></li>
		</ul>

		<ul class="flex gap-x-4">
			<li><Link href="/">Home</Link></li>
			<li><Link href="/about">About</Link></li>
			<li><Link href="/now">Now</Link></li>
		</ul>
	</nav>

	<main class="w-full">
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
