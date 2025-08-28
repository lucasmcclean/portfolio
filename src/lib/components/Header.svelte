<script lang="ts">
	const { main, sub = '' }: { main: string; sub?: string } = $props();
</script>

<header class="w-fit self-start pt-16 pb-0">
	<h1 class="xs:text-6xl text-4xl font-semibold tracking-tight sm:text-7xl">
		{main}
	</h1>
	{#if sub.trim() !== ''}
		<h2 class="xs:text-4xl flex justify-between text-2xl font-light ordinal sm:text-5xl">
			{sub}
		</h2>
	{/if}
</header>
