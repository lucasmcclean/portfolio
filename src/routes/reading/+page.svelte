<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { SITE_NAME } from '$lib/consts';

	interface Book {
		title: string;
		author: string;
	}

	const current: Book[] = [
		{ title: 'Confessions', author: 'Saint Augustine of Hippo' },
		{ title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry' },
		{ title: 'The Epistles of Ignatius of Antioch', author: 'Saint Ignatius of Antioch' },
		{ title: 'Programming Rust', author: 'Jim Blandy, Jason Orendorff, & Leonara F. S. Tindall' },
		{ title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky' },
		{ title: 'The Mythical Man Month', author: 'Frederick P. Brooks Jr.' }
	];

	const completed: Book[] = [
		{ title: 'Crime and Punishment', author: 'Fyodor Dostoyevsky' },
		{ title: 'A Philosohpy of Software Design', author: 'John Ousterhout' },
		{ title: 'Notes from Underground', author: 'Fyodor Dostoyevsky' },
		{ title: 'Flowers for Algernon', author: 'Daniel Keyes' },
		{ title: 'The Death of Ivan Ilyich', author: 'Leo Tolstoy' },
		{ title: 'Clean Code', author: 'Robert C. Martin' },
		{ title: 'The Miracle of Father Kapaun', author: 'Roy Wenzl & Travis Heying' },
		{ title: 'The Pragmatic Programmer', author: 'David Thomas & Andrew Hunt' },
		{ title: 'The Rust Programming Language', author: 'Steve Klabnik & Carol Nichols' }
	];

	const planned: Book[] = [
		{ title: 'A Gentle Creature', author: 'Fyodor Dostoyevsky' },
		{ title: 'Demons', author: 'Fyodor Dostoyevsky' },
		{ title: 'The Idiot', author: 'Fyodor Dostoyevsky' },
		{ title: 'The Mystery of Christianity', author: 'Romano Guardini' },
		{ title: 'Lord of the World', author: 'Robert Hugh Benson' },
		{ title: 'On the Apostolic Preaching', author: 'Saint Irenaeus of Lyon' },
		{ title: 'The Seven Storey Mountain', author: 'Thomas Merton' },
		{ title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann' }
	];
</script>

<Meta
	type="webpage"
	title={`Reading List | ${SITE_NAME}`}
	description="A record of books I've read, am currently reading, and plan to read soon."
	path="/reading"
/>

<Header main="Reading List" />

<Navbar />

<main id="main-content" class="xs:space-y-16 my-8 w-full space-y-8">
	<section>
		<h3 class="mb-8 text-2xl font-bold">Current</h3>
		<ol class="border-primary space-y-4 border-l-2 ps-4">
			{#each current as book}
				<li>
					<p class="">
						<cite>{book.title}</cite>
						<span class="opacity-80"> by {book.author}</span>
					</p>
				</li>
			{/each}
		</ol>
	</section>

	<section>
		<h3 class="mb-8 text-2xl font-bold">Completed</h3>
		<ol class="border-primary space-y-4 border-l-2 ps-4">
			{#each completed as book}
				<li>
					<p class="">
						<cite>{book.title}</cite>
						<span class="opacity-80"> by {book.author}</span>
					</p>
				</li>
			{/each}
		</ol>
	</section>

	<section>
		<h3 class="mb-8 text-2xl font-bold">Planned</h3>
		<ol class="border-primary space-y-4 border-l-2 ps-4">
			{#each planned as book}
				<li>
					<p class="">
						<cite>{book.title}</cite>
						<span class="opacity-80"> by {book.author}</span>
					</p>
				</li>
			{/each}
		</ol>
	</section>
</main>
