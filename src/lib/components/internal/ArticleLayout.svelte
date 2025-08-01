<script lang="ts">
	import type { ArticleMeta } from '$lib/articles';

	const { metadata }: { metadata: ArticleMeta } = $props();

	export const prerender = true;
</script>

<slot />
