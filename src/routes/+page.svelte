<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import Link from '$lib/components/Link.svelte';
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

<main id="main-content" class="xs:space-y-24 my-16 space-y-16 font-light">
	<p>
		I'm a software developer and honors CS student at UCF. I didn’t always plan to end up here. I
		just wanted to build things, and code turned out to be a really good way to do that. My
		development philosophy is to write code that’s as simple as possible and no simpler.
	</p>

	<section class="space-y-4">
		<h3>Tools & Technologies</h3>
		<ul class="xs:gap-x-4 flex flex-wrap gap-x-2 gap-y-2 md:justify-between">
			{#each skills as skill (skill.name)}
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
			{#each recentArticles as article (article.slug)}
				<li class="border-primary border-s-2 ps-4">
					<Link href={`/articles/${article.slug}`} class="text-txt text-lg font-normal">
						{article.title}
					</Link>
					<p class="opacity-80">{article.description}</p>
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
		<p>
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
