<script lang="ts">
	import CoreMeta from '$lib/components/internal/CoreMeta.svelte';
	import { ARTICLES_URL } from '$lib/consts';
	import type { ArticleMeta } from '$lib/articles';
	import { getOgType, getSafeImage } from '$lib/meta';

	const { article }: { article: ArticleMeta } = $props();

	const title = article.title;
	const description = article.description;
	const canonical = `${ARTICLES_URL}/${article.slug}`;
	const image = getSafeImage(article.image);

	const jsonLd = JSON.stringify(
		{
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: title,
			description,
			url: canonical,
			author: article.authors.map((name) => ({ '@type': 'Person', name })),
			image: image.src,
			datePublished: new Date(article.date).toISOString(),
			dateModified: new Date(article.updated ?? article.date).toISOString(),
			keywords: article.tags.join(', '),
			mainEntityOfPage: canonical
		},
		null,
		2
	);

	const extraMeta = `
    <meta property="article:published_time" content="${new Date(article.date).toISOString()}" />
    <meta property="article:modified_time" content="${new Date(article.updated ?? article.date).toISOString()}" />
    <meta property="article:section" content="Technology" />
    ${article.authors.map((author) => `<meta property="article:author" content="${author}" />`).join('\n')}
    ${article.tags.map((tag) => `<meta property="article:tag" content="${tag}" />`).join('\n')}
  `;
</script>

<CoreMeta
	{title}
	{description}
	{canonical}
	ogType={getOgType('article')}
	ogImage={image.src}
	ogImageAlt={image.alt}
	{jsonLd}
	{extraMeta}
/>
