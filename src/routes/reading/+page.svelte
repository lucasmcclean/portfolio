<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { SITE_NAME } from '$lib/consts';
</script>

<Meta type="webpage" title={`Reading | ${SITE_NAME}`} description="" path="/reading" />

<Header main="Reading" sub="Past, Present, and Future" />

<Navbar />

<main id="main-content" class="xs:space-y-16 my-8 w-full space-y-8">
	<section>
		<h3 class="mb-8 text-2xl font-bold">Presently</h3>
		<ol class="space-y-8 [&_li]:space-y-4">
			<li><p class="font-light">Confessions by Augustine of Hippo</p></li>
			<li><p class="font-light">Notes from Underground by Fyodor Dostoyevsky</p></li>
			<li><p class="font-light">Le Petit Prince</p></li>
		</ol>
	</section>
	<section>
		<h3 class="mb-8 text-2xl font-bold">Previously</h3>
		<ol class="space-y-8 [&_li]:space-y-4">
			<li><p class="font-light">Crime and Punishment</p></li>
		</ol>
	</section>
	<section>
		<h3 class="mb-8 text-2xl font-bold">Futurely</h3>
		<ol class="space-y-8 [&_li]:space-y-4">
			<li><p class="font-light"></p></li>
		</ol>
	</section>
</main>

<Footer />
