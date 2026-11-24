<script lang="ts">
	import '../app.css';

	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';
	import Options from '$lib/components/Options.svelte';

	let { children } = $props();

	const isStandalone = $derived(
		page.url.pathname.startsWith('/chameleon') ||
			page.url.pathname.startsWith('/ool') ||
			page.url.pathname.startsWith('/wavelength')
	);
</script>

{#if isStandalone}
	{@render children()}
{:else}
	<div
		class="xs:text-lg max-w-site mx-auto flex flex-col items-center px-8 [text-align:var(--site-alignment)] transition-colors"
	>
		<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
		{@render children()}
		<Footer />
	</div>

	<Options />
{/if}
