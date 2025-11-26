<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Meta from '$lib/components/Meta.svelte';

	import { SITE_NAME } from '$lib/consts';
	import Gallery from '$lib/components/Gallery.svelte';

	const images = [
		{ src: '/photos/blue_sky_leaves.jpg', alt: 'Blue sky through tree leaves above' },
		{ src: '/photos/tree_leaves_green.jpg', alt: 'Green tree leaves' },
		{ src: '/photos/fire_hydrant_bird.jpg', alt: 'Bird perched on a fire hydrant' },
		{ src: '/photos/light_through_trees.jpg', alt: 'Bright sunlight through trees' },
		{ src: '/photos/sunset_tree.jpg', alt: 'Tree silhouette at sunset' },
		{ src: '/photos/tree_leaves_yellow.jpg', alt: 'Yellow tree leaves' }
	];
</script>

<Meta
	type="webpage"
	title={`Photography | ${SITE_NAME}`}
	description="Some of the photos I've taken."
	path="/photography"
/>

<Header main="Photography" />

<Navbar />

<main id="main-content" class="xs:space-y-16 my-8 w-full space-y-8">
	<Gallery {images} />
</main>
