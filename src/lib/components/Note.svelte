<script lang="ts">
	let { children } = $props();
</script>

<p class="xs:text-base text-end text-sm italic opacity-80">
	{@render children()}
</p>
