<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Link from '$lib/components/Link.svelte';
	import Meta from '$lib/components/Meta.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { SITE_NAME } from '$lib/consts';
</script>

<Meta
	type="webpage"
	title={`About | ${SITE_NAME}`}
	description="
  Honors CS student and software developer at UCF focusing on software architecture, language design, Linux, and backend development with Rust and Go.
  "
	path="/about"
/>

<Header main="About" sub="Who Is This Guy" />

<Navbar />

<main id="main-content" class="xs:space-y-16 my-8 w-full space-y-8">
	<section class="xs:py-4 flex flex-col items-center gap-8 md:flex-row">
		<img
			src="/portrait.png"
			alt="Lucas holding a tea cup and gazing into the distance."
			class="xs:w-1/2 w-3/4 max-w-sm rounded-2xl shadow-lg md:w-1/3"
		/>
		<div class="space-y-4 md:w-2/3">
			<p class="max-w-md font-light">
				I’m a software developer at UCF, where I also study computer science. I love working with
				backend systems and systems programming. Outside of code, I enjoy spending time outdoors,
				longboarding, reading challenging books, and bookending my days with coffee and tea.
			</p>
		</div>
	</section>

	<section>
		<h3 class="mb-8 text-2xl font-bold">The Road So Far</h3>
		<ol class="space-y-8 [&_li]:space-y-4">
			<li>
				<h4><span class="text-secondary">2022-2023</span> - First Interaction with Software</h4>
				<p class="font-light">
					High school was the first time I took a serious interest in programming. I was enjoying
					simpler, indie games and decided to attempt making one. Unity was the mainstream game
					engine at the time so I learned C# and did a massive amount of research. By the end of it,
					I had developed a few small games and a strong desire to learn more about software as a
					whole.
				</p>
				<p class="font-light">
					<strong>Projects:</strong>
					<Link href="https://github.com/lucasmcclean/godot-game-template" external
						>Godot Template</Link
					>,
					<Link href="https://github.com/lucasmcclean/doomsday-catastrophe-gwj63" external
						>Game Jam</Link
					>,
					<Link href="https://github.com/lucasmcclean/Top-Down-RPG" external>School Project</Link>
				</p>
			</li>

			<li>
				<h4><span class="text-secondary">2024 / Former-Half</span> - Frontend Web Development</h4>
				<p class="font-light">
					As I was exploring different applications of software, I came to realize that the web was
					one of the most impactful and accessible platforms. My priority, then, was to master the
					fundamentals of HTML, CSS, and JS. I built many smaller apps using just the basics and
					began to realize the importance of accessibility, scalability, and modularity.
				</p>
				<p class="font-light">
					<strong>Projects:</strong>
					<Link href="https://github.com/lucasmcclean/first-website" external>First Site</Link>,
					<Link href="https://github.com/lucasmcclean/first-portfolio" external
						>First Portfolio</Link
					>,
					<Link href="https://github.com/lucasmcclean/crown-and-anchor" external
						>Crown & Anchor</Link
					>
				</p>
			</li>

			<li>
				<h4><span class="text-secondary">2024 / Latter-Half</span> - Backend Development</h4>
				<p class="font-light">
					As I continued to research, I finally realized that to bring many of my ideas to life, I
					would need to venture into the backend. I compared most of the major fullstack frameworks
					and decided that SvelteKit would best suit my needs. Up until this point I had largely
					avoided anything related to the server. I became really interested in the interplay
					between client and server, and I discovered how much I enjoyed backend development.
				</p>
				<p class="font-light">
					This recognition inspired me to explore other backend tools and technologies. This was
					when I was first introduced to Go. Initially, there were a few hurdles to my
					understanding, but I quickly came to enjoy the pillars of simplicity and explicitness that
					it encouraged.
				</p>
				<p class="font-light">
					<strong>Projects:</strong>
					<Link href="https://github.com/lucasmcclean/notes-app" external>Notes App</Link>,
					<Link href="https://github.com/lucasmcclean/post-website" external>Post Site</Link>,
					<Link href="https://github.com/lucasmcclean/todo-cli" external>To-Do CLI</Link>,
					<Link href="https://github.com/lucasmcclean/personal-website" external
						>Personal Website</Link
					>
				</p>
			</li>

			<li>
				<h4><span class="text-secondary">2024 / Latter-Half Cont.</span> - Started University</h4>
				<p class="font-light">
					I began my first year as an Honors CS student at the University of Central Florida (<abbr
						title="University of Central Florida">UCF</abbr
					>) and joined Knight Hacks—a club which has had a major impact on my journey as a
					developer. Through Knight Hacks, I attended my first two hackathons which reinforced my
					passion about development and collaboration.
				</p>
				<p class="font-light">
					<strong>Projects:</strong>
					<Link href="https://github.com/lucasmcclean/shell-hacks-24" external>Shell Hacks</Link>,
					<Link href="https://github.com/lucasmcclean/knight-hacks-24" external>Knight Hacks</Link>,
					<Link href="https://github.com/lucasmcclean/dsa-go" external>Go DSA</Link>
				</p>
			</li>

			<li>
				<h4><span class="text-secondary">2025</span> - First Job in Tech</h4>
				<p class="font-light">
					After a semester of university, I wanted to take on a job in addition to my courses. I
					heard about a web development position from a member of Knight Hacks and decided to apply.
					A few weeks later I became a <Link
						href="https://techrangers.cdl.ucf.edu/techrangers_current/lucas_mcclean.html"
						external>Techranger</Link
					> at <abbr title="University of Central Florida">UCF</abbr>.
				</p>
			</li>

			<li>
				<h4><span class="text-secondary">2025</span> - CLI and Lower-Level Development</h4>
				<p class="font-light">
					As I continued my exploration of the many fields in software, Rust caught my interest.
					Since then, Rust has become one of my main areas of focus in my free time. In addition to
					Go, Rust is one of the primary languages I enjoy using to build CLI tools and other
					lower-level projects.
				</p>
				<p class="font-light">
					<strong>Projects:</strong>
					<Link href="https://github.com/lucasmcclean/limitlink" external>Limitl.ink</Link>,
					<Link href="https://github.com/lucasmcclean/kvd" external>KVD (in progress)</Link>
				</p>
			</li>

			<li>
				<h4><span class="text-secondary">{new Date().getFullYear()}</span> - Now</h4>
				<p class="font-light">
					I'm still attending <abbr title="University of Central Florida">UCF</abbr>, I'm a
					Techranger, and I'm still working on projects with Rust and Go. If you're interested, you
					can see more of
					<Link href="/now" class="font-light">what I'm doing now</Link>.
				</p>
				<p class="font-light">
					<strong>Projects:</strong>
					<Link href="https://github.com/lucasmcclean/portfolio" external>This Site</Link>,
					<Link href="https://github.com/lucasmcclean/kitenv" external>Kitenv (not yet public)</Link
					>
				</p>
			</li>
		</ol>
	</section>
</main>

<Footer />
