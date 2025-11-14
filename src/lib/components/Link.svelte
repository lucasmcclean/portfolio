<script lang="ts">
	import LinkArrow from '$lib/components/internal/LinkArrow.svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	const {
		children,
		href = '',
		external,
		target,
		rel,
		class: className = '',
		nounderline = false,
		...rest
	}: HTMLAnchorAttributes & {
		href?: string;
		external?: boolean;
		target?: string;
		rel?: string;
		class?: string;
		nounderline?: boolean;
		children: () => unknown;
	} = $props();

	const isExternal = external ?? /^https?:\/\//.test(href);
	const isHeadingLink = href?.startsWith('#');

	const computedTarget = isExternal ? '_blank' : target;
	const computedRel = isExternal ? (rel ?? 'noopener noreferrer') : rel;
</script>

<a
	{...rest}
	{href}
	target={computedTarget}
	rel={computedRel}
	class={`relative inline-flex items-center transition-colors
		${!isHeadingLink && !nounderline ? 'after:absolute after:bottom-[3px] after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full focus-visible:after:w-full' : ''}
		${className}`}
>
	{@render children()}
	{#if isExternal}
		<span class="ml-1" aria-hidden="true">
			<LinkArrow />
		</span>
	{/if}
</a>
