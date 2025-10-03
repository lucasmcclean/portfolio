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

<Header main="Photography" sub="Some Photos from Around" />

<Navbar />

<main id="main-content" class="xs:space-y-16 my-8 w-full space-y-8">
	<section class="flex flex-wrap justify-around gap-8">
		<img
			class="max-w-4/10 object-contain"
			src="/photos/blue_sky_leaves.jpg"
			alt="Blue sky through tree leaves above"
		/>
		<img
			class="max-w-4/10 object-contain"
			src="/photos/fire_hydrant_bird.jpg"
			alt="Grainy shot of bird perched on top of a fire hydrant"
		/>
		<img
			class="max-w-4/10 object-contain"
			src="/photos/light_through_trees.jpg"
			alt="Bright sunlight coming between bases of trees on a hillside"
		/>
		<img
			class="max-w-4/10 object-contain"
			src="/photos/sunset_tree.jpg"
			alt="Dead tree with empty branches on with pink and orange clouds behind"
		/>
		<img
			class="max-w-4/10 object-contain"
			src="/photos/tree_leaves_green.jpg"
			alt="Top of tree with bright green leaves with blue sky behind "
		/>
		<img
			class="max-w-4/10 object-contain"
			src="/photos/tree_leaves_yellow.jpg"
			alt="Top of tree with bright greenish-yellow leaves with blue sky behind "
		/>
	</section>
</main>

<Footer />
