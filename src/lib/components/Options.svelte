<script lang="ts">
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
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let mode = $state('dark');
	let align = $state('left');
	let primary = $state('var(--p)');
	let alternate = $state('var(--a)');
	let secondary = $state('var(--s)');
	let open = $state(false);
	let isLarge = $state(false);

	function saveState() {
		localStorage.setItem(
			'site-settings',
			JSON.stringify({ mode, align, primary, alternate, secondary })
		);
	}

	function toggleMenu() {
		open = !open;
	}

	function toggleDarkMode() {
		mode = mode === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', mode);
		saveState();
	}

	function toggleAlign() {
		align = align === 'left' ? 'justify' : 'left';
		document.documentElement.style.setProperty('--site-alignment', align);
		saveState();
	}

	function cyclePalette() {
		primary = primary === 'var(--p)' ? 'var(--ap)' : 'var(--p)';
		alternate = alternate === 'var(--a)' ? 'var(--aa)' : 'var(--a)';
		secondary = secondary === 'var(--s)' ? 'var(--as)' : 'var(--s)';

		document.documentElement.style.setProperty('--color-primary', primary);
		document.documentElement.style.setProperty('--color-alternate', alternate);
		document.documentElement.style.setProperty('--color-secondary', secondary);
		saveState();
	}

	onMount(() => {
		mode = document.documentElement.getAttribute('data-theme') ?? 'light';
		align = getComputedStyle(document.documentElement).getPropertyValue('--site-alignment').trim();
		primary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
		alternate = getComputedStyle(document.documentElement)
			.getPropertyValue('--color-alternate')
			.trim();
		secondary = getComputedStyle(document.documentElement)
			.getPropertyValue('--color-secondary')
			.trim();

		const mql = window.matchMedia('(min-width: 1024px)');
		isLarge = mql.matches;

		const listener = (e: MediaQueryListEvent) => (isLarge = e.matches);
		mql.addEventListener('change', listener);
		return () => mql.removeEventListener('change', listener);
	});
</script>

<div
	class="fixed bottom-3 left-6 z-50 flex gap-3 lg:bottom-6 lg:left-[calc(50%+var(--container-site)/2+0.25rem)] lg:flex-col"
>
	<button
		onclick={toggleMenu}
		class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full p-2 lg:order-last lg:bg-none"
		title="Menu"
	>
		{#if open}
			<ChevronDown class="hidden lg:block" />
			<ChevronLeft class="block lg:hidden" />
		{:else}
			<ChevronUp class="hidden lg:block" />
			<ChevronRight class="block lg:hidden" />
		{/if}
	</button>

	{#if open}
		<div class="flex gap-3 lg:flex-col" transition:fade={{ duration: 150 }}>
			<button
				onclick={cyclePalette}
				class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full p-2 lg:bg-none"
				title="Cycle Palette"
				transition:fly={{ x: isLarge ? 0 : -8, y: isLarge ? 8 : 0, duration: 200 }}
			>
				<Palette />
			</button>

			<button
				onclick={toggleAlign}
				class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full p-2 lg:bg-none"
				title="Toggle Alignment"
				transition:fly={{ x: isLarge ? 0 : -8, y: isLarge ? 8 : 0, duration: 200 }}
			>
				{#if align === 'left'}
					<TextAlignJustify />
				{:else}
					<TextAlignStart />
				{/if}
			</button>

			<button
				onclick={toggleDarkMode}
				class="hover:text-secondary bg-bg xs:p-1 flex h-8 w-8 items-center justify-center rounded-full p-2 lg:bg-none"
				title="Toggle Dark Mode"
				transition:fly={{ x: isLarge ? 0 : -8, y: isLarge ? 8 : 0, duration: 200 }}
			>
				{#if mode === 'dark'}
					<Sun />
				{:else}
					<Moon />
				{/if}
			</button>
		</div>
	{/if}
</div>
