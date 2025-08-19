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
			<li><Link href="/">//</Link></li>
		</ul>

		<ul class="flex gap-x-4">
			<li><Link href="/">Home</Link></li>
			<li><Link href="/about">About</Link></li>
			<li><Link href="/articles">Articles</Link></li>
		</ul>
	</nav>

	<main id="main-content" class="xs:space-y-16 my-8 w-full space-y-8">
		<section class="space-y-4">
			<h3 class="text-2xl font-semibold">Academics</h3>
			<ul class="list-disc space-y-4 font-light">
				<li>
					<p>
						Entering my second year as an Honors CS student at
						<abbr title="University of Central Florida">UCF</abbr>.
					</p>
				</li>
				<li>
					<p>
						Serving as the Technology Committee Coordinator for the Florida Delta chapter of the <Link
							href="https://tbp.org"
							external>Tau Beta Pi</Link
						> engineering honor society.
					</p>
				</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h3 class="text-2xl font-semibold">Work</h3>
			<ul class="list-disc space-y-4 font-light">
				<li>
					<p>
						I’m currently working as a
						<Link
							href="https://techrangers.cdl.ucf.edu/techrangers_current/lucas_mcclean.html"
							external>Techranger</Link
						> at UCF, where I help build and maintain tools using Python, Docker, JS, HTML, and CSS.
					</p>
				</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h3 class="text-2xl font-semibold">Projects</h3>
			<ul class="list-disc space-y-4 font-light">
				<li>
					<p>
						<Link href="https://github.com/lucasmcclean/limitlink/tree/v2" external>LimitL.ink</Link
						> is a URL shortener with usage limits and expiration. Built with <strong>Go</strong>,
						<strong>Docker</strong>, and <strong>SvelteKit</strong>.
					</p>
				</li>
				<li>
					<p>
						<Link href="https://crates.io/crates/kvd" external>KVD</Link> is a key-value differ that
						is generic over file types. Built with <strong>Rust</strong>.
					</p>
				</li>
			</ul>
		</section>

		<section class="space-y-4">
			<h3 class="text-2xl font-semibold">Personal</h3>
			<ul class="list-disc space-y-4 font-light">
				<li>
					<p>
						I've been reading philosophical fiction. Most recently I finished Crime and Punishment
						and I'm now reading Notes from Underground.
					</p>
				</li>
				<li>
					<p>
						Switching from Arch Linux to Void Linux and polishing up my <Link
							href="https://github.com/lucasmcclean/.dotfiles"
							external>NeoVim config</Link
						>.
					</p>
				</li>
				<li>
					I’ve started learning French by reading <em>Le Petit Prince</em>.
				</li>
			</ul>
		</section>

		<p class="xs:text-base text-end text-sm italic opacity-80">Last updated: August 2025</p>
	</main>

	<footer class="xs:text-base mt-auto w-full space-y-2 py-8 text-sm opacity-80">
		<div class="flex flex-wrap justify-between">
			<p>&copy; 2025 Lucas McClean. All rights reserved.</p>
			<p class="font-display text-primary ms-auto">//LM</p>
		</div>
	</footer>
</div>
