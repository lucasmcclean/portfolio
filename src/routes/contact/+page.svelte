<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Link from '$lib/components/Link.svelte';
	import Meta from '$lib/components/Meta.svelte';
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

<div class="xs:text-lg mx-auto flex max-w-2xl flex-col items-center px-8">
	<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>

	<header class="w-fit self-start pt-16 pb-0">
		<h1 class="xs:text-6xl text-4xl font-semibold tracking-tight sm:text-7xl">Contact</h1>
		<h2 class="xs:text-4xl flex justify-between text-2xl font-light ordinal sm:text-5xl">
			Get in Touch with Me
		</h2>
	</header>

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

	<footer class="xs:text-base mt-auto w-full space-y-2 py-8 text-sm opacity-80">
		<div class="flex flex-wrap justify-between">
			<p>&copy; 2025 Lucas McClean. All rights reserved.</p>
			<p class="font-display text-primary ms-auto">//LM</p>
		</div>
	</footer>
</div>
