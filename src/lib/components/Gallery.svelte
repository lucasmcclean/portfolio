<script lang="ts">
	import { tick } from 'svelte';

	type Img = { src: string; alt: string };
	export let images: Img[] = [];

	let open = false;
	let index = 0;
	let dialog: HTMLDivElement | null = null;
	let lastFocused: HTMLElement | null = null;
	let closeBtn: HTMLButtonElement | null = null;

	function openAt(i: number) {
		index = i;
		lastFocused = document.activeElement as HTMLElement | null;
		open = true;

		tick().then(() => closeBtn?.focus());
	}

	function close() {
		open = false;
		tick().then(() => lastFocused?.focus());
	}

	function onWindowKey(e: KeyboardEvent) {
		if (!open) return;

		if (e.key === 'Escape') {
			e.preventDefault();
			close();
		}

		if (e.key === 'Tab') {
			trapTab(e);
		}
	}

	function trapTab(e: KeyboardEvent) {
		if (!dialog) return;

		const selectors = `
			a[href],
			button:not([disabled]),
			input:not([disabled]),
			select:not([disabled]),
			textarea:not([disabled]),
			[tabindex]:not([tabindex="-1"])
		`;

		const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(selectors));
		if (focusable.length === 0) {
			e.preventDefault();
			return;
		}

		const first = focusable[0];
		const last = focusable[focusable.length - 1];

		if (e.shiftKey && document.activeElement === first) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	}

	function onThumbKey(e: KeyboardEvent, i: number) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			openAt(i);
		}
	}
</script>

<svelte:window on:keydown={onWindowKey} />

<section class="xs:columns-2 columns-1 gap-4 space-y-4">
	{#each images as img, i}
		<figure class="mb-4 break-inside-avoid">
			<button
				type="button"
				class="w-full overflow-hidden rounded-lg focus:ring focus:outline-none"
				on:click={() => openAt(i)}
				on:keydown={(e) => onThumbKey(e, i)}
				aria-label={`Open image ${i + 1}`}
			>
				<img class="h-auto w-full object-cover" src={img.src} alt={img.alt} loading="lazy" />
			</button>
		</figure>
	{/each}
</section>

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center">
		<div class="absolute inset-0 backdrop-blur-2xl" on:click={close} aria-hidden="true"></div>

		<div
			bind:this={dialog}
			class="relative z-10 mx-4 w-fit max-w-4xl outline-none"
			role="dialog"
			aria-modal="true"
			aria-label={`Image ${index + 1}`}
			tabindex="-1"
			on:click|stopPropagation
			on:keydown={() => {}}
		>
			<button
				bind:this={closeBtn}
				class="bg-bg/40 text-txt absolute top-3 right-3 h-9 w-9 rounded-full text-3xl font-black backdrop-blur-2xl"
				on:click={close}
				aria-label="Close"
			>
				×
			</button>

			<figure class="overflow-hidden">
				<img
					class="h-[75vh] w-full rounded-2xl object-contain"
					src={images[index].src}
					alt={images[index].alt}
					loading="eager"
				/>
			</figure>
		</div>
	</div>
{/if}
