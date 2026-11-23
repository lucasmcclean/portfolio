<script lang="ts">
	import { CATEGORIES, type Category } from './data';

	type Phase = 'setup' | 'reveal' | 'questions' | 'vote' | 'caught-guess' | 'result';

	let phase = $state<Phase>('setup');
	let playerNames = $state<string[]>(['Player 1', 'Player 2', 'Player 3', 'Player 4']);
	let newPlayerName = $state('');
	let selectedCategoryIndex = $state<number>(0);
	let randomCategory = $state(true);

	let category = $state<Category>(CATEGORIES[0]);
	let secretWord = $state('');
	let outsiderIndex = $state(0);
	let revealPlayerIndex = $state(0);
	let revealShown = $state(false);
	let scores = $state<number[]>([]);
	let round = $state(0);
	let accusedIndex = $state<number | null>(null);
	let outsiderGuess = $state<string | null>(null);
	let roundResult = $state<'outsider-escaped' | 'outsider-guessed' | 'players-won' | null>(null);

	let questionDeck = $state<string[]>([]);
	let questionIndex = $state(0);
	let asker = $state(0);
	let answerer = $state(1);

	const outsiderName = $derived(playerNames[outsiderIndex] ?? 'Outsider');
	const currentQuestion = $derived(questionDeck[questionIndex] ?? '');
	const askerName = $derived(playerNames[asker] ?? '');
	const answererName = $derived(playerNames[answerer] ?? '');

	function shuffle<T>(arr: T[]): T[] {
		const a = [...arr];
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	function pickPair() {
		const a = Math.floor(Math.random() * playerNames.length);
		let b = Math.floor(Math.random() * (playerNames.length - 1));
		if (b >= a) b += 1;
		asker = a;
		answerer = b;
	}

	function addPlayer() {
		const name = newPlayerName.trim() || `Player ${playerNames.length + 1}`;
		if (playerNames.length < 12) {
			playerNames = [...playerNames, name];
			newPlayerName = '';
		}
	}

	function removePlayer(i: number) {
		if (playerNames.length > 3) playerNames = playerNames.filter((_, idx) => idx !== i);
	}

	function updatePlayerName(i: number, value: string) {
		playerNames = playerNames.map((n, idx) => (idx === i ? value : n));
	}

	function pickCategory(): Category {
		if (randomCategory) return CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
		return CATEGORIES[selectedCategoryIndex] ?? CATEGORIES[0];
	}

	function startGame() {
		scores = playerNames.map(() => 0);
		round = 0;
		startRound();
	}

	function startRound() {
		round += 1;
		category = pickCategory();
		secretWord = category.words[Math.floor(Math.random() * category.words.length)];
		outsiderIndex = Math.floor(Math.random() * playerNames.length);
		revealPlayerIndex = 0;
		revealShown = false;
		accusedIndex = null;
		outsiderGuess = null;
		roundResult = null;
		questionDeck = shuffle(category.questions);
		questionIndex = 0;
		pickPair();
		phase = 'reveal';
	}

	function revealNext() {
		revealShown = false;
		if (revealPlayerIndex < playerNames.length - 1) revealPlayerIndex += 1;
		else phase = 'questions';
	}

	function nextQuestion() {
		if (questionIndex < questionDeck.length - 1) {
			questionIndex += 1;
		} else {
			questionDeck = shuffle(category.questions);
			questionIndex = 0;
		}
		pickPair();
	}

	function confirmAccusation() {
		if (accusedIndex === null) return;
		if (accusedIndex === outsiderIndex) {
			phase = 'caught-guess';
		} else {
			roundResult = 'outsider-escaped';
			scores = scores.map((s, i) => (i === outsiderIndex ? s + 2 : s));
			phase = 'result';
		}
	}

	function confirmGuess() {
		if (outsiderGuess === null) return;
		if (outsiderGuess === secretWord) {
			roundResult = 'outsider-guessed';
			scores = scores.map((s, i) => (i === outsiderIndex ? s + 1 : s));
		} else {
			roundResult = 'players-won';
			scores = scores.map((s, i) => (i !== outsiderIndex ? s + 2 : s));
		}
		phase = 'result';
	}

	function resetToSetup() {
		phase = 'setup';
		round = 0;
		scores = playerNames.map(() => 0);
	}
</script>

<svelte:head>
	<title>Out of the Loop</title>
	<meta name="robots" content="noindex, nofollow" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="app">
	<main class="main" id="main-content">
		{#if phase !== 'setup'}
			<div class="top">
				<span class="meta">Round {round}</span>
				<button class="text-btn" onclick={resetToSetup}>Reset</button>
			</div>
		{/if}

		{#if phase === 'setup'}
			<section class="screen">
				<div class="block">
					<p class="eyebrow">Players</p>
					<div class="stack">
						{#each playerNames as name, i}
							<div class="row">
								<input
									class="input"
									value={name}
									oninput={(e) => updatePlayerName(i, e.currentTarget.value)}
									placeholder={`Player ${i + 1}`}
									maxlength={24}
									aria-label={`Player ${i + 1} name`}
								/>
								<button class="text-btn danger" onclick={() => removePlayer(i)} disabled={playerNames.length <= 3} aria-label={`Remove player ${i + 1}`}>✕</button>
							</div>
						{/each}
						<div class="row">
							<input
								class="input"
								bind:value={newPlayerName}
								placeholder="Add player"
								maxlength={24}
								onkeydown={(e) => e.key === 'Enter' && addPlayer()}
								aria-label="New player name"
							/>
							<button class="btn" onclick={addPlayer} disabled={playerNames.length >= 12}>Add</button>
						</div>
					</div>
				</div>

				<div class="block">
					<p class="eyebrow">Category</p>
					<label class="check">
						<input type="checkbox" bind:checked={randomCategory} />
						<span>Random each round</span>
					</label>
					{#if !randomCategory}
						<div class="cats">
							{#each CATEGORIES as cat, i}
								<button class="cat" class:selected={selectedCategoryIndex === i} onclick={() => (selectedCategoryIndex = i)}>
									{cat.name}
								</button>
							{/each}
						</div>
					{/if}
				</div>

				<button class="btn primary" onclick={startGame}>Start</button>
			</section>

		{:else if phase === 'reveal'}
			<section class="screen center">
				{#if !revealShown}
					<p class="eyebrow">Pass to</p>
					<h1 class="big">{playerNames[revealPlayerIndex]}</h1>
					<p class="sub">{revealPlayerIndex + 1} of {playerNames.length}</p>
					<button class="btn primary" onclick={() => (revealShown = true)}>Show word</button>
				{:else if revealPlayerIndex === outsiderIndex}
					<p class="eyebrow">{category.name}</p>
					<h1 class="big accent">You're the Outsider</h1>
					<p class="sub">You don't know the word.</p>
					<button class="btn primary" onclick={revealNext}>
						{revealPlayerIndex < playerNames.length - 1 ? 'Hide and pass' : 'Start'}
					</button>
				{:else}
					<p class="eyebrow">{category.name}</p>
					<h1 class="big">{secretWord}</h1>
					<button class="btn primary" onclick={revealNext}>
						{revealPlayerIndex < playerNames.length - 1 ? 'Hide and pass' : 'Start'}
					</button>
				{/if}
			</section>

		{:else if phase === 'questions'}
			<section class="screen center">
				<p class="eyebrow">{category.name}</p>
				<p class="sub">{askerName} asks · {answererName} answers</p>
				<h1 class="question">{currentQuestion}</h1>
				<div class="actions">
					<button class="btn primary" onclick={nextQuestion}>Next question</button>
					<button class="btn" onclick={() => (phase = 'vote')}>Vote</button>
				</div>
			</section>

		{:else if phase === 'vote'}
			<section class="screen">
				<p class="eyebrow">Vote</p>
				<h1>Who is out of the loop?</h1>
				<div class="stack">
					{#each playerNames as name, i}
						<button class="pick" class:selected={accusedIndex === i} onclick={() => (accusedIndex = i)}>{name}</button>
					{/each}
				</div>
				<button class="btn primary" onclick={confirmAccusation} disabled={accusedIndex === null}>Confirm</button>
			</section>

		{:else if phase === 'caught-guess'}
			<section class="screen">
				<p class="eyebrow">{outsiderName}</p>
				<h1>Pick the secret word</h1>
				<div class="cats">
					{#each category.words as word}
						<button class="cat" class:selected={outsiderGuess === word} onclick={() => (outsiderGuess = word)}>{word}</button>
					{/each}
				</div>
				<button class="btn primary" onclick={confirmGuess} disabled={outsiderGuess === null}>Confirm</button>
			</section>

		{:else if phase === 'result'}
			<section class="screen">
				<p class="eyebrow">Result</p>
				<h1>
					{#if roundResult === 'outsider-escaped'}{outsiderName} escaped
					{:else if roundResult === 'outsider-guessed'}{outsiderName} guessed it
					{:else}Players win{/if}
				</h1>
				<p class="sub">
					<span class="accent">{secretWord}</span> · {category.name}
					{#if roundResult === 'outsider-escaped'}
						· accused {playerNames[accusedIndex ?? 0]}
					{:else if roundResult === 'players-won' && outsiderGuess !== null}
						· guessed {outsiderGuess}
					{/if}
				</p>

				<div class="scores">
					{#each playerNames as name, i}
						<div class="score" class:outsider={i === outsiderIndex}>
							<span>{name}{i === outsiderIndex ? ' · Out' : ''}</span>
							<strong>{scores[i]}</strong>
						</div>
					{/each}
				</div>

				<div class="stack">
					<button class="btn primary" onclick={startRound}>Next round</button>
					<button class="text-btn" onclick={resetToSetup}>Setup</button>
				</div>
			</section>
		{/if}
	</main>
</div>

<style>
	:global(html, body) {
		margin: 0;
		min-height: 100%;
		background: #111;
		color: #ededed;
	}
	:global(body) {
		font-family: var(--font-text, system-ui, -apple-system, sans-serif);
	}
	:global(*), :global(*::before), :global(*::after) {
		box-sizing: border-box;
	}

	.app {
		--bg: #111;
		--surface: #191919;
		--surface-2: #222;
		--border: #303030;
		--text: #ededed;
		--muted: #949494;
		--accent: #8fd3ff;
		--danger: #ff8080;
		--radius: 0.625rem;
		--space: 1rem;
		min-height: 100dvh;
		background: var(--bg);
		color: var(--text);
		display: flex;
		justify-content: center;
	}

	.main {
		width: min(100%, 44rem);
		min-height: 100dvh;
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--space);
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.screen {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--space);
	}
	.screen.center {
		align-items: center;
		text-align: center;
	}
	.block { display: flex; flex-direction: column; gap: 0.75rem; }
	.stack { display: flex; flex-direction: column; gap: 0.625rem; }
	.row { display: grid; grid-template-columns: 1fr auto; gap: 0.625rem; align-items: center; }
	.actions { display: flex; flex-direction: column; gap: 0.625rem; width: min(100%, 20rem); }

	h1, p { margin: 0; }
	h1 {
		font-size: clamp(1.75rem, 5vw, 2.5rem);
		line-height: 1.1;
		font-weight: 600;
		letter-spacing: -0.03em;
		overflow-wrap: anywhere;
	}
	.big { font-size: clamp(2.5rem, 10vw, 4.5rem); }
	.question {
		font-size: clamp(1.5rem, 4.5vw, 2.75rem);
		max-width: 18ch;
		text-wrap: balance;
	}
	.eyebrow {
		font-size: 0.8125rem;
		line-height: 1.2;
		color: var(--muted);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	.sub { font-size: 1rem; line-height: 1.5; color: var(--muted); }
	.meta { font-size: 0.875rem; color: var(--muted); }
	.accent { color: var(--accent); }

	.input, .btn, .pick, .cat {
		font: inherit;
		font-size: 1rem;
		line-height: 1.25;
		color: var(--text);
		border-radius: var(--radius);
	}
	.input {
		width: 100%;
		min-width: 0;
		padding: 0.75rem 0.875rem;
		background: var(--surface);
		border: 1px solid var(--border);
	}
	.input:focus {
		outline: 2px solid #555;
		outline-offset: 1px;
		border-color: #555;
	}

	.btn, .pick, .cat, .text-btn {
		appearance: none;
		background: none;
		border: 1px solid var(--border);
		cursor: pointer;
	}
	.btn {
		padding: 0.75rem 1rem;
		background: var(--surface);
		font-weight: 550;
		white-space: nowrap;
	}
	.btn:hover:not(:disabled), .pick:hover:not(.selected), .cat:hover:not(.selected) { background: var(--surface-2); }
	.btn:disabled { opacity: 0.35; cursor: not-allowed; }
	.btn.primary {
		background: var(--accent);
		border-color: var(--accent);
		color: #111;
	}
	.btn.primary:hover:not(:disabled) { filter: brightness(0.96); background: var(--accent); }

	.text-btn {
		border: 0;
		padding: 0.5rem;
		margin: -0.5rem;
		color: var(--muted);
		font: inherit;
		font-size: 0.9375rem;
		line-height: 1.25;
	}
	.text-btn:hover:not(:disabled) { color: var(--text); }
	.text-btn:disabled { opacity: 0.35; cursor: not-allowed; }
	.text-btn.danger:hover:not(:disabled) { color: var(--danger); }

	.check {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		font-size: 0.9375rem;
		color: var(--muted);
	}
	.check input { width: 1rem; height: 1rem; margin: 0; accent-color: var(--accent); }

	.cats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
		gap: 0.625rem;
	}
	.cat, .pick {
		padding: 0.8125rem 0.875rem;
		background: var(--surface);
		text-align: left;
	}
	.pick { width: 100%; }
	.cat.selected, .pick.selected {
		border-color: var(--accent);
		color: var(--accent);
		background: #162029;
	}

	.scores {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		overflow: hidden;
	}
	.score {
		display: flex;
		justify-content: space-between;
		gap: var(--space);
		padding: 0.75rem 0.875rem;
		background: var(--surface);
		border-bottom: 1px solid var(--border);
		font-size: 0.9375rem;
	}
	.score:last-child { border-bottom: 0; }
	.score span { color: var(--muted); min-width: 0; overflow-wrap: anywhere; }
	.score strong { color: var(--text); flex-shrink: 0; }
	.score.outsider span, .score.outsider strong { color: var(--accent); }

	@media (max-width: 640px) {
		.main { padding: 1rem; }
		.screen > .btn.primary, .stack > .btn.primary, .actions { width: 100%; }
		.actions .btn { width: 100%; }
	}

	@media (min-width: 641px) {
		.screen > .btn.primary, .stack > .btn.primary { min-width: 12rem; }
		.screen.center > .btn.primary { width: min(100%, 20rem); }
	}
</style>
