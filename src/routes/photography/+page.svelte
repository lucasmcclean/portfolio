<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { SITE_NAME } from '$lib/consts';
</script>

<Meta
	type="webpage"
	title={`Photography | ${SITE_NAME}`}
	description="Some of the photos I've taken around the world."
	path="/photography"
/>

<Header main="Photography" sub="Photos from Around" />

<Navbar />

<main id="main-content" class="xs:space-y-16 my-8 w-full space-y-8">
	<section class="xs:columns-2 columns-1 gap-4 space-y-4">
		<img
			class="mb-4 h-auto w-full rounded-lg"
			src="/photos/blue_sky_leaves.jpg"
			alt="Blue sky through tree leaves above"
		/>
		<img
			class="mb-4 h-auto w-full rounded-lg"
			src="/photos/tree_leaves_green.jpg"
			alt="Green tree leaves"
		/>
		<img
			class="mb-4 h-auto w-full rounded-lg"
			src="/photos/fire_hydrant_bird.jpg"
			alt="Bird perched on a fire hydrant"
		/>
		<img
			class="mb-4 h-auto w-full rounded-lg"
			src="/photos/light_through_trees.jpg"
			alt="Bright sunlight through trees"
		/>
		<img
			class="mb-4 h-auto w-full rounded-lg"
			src="/photos/sunset_tree.jpg"
			alt="Tree silhouette at sunset"
		/>
		<img
			class="mb-4 h-auto w-full rounded-lg"
			src="/photos/tree_leaves_yellow.jpg"
			alt="Yellow tree leaves"
		/>
	</section>
</main>

<Footer />
