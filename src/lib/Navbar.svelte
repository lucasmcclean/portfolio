<script>
	import Link from '$lib/components/Link.svelte';
</script>

<nav class="flex w-full justify-start py-4 text-lg sm:justify-between">
	<ul class="hidden gap-x-4 sm:flex">
		<li><Link href="/">//</Link></li>
	</ul>

	<ul class="flex gap-x-4">
		<li><Link href="/">Home</Link></li>
		<li><Link href="/about">About</Link></li>
		<li><Link href="/now">Now</Link></li>
		<li><Link href="/articles">Articles</Link></li>
	</ul>
</nav>
