<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { SITE_NAME } from '$lib/consts';
</script>

<Meta type="webpage" title={`Now | ${SITE_NAME}`} description="Temp" path="/now" />

<div class="xs:text-lg mx-auto flex max-w-2xl flex-col items-center px-8">
	<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>

	<header class="w-fit self-start pt-16 pb-0">
		<h1 class="xs:text-6xl text-4xl font-semibold tracking-tight sm:text-7xl">Now</h1>
		<h2 class="xs:text-4xl flex justify-between text-2xl font-light ordinal sm:text-5xl">
			My Current Goings-On
		</h2>
	</header>

	<nav class="flex w-full justify-start py-4 text-lg sm:justify-between">
		<ul class="hidden gap-x-4 sm:flex">
			<li><Link href="/">//LM</Link></li>
		</ul>

		<ul class="flex gap-x-4">
			<li><Link href="/">Home</Link></li>
			<li><Link href="/about">About</Link></li>
			<li><Link href="/articles">Articles</Link></li>
		</ul>
	</nav>

	<main id="main-content" class="xs:space-y-16 my-8 w-full space-y-8"></main>
</div>
