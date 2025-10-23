<script lang="ts">
	import { onMount } from 'svelte';
	import {
		ChevronUp,
		ChevronDown,
		ChevronLeft,
		ChevronRight,
		Palette,
		TextAlignJustify,
		TextAlignStart,
		Sun,
		Moon
	} from '@lucide/svelte';
	import { fade, fly } from 'svelte/transition';

	let menuOpen = false;
	let isPageLarge = false;

	type Theme = 'light' | 'dark';
	type Palette = 'default' | 'alt';
	type Align = 'left' | 'justify';

	let theme: Theme = 'light';
	let palette: Palette = 'default';
	let align: Align = 'left';

	function saveOptions() {
		localStorage.setItem('site-options', JSON.stringify({ theme, palette, align }));
	}

	function applyOptions() {
		const root = document.documentElement;
		root.setAttribute('data-theme', theme);
		root.setAttribute('data-palette', palette);
		root.setAttribute('data-align', align);
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
		localStorage.setItem('site-state', JSON.stringify({ menuOpen }));
	}

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		applyOptions();
		saveOptions();
	}

	function toggleAlign() {
		align = align === 'left' ? 'justify' : 'left';
		applyOptions();
		saveOptions();
	}

	function cyclePalette() {
		palette = palette === 'default' ? 'alt' : 'default';
		applyOptions();
		saveOptions();
	}

	onMount(() => {
		const options = JSON.parse(localStorage.getItem('site-options') ?? '{}');
		theme =
			options.theme ??
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		palette = options.palette ?? 'default';
		align = options.align ?? 'left';
		applyOptions();

		const state = JSON.parse(localStorage.getItem('site-state') ?? '{}');
		menuOpen = state.menuOpen;

		const mql = window.matchMedia('(min-width: 1024px)');
		isPageLarge = mql.matches;
		const listener = (e: MediaQueryListEvent) => (isPageLarge = e.matches);
		mql.addEventListener('change', listener);
		return () => mql.removeEventListener('change', listener);
	});
</script>

<div
	class="fixed bottom-6 left-6 z-50 flex gap-3 lg:bottom-6 lg:left-[calc(50%+var(--container-site)/2+0.25rem)] lg:flex-col"
>
	<button
		onclick={toggleMenu}
		class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:order-last lg:bg-none"
		title="Menu"
	>
		{#if menuOpen}
			<ChevronDown class="hidden lg:block" />
			<ChevronLeft class="block lg:hidden" />
		{:else}
			<ChevronUp class="hidden lg:block" />
			<ChevronRight class="block lg:hidden" />
		{/if}
	</button>

	{#if menuOpen}
		<div class="flex gap-3 lg:flex-col" transition:fade={{ duration: 150 }}>
			<button
				onclick={cyclePalette}
				class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none"
				title="Cycle Palette"
				transition:fly={{ x: isPageLarge ? 0 : -8, y: isPageLarge ? 8 : 0, duration: 200 }}
			>
				<Palette />
			</button>

			<button
				onclick={toggleAlign}
				class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none"
				title="Toggle Alignment"
				transition:fly={{ x: isPageLarge ? 0 : -8, y: isPageLarge ? 8 : 0, duration: 200 }}
			>
				{#if align === 'left'}
					<TextAlignJustify />
				{:else}
					<TextAlignStart />
				{/if}
			</button>

			<button
				onclick={toggleTheme}
				class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full lg:bg-none"
				title="Toggle Theme"
				transition:fly={{ x: isPageLarge ? 0 : -8, y: isPageLarge ? 8 : 0, duration: 200 }}
			>
				{#if theme === 'dark'}
					<Sun />
				{:else}
					<Moon />
				{/if}
			</button>
		</div>
	{/if}
</div>
