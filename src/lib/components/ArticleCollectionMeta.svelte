<script lang="ts">
	import CoreMeta from '$lib/components/internal/CoreMeta.svelte';
	import { BASE_URL, SITE_IMAGE_URL } from '$lib/consts';
	import type { ArticleMeta } from '$lib/articles';
	import { getOgType, getSafeImage, type MetaImage } from '$lib/meta';

	const {
		title,
		description,
		path,
		image,
		articles
	}: {
		title: string;
		description: string;
		path: string;
		image?: MetaImage;
		articles: ArticleMeta[];
	} = $props();

	const canonical = `${BASE_URL}${path}`;

	const safeImage = getSafeImage(image);

	const jsonLd = JSON.stringify(
		{
			'@context': 'https://schema.org',
			'@type': 'CollectionPage',
			name: title,
			description,
			url: canonical,
			hasPart: articles.map((article) => ({
				'@type': 'BlogPosting',
				headline: article.title,
				description: article.description,
				url: `${canonical}/${article.slug}`,
				mainEntityOfPage: `${canonical}/${article.slug}`,
				author: article.authors.map((author) => ({ '@type': 'Person', name: author })),
				datePublished: new Date(article.date).toISOString(),
				dateModified: new Date(article.updated ?? article.date).toISOString(),
				image: getSafeImage(article.image).src,
				keywords: article.tags.join(', ')
			}))
		},
		null,
		2
	);
</script>

<CoreMeta
	{title}
	{description}
	{canonical}
	ogType={getOgType('collection')}
	ogImage={safeImage.src}
	ogImageAlt={safeImage.alt}
	{jsonLd}
/>
