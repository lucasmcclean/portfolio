<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { SITE_NAME } from '$lib/consts';
</script>

<Meta
	type="webpage"
	title={`Reading List | ${SITE_NAME}`}
	description="A record of books I've read, am currently reading, and plan to read soon."
	path="/reading"
/>

<Header main="Reading List" sub="What's on the Shelf" />

<Navbar />

<main id="main-content" class="xs:space-y-16 my-8 w-full space-y-8">
	<section>
		<h3 class="mb-8 text-2xl font-bold">Currently Reading</h3>
		<ol class="border-primary space-y-4 border-l-2 ps-4">
			<li>
				<p class="font-base">
					<cite>Confessions</cite> <span class="opacity-80">by Saint Augustine of Hippo</span>
				</p>
			</li>
			<li>
				<p class="font-base">
					<cite>Le Petit Prince</cite>
					<span class="opacity-80">by Antoine de Saint-Exupéry</span>
				</p>
			</li>
			<li>
				<p class="font-base">
					<cite>The Seven Storey Mountain</cite>
					<span class="opacity-80">by Thomas Merton</span>
				</p>
			</li>
		</ol>
	</section>

	<section>
		<h3 class="mb-8 text-2xl font-bold">Books I've Finished</h3>
		<ol class="border-primary space-y-4 border-l-2 ps-4">
			<li>
				<p class="font-base">
					<cite>Crime and Punishment</cite>
					<span class="opacity-80">by Fyodor Dostoyevsky</span>
				</p>
			</li>
			<li>
				<p class="font-base">
					<cite>Notes from Underground</cite>
					<span class="opacity-80">by Fyodor Dostoyevsky</span>
				</p>
			</li>
			<li>
				<p class="font-base">
					<cite>Flowers for Algernon</cite> <span class="opacity-80">by Daniel Keyes</span>
				</p>
			</li>
			<li>
				<p class="font-base">
					<cite>The Death of Ivan Ilyich</cite>
					<span class="opacity-80">by Leo Tolstoy</span>
				</p>
			</li>
		</ol>
	</section>

	<section>
		<h3 class="mb-8 text-2xl font-bold">What I Plan to Read</h3>
		<ol class="border-primary space-y-4 border-l-2 ps-4">
			<li>
				<p class="font-base">
					<cite>A Gentle Creature</cite>
					<span class="opacity-80">by Fyodor Dostoyevsky</span>
				</p>
			</li>
			<li>
				<p class="font-base">
					<cite>The Epistles of Ignatius of Antioch</cite>
					<span class="opacity-80">by Saint Ignatius of Antioch</span>
				</p>
			</li>
			<li>
				<p class="font-base">
					<cite>The Mystery of Christianity</cite>
					<span class="opacity-80">by Romano Guardini</span>
				</p>
			</li>
			<li>
				<p class="font-base">
					<cite>Demons</cite> <span class="opacity-80">by Fyodor Dostoyevsky</span>
				</p>
			</li>
			<li>
				<p class="font-base">
					<cite>The Idiot</cite> <span class="opacity-80">by Fyodor Dostoyevsky</span>
				</p>
			</li>
			<li>
				<p class="font-base">
					<cite>The Brothers Karamazov</cite>
					<span class="opacity-80">by Fyodor Dostoyevsky</span>
				</p>
			</li>
		</ol>
	</section>
</main>

<Footer />
