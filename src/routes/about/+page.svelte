<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { SITE_NAME } from '$lib/consts';
</script>

<Meta type="webpage" title={`About | ${SITE_NAME}`} description="Temp" path="/about" />

<div class="xs:text-lg mx-auto flex max-w-2xl flex-col items-center px-8">
	<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>

	<header class="xs:self-start w-fit self-center pt-16 pb-0">
		<h1 class="xs:text-6xl text-4xl font-semibold tracking-tight sm:text-7xl">About</h1>
		<h2 class="xs:text-4xl flex justify-between text-2xl font-light ordinal sm:text-5xl">
			Lucas McClean
		</h2>
	</header>

	<nav class="xs:justify-start flex w-full justify-center py-4 text-lg sm:justify-between">
		<ul class="hidden gap-x-4 sm:flex">
			<li><Link href="/">//LM</Link></li>
		</ul>

		<ul class="flex gap-x-4">
			<li><Link href="/">Home</Link></li>
			<li><Link href="/now">Now</Link></li>
			<li><Link href="/articles">Articles</Link></li>
		</ul>
	</nav>

	<main id="main-content" class="xs:space-y-16 my-8 space-y-8">
		<p class="font-light">
			Software is a unique craft—it blends creativity, logic, and global scale in one of the most
			accessible packages. I didn't always plan on working with it, but its hard to ignore the near
			limitless potential to learn, build, and share.
		</p>
		<p class="font-light">
			When I write software, I aim for it to be no more than it needs to be and no less than it
			should be. There is always a balance to strike between elegant architecture and practical
			constraints. Finding that balance can be a challenge. I've found that prioritzing
			maintainability not only makes working with the code easier, but it also naturally encourages
			a more balanced design.
		</p>
		<p class="font-light">
			I've found that building is the best way to learn. Whether its a new idea or a new tool,
			struggling through implementatino is what lets us build intuition and internalize patterns of
			solutions. Reading has its place (and I do it often), but nothing can replace the lessons
			learned struggling through real development.
		</p>
		<p class="font-light">
			Complexity is possibly <em>the</em> key challenge of writing software. Handling it sometimes requires
			finding the right abstraction, but sometimes it requires recognizing that no abstraction is needed.
			I'm fascinated by the many philosophies and heuristics that attempt to solve the challenge of complexity
			as they reveal how much nuance there is in crafting effective software.
		</p>
		<p class="font-light">
			Above all, however, are people. Fellow developers and users alike. I try never to lose sight
			of that. Communication isn't a secondary concern; its often what projects live and die on.
			It's the key to healthy teams and successful projects.
		</p>
	</main>
</div>
