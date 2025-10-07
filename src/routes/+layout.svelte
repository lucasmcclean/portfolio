<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="xs:text-lg mx-auto flex max-w-3xl flex-col items-center px-8">
	<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
	{@render children()}
</div>
