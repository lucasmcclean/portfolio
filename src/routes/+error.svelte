<script lang="ts">
	import { page } from '$app/state';
	import Link from '$lib/components/Link.svelte';
</script>

<div class="mx-auto flex h-screen max-w-2xl flex-col px-8">
	<div class="flex grow flex-col items-center justify-center gap-y-10">
		<h1 class="flex flex-col items-center gap-2 text-center">
			<span class="xs:text-8xl text-6xl font-semibold tracking-tight sm:text-9xl">
				{page.status}
			</span>
			<span class="xs:text-2xl text-lg font-light sm:text-3xl">
				{page.error?.message ?? 'Something went wrong.'}
			</span>
		</h1>
		<Link href="/" class="xs:text-2xl flex justify-between text-lg font-light ordinal sm:text-3xl">
			Get me out of this mess
		</Link>
	</div>

	<footer class="mt-auto flex w-full flex-wrap justify-between py-8 text-base opacity-80">
		<p>&copy; 2025 Lucas McClean. All rights reserved.</p>
		<p class="font-display text-primary">//LM</p>
	</footer>
</div>
