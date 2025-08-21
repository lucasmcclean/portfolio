<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Link from '$lib/components/Link.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { SITE_NAME } from '$lib/consts';
</script>

<Meta type="webpage" title={`About | ${SITE_NAME}`} description="Temp" path="/about" />

<div class="xs:text-lg mx-auto flex max-w-2xl flex-col items-center px-8">
	<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>

	<header class="w-fit self-start pt-16 pb-0">
		<h1 class="xs:text-6xl text-4xl font-semibold tracking-tight sm:text-7xl">About</h1>
		<h2 class="xs:text-4xl flex justify-between text-2xl font-light ordinal sm:text-5xl">
			Who Is This Guy
		</h2>
	</header>

	<Navbar />

	<main id="main-content" class="xs:space-y-16 my-8 w-full space-y-8">
		<section class="">
			<ol class="space-y-8 [&_li]:space-y-4">
				<li>
					<h4><span class="text-secondary">2022</span> - First Interaction with Software</h4>
					<p class="font-light">
						High school was the first time I took a serious interest in programming. I was enjoying
						simpler, indie games and decided to attempt making one. Unity was the mainstream game
						engine at the time so I learned C# and did a massive amount of research. By the end of
						it, I had developed a few small games and a strong desire to learn more about software
						as a whole.
					</p>
				</li>

				<li>
					<h4><span class="text-secondary">2023</span> - Frontend Web Development</h4>
					<p class="font-light">
						As I was exploring different applications of software, I came to realize that the web
						was one of the most impactful and accessible platforms. My priority, then, was to master
						the fundamentals of HTML, CSS, and JS. I built many smaller apps using just the basics
						and began to realize the importance of accessibility, scalability, and modularity.
					</p>
				</li>

				<li>
					<h4><span class="text-secondary">2024</span> - Backend Development</h4>
					<p class="font-light">
						As I continued to research, I finally realized that to bring many of my ideas to life, I
						would need to venture into the backend. I compared most of the major fullstack
						frameworks and decided that SvelteKit would best suit my needs. Up until this point I
						had largely avoided anything related to the server. I became really interested in the
						interplay between client and server, and I discovered how much I enjoyed backend
						development.
					</p>
					<p class="font-light">
						This recognition inspired me to explore other backend tools and technologies. This was
						when I was first introduced to Go. Initially, there were a few hurdles to my
						understanding, but I quickly came to enjoy the pillars of simplicity and explicitness
						that it encouraged.
					</p>
				</li>

				<li>
					<h4><span class="text-secondary">2024</span> - Started University</h4>
					<p class="font-light">
						I began my first year as an Honors CS student at the University of Central Florida (<abbr
							title="University of Central Florida">UCF</abbr
						>) and joined Knight Hacks—a club which has had a major impact on my journey as a
						developer. Through Knight Hacks, I attended my first two hackathons which reinforced my
						passion about development and collaboration.
					</p>
				</li>

				<li>
					<h4><span class="text-secondary">2025</span> - First Job in Tech</h4>
					<p class="font-light">
						After a semester of university, I wanted to take on a job in addition to my courses. I
						heard about a web development position from a member of Knight Hacks and decided to
						apply. A few weeks later I became a <Link
							href="https://techrangers.cdl.ucf.edu/techrangers_current/lucas_mcclean.html"
							external>Techranger</Link
						> at <abbr title="University of Central Florida">UCF</abbr>.
					</p>
				</li>

				<li>
					<h4><span class="text-secondary">2025</span> - CLI and Lower-Level Development</h4>
					<p class="font-light">
						As I continued my exploration of the many fields in software, Rust caught my interest.
						Since then, Rust has become one of my main areas of focus in my free time. In addition
						to Go, Rust is one of the primary languages I enjoy using to build CLI tools and other
						lower-level projects.
					</p>
				</li>

				<li>
					<h4><span class="text-secondary">{new Date().getFullYear()}</span> - Now</h4>
					<p class="font-light">
						I'm still attending <abbr title="University of Central Florida">UCF</abbr>, I'm a
						Techranger, and I'm still working on projects with Rust and Go. If you're interested,
						you can see more of
						<Link href="/now" class="font-light">what I'm doing now</Link>.
					</p>
				</li>
			</ol>
		</section>
	</main>

	<footer class="xs:text-base mt-auto w-full space-y-2 py-8 text-sm opacity-80">
		<div class="flex flex-wrap justify-between">
			<p>&copy; 2025 Lucas McClean. All rights reserved.</p>
			<p class="font-display text-primary ms-auto">//LM</p>
		</div>
	</footer>
</div>
