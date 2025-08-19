<script lang="ts">
	import CoreMeta from '$lib/components/internal/CoreMeta.svelte';
	import { BASE_URL, SITE_IMAGE_ALT, SITE_IMAGE_URL } from '$lib/consts';
	import {
		getOgType,
		getSafeImage,
		getSchemaType,
		type ContentType,
		type MetaImage
	} from '$lib/meta';

	const {
		type,
		title,
		description,
		path,
		image
	}: {
		type: Exclude<ContentType, 'article'>;
		title: string;
		description: string;
		path: string;
		image?: MetaImage;
	} = $props();

	const canonical = `${BASE_URL}${path}`;

	const safeImage = getSafeImage(image);

	const jsonLd = JSON.stringify(
		{
			'@context': 'https://schema.org',
			'@type': getSchemaType(type),
			name: title,
			description,
			url: canonical
		},
		null,
		2
	);
</script>

<CoreMeta
	{title}
	{description}
	{canonical}
	ogType={getOgType(type)}
	ogImage={safeImage.src}
	ogImageAlt={safeImage.alt}
	{jsonLd}
/>
