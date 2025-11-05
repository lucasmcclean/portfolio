<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Link from '$lib/components/Link.svelte';
	import Meta from '$lib/components/Meta.svelte';

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
			<li>
				<p>
					Preparing and presenting workshops for <Link href="https://club.knighthacks.org/" external
						>Knight Hacks</Link
					>, UCF's software development club.
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
					<Link href="https://github.com/lucasmcclean/ttcg" external>TTCG</Link> (not yet published)
					is a terminal-based trading card game where cards are acquired based on your system. CLI built
					with <strong>Rust</strong>. Backend built with <strong>Go</strong>.
					<span class="opacity-80">I'll have some articles out related to this soon.</span>
				</p>
			</li>
			<li>
				<p>
					<Link href="https://github.com/lucasmcclean/limitlink/tree/v2" external>LimitL.ink</Link> is
					a URL shortener with usage limits and expiration. Built with <strong>Go</strong>,
					<strong>Docker</strong>, and <strong>SvelteKit</strong>.
				</p>
			</li>
		</ul>
	</section>

	<section class="space-y-4">
		<h3 class="text-2xl font-semibold">Personal</h3>
		<ul class="list-disc space-y-4 font-light">
			<li>
				<p>
					Reading philosophical fiction. I've recently finished both <cite
						>Crime and Punishment</cite
					>
					and <cite>Notes from Underground</cite>. I'm now reading
					<cite>The Brothers Karamazov</cite>.
				</p>
			</li>
			<li>
				<p>
					Switching from Arch to Void Linux and working on my <Link
						href="https://github.com/lucasmcclean/.dotfiles"
						external>NeoVim config</Link
					>.
				</p>
			</li>
			<li>
				Learning French by reading <cite>Le Petit Prince</cite>.
			</li>
			<li>
				You can see everything I'm reading on my <Link href="/reading">reading list</Link>.
			</li>
		</ul>
	</section>

	<p class="xs:text-base text-end text-sm italic opacity-80">Last updated: November 2025</p>
</main>
