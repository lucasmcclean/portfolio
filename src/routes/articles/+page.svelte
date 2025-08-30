<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ArticleCollectionMeta from '$lib/components/ArticleCollectionMeta.svelte';

	import type { ArticleMeta } from '$lib/articles';
	import { SITE_NAME } from '$lib/consts.js';

	const { data } = $props();
	const articles: ArticleMeta[] = data.articles;
</script>

<ArticleCollectionMeta
	title={`Articles | ${SITE_NAME}`}
	description="Lucas McClean’s articles on software architecture, programming languages, backend development, and reflections on software craftsmanship and career growth."
	path="/articles"
	{articles}
/>

<Header main="Articles" sub="On Tech & Philosophy" />

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

<Footer />
