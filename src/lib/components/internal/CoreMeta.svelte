<script lang="ts">
	import { SITE_NAME } from '$lib/consts';

	const {
		title,
		description,
		canonical,
		ogType,
		ogImage,
		ogImageAlt,
		jsonLd,
		extraMeta = ''
	}: {
		title: string;
		description: string;
		canonical: string;
		ogType: string;
		ogImage: string;
		ogImageAlt: string;
		jsonLd: string;
		extraMeta?: string;
	} = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content={ogType} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={ogImageAlt} />
	<meta property="og:site_name" content={SITE_NAME} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	{@html extraMeta}

	{@html `<script type="application/ld+json">${jsonLd.replace(/</g, '\\u003c')}</script>`}
</svelte:head>
