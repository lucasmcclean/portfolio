<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import Link from '$lib/components/Link.svelte';
	import { SITE_DESCRIPTION, SITE_NAME } from '$lib/consts';
	import { getAllArticles } from '$lib/articles';

	const levelMap = {
		novice: 1,
		intermediate: 2,
		advanced: 3,
		expert: 4,
		master: 5
	};

	const skills = [
		{ name: 'Rust', level: 'Novice' },
		{ name: 'Go', level: 'Advanced' },
		{ name: 'Python', level: 'Intermediate' },
		{ name: 'JS/TS', level: 'Intermediate' },
		{ name: 'Svelte', level: 'Intermediate' },
		{ name: 'Docker', level: 'Advanced' },
		{ name: 'Linux', level: 'Advanced' },
		{ name: 'HTML/CSS', level: 'Advanced' },
		{ name: 'Lua', level: 'Novice' },
		{ name: 'C', level: 'Novice' },
		{ name: 'HTMX', level: 'Intermediate' },
		{ name: 'Bash', level: 'Novice' },
		{ name: 'PostgreSQL', level: 'Novice' },
		{ name: 'MongoDB', level: 'Novice' },
		{ name: 'NeoVim', level: 'Expert' }
	].sort((a, b) => {
		return (
			levelMap[b.level.toLowerCase() as keyof typeof levelMap] -
			levelMap[a.level.toLowerCase() as keyof typeof levelMap]
		);
	});

	const allArticles = getAllArticles();
	const recentArticles = allArticles.slice(0, 3);
</script>

<Meta type="webpage" title={SITE_NAME} description={SITE_DESCRIPTION} path="" />

<div class="xs:text-lg mx-auto flex max-w-2xl flex-col items-center px-8">
	<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>

	<!-- <header class="w-fit pt-16 pb-0 sm:pb-16"> -->
	<header class="xs:self-start w-fit self-center pt-16 pb-0 sm:pb-0">
		<h1 class="xs:text-6xl text-4xl font-semibold tracking-tight sm:text-7xl">Lucas McClean</h1>
		<h2 class="xs:text-4xl flex justify-between text-2xl font-light ordinal sm:text-5xl">
			Portfolio
			<span class="text-primary flex flex-grow justify-around px-2" aria-hidden="true">
				<span>/</span><span>/</span><span>/</span><span>/</span><span>/</span>
			</span>
			No. 4
		</h2>
	</header>

	<nav class="xs:justify-start flex w-full justify-center py-4 text-lg sm:justify-between">
		<ul class="hidden gap-x-4 sm:flex">
			<li>
				<Link
					href="https://linkedin.com/in/lucasmcclean"
					rel="me noopener"
					referrerpolicy="origin"
					external
				>
					LinkedIn
				</Link>
			</li>
			<li>
				<Link
					href="https://github.com/lucasmcclean"
					rel="me noopener"
					referrerpolicy="origin"
					external
				>
					GitHub
				</Link>
			</li>
		</ul>

		<ul class="flex gap-x-4">
			<li><Link href="/about">About</Link></li>
			<li><Link href="/now">Now</Link></li>
			<li><Link href="/articles">Articles</Link></li>
		</ul>
	</nav>

	<main id="main-content" class="xs:space-y-16 my-8 space-y-8">
		<p class="text-justify font-light">
			I didn’t originally plan to work in software. But I was drawn to how it blends creativity with
			logic and makes global impact accessible. I try to write code that’s no more than it needs to
			be and no less than it should be. In my experience, writing good software comes down to
			managing complexity and clear communication—both with code and with people.
		</p>

		<section class="space-y-4">
			<h3>Tools & technologies I'm familiar with:</h3>
			<ul class="xs:gap-x-8 flex flex-wrap gap-x-4 gap-y-2">
				{#each skills as skill}
					<li>
						<p>
							{skill.name}
							<span title={skill.level} class="text-secondary">
								{'●'.repeat(levelMap[skill.level.toLowerCase() as keyof typeof levelMap] || 0)}
							</span>
						</p>
					</li>
				{/each}
			</ul>
			<p class="font-light">
				Feel free to check out <Link
					href="https://github.com/lucasmcclean"
					rel="me noopener"
					referrerpolicy="origin"
					external
				>
					GitHub
				</Link> to see my work.
			</p>
		</section>

		<section class="space-y-4">
			<h3>Recent Articles</h3>
			<ul class="space-y-4">
				{#each recentArticles as article}
					<li class="border-primary border-s-2 ps-4">
						<Link href={`/articles/${article.slug}`} class="text-primary text-lg">
							{article.title}
						</Link>
						<p class="text-muted xs:text-base text-sm">{article.description}</p>
						<p class="text-sm italic opacity-70">
							{new Date(article.date).toLocaleDateString(undefined, {
								month: 'short',
								day: 'numeric',
								year: 'numeric'
							})} · {article.readTime} min read
						</p>
					</li>
				{/each}
			</ul>
			<Link class="font-light" href="/articles">See all articles</Link>
		</section>

		<section class="space-y-4">
			<h3>Get In Contact</h3>
			<p class="text-justify font-light">
				If you’d like to discuss a project or talk tech, feel free to
				<Link href="mailto:lucas@mcclean.dev" external>email me</Link> or send me a message on <Link
					href="https://linkedin.com/in/lucasmcclean"
					rel="me noopener"
					referrerpolicy="origin"
					external
				>
					LinkedIn
				</Link>.
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
