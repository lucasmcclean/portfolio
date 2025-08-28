<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Link from '$lib/components/Link.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { SITE_NAME } from '$lib/consts';
</script>

<Meta
	type="webpage"
	title={`Contact | ${SITE_NAME}`}
	description="
  Get in contact with Lucas McClean 
  "
	path="/about"
/>

<Header main="Contact" sub="Get in Touch with Me" />

<Navbar />

<main id="main-content" class="xs:space-y-16 my-8 w-full space-y-8">
	<section>
		<p class="font-light">
			You can reach me at my email <Link href="mailto:lucas@mcclean.dev" external
				>lucas@mcclean.dev</Link
			>
			or on LinkedIn at <Link
				href="https://linkedin.com/in/lucasmcclean"
				rel="me noopener"
				referrerpolicy="origin"
				external>linkedin.com/in/lucasmcclean</Link
			>.
		</p>
	</section>
</main>

<Footer />
