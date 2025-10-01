<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	import Note from '$lib/components/Note.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../../../styles/articles.css';

	import { error } from '@sveltejs/kit';
	import { getArticleModule } from '$lib/articles';

	const { data } = $props();
	const { slug } = data;

	const mod = getArticleModule(slug);
	if (!mod) throw error(404, `Article "${slug}" not found`);

	const Content = mod.Content;
	const article = mod.metadata;
</script>

<ArticleMeta {article} />

<Header main={article.title} />

<Navbar />

<main id="main-content" class="w-full space-y-4">
	<article class="article">
		<Content />
	</article>

	<Note>
		{new Date(article.date).toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
		{#if article.authors.length}
			· by {article.authors.join(', ')}
		{/if}
	</Note>
</main>

<Footer />
