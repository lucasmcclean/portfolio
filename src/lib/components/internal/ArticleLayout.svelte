<script lang="ts" module>
	import Link from '$lib/components/Link.svelte';

	export { Link as a };
</script>

<script lang="ts">
	export const prerender = true;

	let { children } = $props();
</script>

{@render children()}
