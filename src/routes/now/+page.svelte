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
	title={`Now | ${SITE_NAME}`}
	description="Current projects and focus of Lucas McClean, honors CS student and software developer at UCF, exploring Rust, Go, backend development, Linux, and computer science."
	path="/now"
/>

<Header main="Now" sub="My Current Goings-On" />

<Navbar />

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
					Working as a
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
					<Link href="https://github.com/lucasmcclean/limitlink/tree/v2" external>LimitL.ink</Link> is
					a URL shortener with usage limits and expiration. Built with <strong>Go</strong>,
					<strong>Docker</strong>, and <strong>SvelteKit</strong>.
				</p>
			</li>
			<li>
				<p>
					<Link href="https://crates.io/crates/kvd" external>KVD</Link> (not yet published) is a key-value
					differ that is generic over file types. Built with <strong>Rust</strong>.
				</p>
			</li>
		</ul>
	</section>

	<section class="space-y-4">
		<h3 class="text-2xl font-semibold">Personal</h3>
		<ul class="list-disc space-y-4 font-light">
			<li>
				<p>
					Reading philosophical fiction. Most recently I finished <cite>Crime and Punishment</cite>
					and I'm now reading <cite>Notes from Underground</cite>.
				</p>
			</li>
			<li>
				<p>
					Switching from Arch Linux to Void Linux and working on my <Link
						href="https://github.com/lucasmcclean/.dotfiles"
						external>NeoVim config</Link
					>.
				</p>
			</li>
			<li>
				Learning French by reading <cite>Le Petit Prince</cite>.
			</li>
		</ul>
	</section>

	<p class="xs:text-base text-end text-sm italic opacity-80">Last updated: August 2025</p>
</main>

<Footer />
