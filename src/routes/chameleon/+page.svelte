<script lang="ts">
	import { CATEGORIES, ROWS, COLS, type Category } from './data';

	type Phase = 'setup' | 'reveal' | 'clues' | 'vote' | 'caught-guess' | 'result';

	let phase = $state<Phase>('setup');
	let playerNames = $state<string[]>(['Player 1', 'Player 2', 'Player 3', 'Player 4']);
	let newPlayerName = $state('');
	let selectedCategoryIndex = $state<number>(0);
	let randomCategory = $state(true);

	let category = $state<Category>(CATEGORIES[0]);
	let secretIndex = $state(0);
	let chameleonIndex = $state(0);
	let revealPlayerIndex = $state(0);
	let revealShown = $state(false);
	let scores = $state<number[]>([]);
	let round = $state(0);
	let accusedIndex = $state<number | null>(null);
	let chameleonGuess = $state<number | null>(null);
	let roundResult = $state<'chameleon-escaped' | 'chameleon-guessed' | 'players-won' | null>(null);

	const secretRow = $derived(Math.floor(secretIndex / 4));
	const secretCol = $derived(secretIndex % 4);
	const secretCoord = $derived(`${ROWS[secretRow]}${COLS[secretCol]}`);
	const secretWord = $derived(category.words[secretIndex]);
	const chameleonName = $derived(playerNames[chameleonIndex] ?? 'Chameleon');

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
		secretIndex = Math.floor(Math.random() * 16);
		chameleonIndex = Math.floor(Math.random() * playerNames.length);
		revealPlayerIndex = 0;
		revealShown = false;
		accusedIndex = null;
		chameleonGuess = null;
		roundResult = null;
		phase = 'reveal';
	}

	function revealNext() {
		revealShown = false;
		if (revealPlayerIndex < playerNames.length - 1) revealPlayerIndex += 1;
		else phase = 'clues';
	}

	function confirmAccusation() {
		if (accusedIndex === null) return;
		if (accusedIndex === chameleonIndex) {
			phase = 'caught-guess';
		} else {
			roundResult = 'chameleon-escaped';
			scores = scores.map((s, i) => (i === chameleonIndex ? s + 2 : s));
			phase = 'result';
		}
	}

	function confirmGuess() {
		if (chameleonGuess === null) return;
		if (chameleonGuess === secretIndex) {
			roundResult = 'chameleon-guessed';
			scores = scores.map((s, i) => (i === chameleonIndex ? s + 1 : s));
		} else {
			roundResult = 'players-won';
			scores = scores.map((s, i) => (i !== chameleonIndex ? s + 2 : s));
		}
		phase = 'result';
	}

	function resetToSetup() {
		phase = 'setup';
		round = 0;
		scores = playerNames.map(() => 0);
	}

	function coordForIndex(i: number): string {
		return `${ROWS[Math.floor(i / 4)]}${COLS[i % 4]}`;
	}
</script>

<svelte:head>
	<title>Chameleon</title>
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
					<button class="btn primary" onclick={() => (revealShown = true)}>Show role</button>
				{:else if revealPlayerIndex === chameleonIndex}
					<p class="eyebrow">{category.name}</p>
					<h1 class="big accent">Chameleon</h1>
					<button class="btn primary" onclick={revealNext}>
						{revealPlayerIndex < playerNames.length - 1 ? 'Hide and pass' : 'Start'}
					</button>
				{:else}
					<p class="eyebrow">{category.name} · {secretCoord}</p>
					<h1 class="big">{secretWord}</h1>
					<div class="mini-grid" aria-label="Secret word location">
						<div class="mg-head"><span></span>{#each COLS as c}<span>{c}</span>{/each}</div>
						{#each ROWS as r, ri}
							<div class="mg-row">
								<span class="mg-coord">{r}</span>
								{#each COLS as _, ci}
									{@const idx = ri * 4 + ci}
									<span class="mg-cell" class:secret={idx === secretIndex}>{category.words[idx]}</span>
								{/each}
							</div>
						{/each}
					</div>
					<button class="btn primary" onclick={revealNext}>
						{revealPlayerIndex < playerNames.length - 1 ? 'Hide and pass' : 'Start'}
					</button>
				{/if}
			</section>

		{:else if phase === 'clues'}
			<section class="screen">
				<div class="heading">
					<div>
						<p class="eyebrow">Topic card</p>
						<h1>{category.name}</h1>
					</div>
					<button class="btn primary" onclick={() => (phase = 'vote')}>Vote</button>
				</div>
				{@render grid(false)}
			</section>

		{:else if phase === 'vote'}
			<section class="screen">
				<p class="eyebrow">Vote</p>
				<h1>Who is the Chameleon?</h1>
				<div class="stack">
					{#each playerNames as name, i}
						<button class="pick" class:selected={accusedIndex === i} onclick={() => (accusedIndex = i)}>{name}</button>
					{/each}
				</div>
				<button class="btn primary" onclick={confirmAccusation} disabled={accusedIndex === null}>Confirm</button>
			</section>

		{:else if phase === 'caught-guess'}
			<section class="screen">
				<div class="heading">
					<div>
						<p class="eyebrow">{chameleonName}</p>
						<h1>Pick the secret word</h1>
					</div>
					<button class="btn primary" onclick={confirmGuess} disabled={chameleonGuess === null}>Confirm</button>
				</div>
				{@render grid(true)}
			</section>

		{:else if phase === 'result'}
			<section class="screen">
				<p class="eyebrow">Result</p>
				<h1>
					{#if roundResult === 'chameleon-escaped'}{chameleonName} escaped
					{:else if roundResult === 'chameleon-guessed'}{chameleonName} guessed it
					{:else}Players win{/if}
				</h1>
				<p class="sub">
					<span class="accent">{secretWord}</span> ({secretCoord})
					{#if roundResult === 'chameleon-escaped'}
						· accused {playerNames[accusedIndex ?? 0]}
					{:else if roundResult === 'players-won' && chameleonGuess !== null}
						· guessed {category.words[chameleonGuess]}
					{/if}
				</p>

				{@render grid(false)}

				<div class="scores">
					{#each playerNames as name, i}
						<div class="score" class:chameleon={i === chameleonIndex}>
							<span>{name}{i === chameleonIndex ? ' · Chameleon' : ''}</span>
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

{#snippet grid(guessable: boolean)}
	<div class="grid" role="table" aria-label={`${category.name} grid`}>
		<div class="grid-row" role="row">
			<span class="coord" role="columnheader"></span>
			{#each COLS as c}<span class="coord" role="columnheader">{c}</span>{/each}
		</div>
		{#each ROWS as r, ri}
			<div class="grid-row" role="row">
				<span class="coord" role="rowheader">{r}</span>
				{#each COLS as _, ci}
					{@const idx = ri * 4 + ci}
					{@const isSecret = idx === secretIndex}
					{@const isGuessed = chameleonGuess === idx}
					{#if guessable}
						<button class="cell pickable" class:selected={isGuessed} onclick={() => (chameleonGuess = idx)} role="cell">
							<span class="cell-word">{category.words[idx]}</span>
						</button>
					{:else}
						<div class="cell" class:secret={phase === 'result' && isSecret} class:wrong={phase === 'result' && isGuessed && !isSecret} role="cell">
							<span class="cell-word">{category.words[idx]}</span>
						</div>
					{/if}
				{/each}
			</div>
		{/each}
	</div>
{/snippet}

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
		--accent: #b7f36a;
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
	.heading {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: var(--space);
	}
	.heading > div { min-width: 0; }

	.block { display: flex; flex-direction: column; gap: 0.75rem; }
	.stack { display: flex; flex-direction: column; gap: 0.625rem; }
	.row { display: grid; grid-template-columns: 1fr auto; gap: 0.625rem; align-items: center; }

	h1, p { margin: 0; }
	h1 {
		font-size: clamp(1.75rem, 5vw, 2.5rem);
		line-height: 1.1;
		font-weight: 600;
		letter-spacing: -0.03em;
		overflow-wrap: anywhere;
	}
	.big { font-size: clamp(2.5rem, 10vw, 4.5rem); }
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

	.input, .btn, .pick, .cat, .pickable {
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

	.btn, .pick, .cat, .pickable, .text-btn {
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
	.btn:hover:not(:disabled), .pick:hover:not(.selected), .cat:hover:not(.selected), .pickable:hover:not(.selected) {
		background: var(--surface-2);
	}
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
	.cat.selected, .pick.selected, .pickable.selected {
		border-color: var(--accent);
		color: var(--accent);
		background: #1b2214;
	}

	.grid {
		width: 100%;
		display: grid;
		gap: 1px;
		background: var(--border);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		overflow: hidden;
	}
	.grid-row {
		display: grid;
		grid-template-columns: 2.5rem repeat(4, minmax(0, 1fr));
		gap: 1px;
	}
	.coord, .cell {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 0;
		background: var(--surface);
	}
	.coord {
		padding: 0.625rem 0.25rem;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--muted);
		background: #151515;
	}
	.cell {
		min-height: 4.5rem;
		padding: 0.625rem 0.375rem;
		text-align: center;
	}
	.cell-word {
		font-size: clamp(0.8125rem, 2vw, 0.9375rem);
		line-height: 1.25;
		overflow-wrap: anywhere;
	}
	.pickable {
		width: 100%;
		border: 0;
		border-radius: 0;
		padding: 0.625rem 0.375rem;
	}
	.cell.secret, .pickable.selected {
		background: #1b2214;
		box-shadow: inset 0 0 0 2px var(--accent);
		color: var(--accent);
	}
	.cell.wrong {
		background: #271717;
		box-shadow: inset 0 0 0 2px #7a4040;
		color: #ffb3b3;
	}

	.mini-grid {
		width: min(100%, 36rem);
		display: grid;
		gap: 1px;
		background: var(--border);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		overflow: hidden;
	}
	.mg-head, .mg-row {
		display: grid;
		grid-template-columns: 2rem repeat(4, minmax(0, 1fr));
		gap: 1px;
	}
	.mg-head span, .mg-coord, .mg-cell {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 0;
		padding: 0.375rem 0.25rem;
		background: var(--surface);
		font-size: 0.75rem;
		line-height: 1.2;
		text-align: center;
	}
	.mg-head span, .mg-coord { background: #151515; color: var(--muted); font-weight: 600; }
	.mg-cell { color: #bbb; overflow-wrap: anywhere; }
	.mg-cell.secret {
		background: #1b2214;
		color: var(--accent);
		box-shadow: inset 0 0 0 1px rgba(183,243,106,0.4);
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
	.score.chameleon span, .score.chameleon strong { color: var(--accent); }

	@media (max-width: 640px) {
		.main { padding: 1rem; }
		.heading { align-items: stretch; flex-direction: column; }
		.heading .btn, .screen.center .btn, .screen > .btn.primary, .stack > .btn.primary { width: 100%; }
		.grid-row { grid-template-columns: 2rem repeat(4, minmax(0, 1fr)); }
		.cell { min-height: 4rem; padding: 0.5rem 0.25rem; }
		.cell-word { font-size: 0.75rem; }
		.coord { font-size: 0.75rem; }
	}

	@media (min-width: 641px) {
		.screen.center .btn, .screen > .btn.primary, .stack > .btn.primary { min-width: 12rem; }
		.screen.center .btn { width: min(100%, 20rem); }
	}
</style>
