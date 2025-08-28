<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import Link from '$lib/components/Link.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { SITE_DESCRIPTION, SITE_NAME } from '$lib/consts';
	import { getAllArticles } from '$lib/articles';

	const skills = [
		{ name: 'Rust', types: ['language'] },
		{ name: 'Go', types: ['language'] },
		{ name: 'Python', types: ['language'] },
		{ name: 'JS/TS', types: ['language', 'frontend'] },
		{ name: 'Svelte', types: ['language', 'frontend'] },
		{ name: 'Docker', types: ['infrastructure'] },
		{ name: 'Linux', types: ['infrastructure', 'productivity'] },
		{ name: 'HTML/CSS', types: ['language', 'frontend'] },
		{ name: 'Lua', types: ['language'] },
		{ name: 'C', types: ['language'] },
		{ name: 'HTMX', types: ['frontend'] },
		{ name: 'Bash', types: ['language', 'infrastructure'] },
		{ name: 'PostgreSQL', types: ['database'] },
		{ name: 'MongoDB', types: ['database'] },
		{ name: 'NeoVim', types: ['productivity'] }
	];

	const allArticles = getAllArticles();
	const recentArticles = allArticles.slice(0, 3);
</script>

<Meta type="webpage" title={SITE_NAME} description={SITE_DESCRIPTION} path="" />

<header class="w-fit self-start pt-16 pb-0">
	<h1 class="xs:text-6xl text-4xl font-semibold tracking-tight sm:text-7xl">Lucas McClean</h1>
	<h2 class="xs:text-4xl flex justify-between text-2xl font-light ordinal sm:text-5xl">
		Portfolio
		<span class="text-primary flex flex-grow justify-around px-2" aria-hidden="true">
			<span>/</span><span>/</span><span>/</span><span>/</span><span>/</span>
		</span>
		No. 4
	</h2>
</header>

<nav class="flex w-full justify-start py-4 text-lg sm:justify-between">
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
		I didn’t originally plan to work in software, but I was drawn to how it blends creativity with
		logic and makes global impact accessible. I try to write code that’s no more than it needs to be
		and no less than it should be. In my experience, writing good software comes down to managing
		complexity and clear communication—both with code and with people.
	</p>

	<section class="space-y-4">
		<h3>Tools & Technologies</h3>
		<ul class="xs:gap-x-4 flex flex-wrap gap-x-2 gap-y-2 font-light md:justify-between">
			{#each skills as skill}
				<li>
					<p>
						{skill.name}
					</p>
				</li>
			{/each}
			<li aria-hidden="true" class="invisible grow"></li>
		</ul>
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

<Footer />
