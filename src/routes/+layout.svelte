<script lang="ts">
	import '../app.css';

	import Footer from '$lib/components/Footer.svelte';
	import Options from '$lib/components/Options.svelte';

	let { children } = $props();
</script>

<div
	class="xs:text-lg max-w-site mx-auto flex flex-col items-center px-8 [text-align:var(--site-alignment)] transition-colors"
>
	<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
	{@render children()}
	<Footer />
</div>

<Options />
