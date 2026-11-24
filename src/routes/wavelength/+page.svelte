<script lang="ts">
	import { SPECTRA, type Spectrum } from './data';

	type Phase = 'setup' | 'psychic' | 'guess' | 'steal' | 'result';
	type Team = { name: string; score: number };

	const BAND_4 = 4;
	const BAND_3 = 9;
	const BAND_2 = 14;

	let phase = $state<Phase>('setup');
	let teams = $state<Team[]>([
		{ name: 'Team 1', score: 0 },
		{ name: 'Team 2', score: 0 }
	]);
	let activeTeam = $state(0);
	let round = $state(0);
	let spectrum = $state<Spectrum>(SPECTRA[0]);
	let target = $state(50);
	let guess = $state(50);
	let psychicName = $state('');
	let psychicConfirmed = $state(false);
	let psychicShown = $state(false);
	let stealChoice = $state<'left' | 'right' | null>(null);
	let roundPoints = $state(0);
	let stealPoints = $state(0);
	let roundMessage = $state('');

	const opposingTeam = $derived(activeTeam === 0 ? 1 : 0);
	const guessDistance = $derived(Math.abs(guess - target));
	const guessBand = $derived.by(() => {
		if (guessDistance <= BAND_4) return 4;
		if (guessDistance <= BAND_3) return 3;
		if (guessDistance <= BAND_2) return 2;
		return 0;
	});
	const actualSide = $derived(target < guess ? 'left' : target > guess ? 'right' : 'exact');

	function clamp(n: number, min: number, max: number) {
		return Math.max(min, Math.min(max, n));
	}

	function randomTarget() {
		return Math.floor(Math.random() * (100 - BAND_2 * 2 + 1)) + BAND_2;
	}

	function startGame() {
		teams = teams.map((t, i) => ({ ...t, name: t.name.trim() || `Team ${i + 1}`, score: 0 }));
		activeTeam = 0;
		round = 0;
		startRound();
	}

	function startRound() {
		round += 1;
		spectrum = SPECTRA[Math.floor(Math.random() * SPECTRA.length)];
		target = randomTarget();
		guess = 50;
		psychicName = '';
		psychicConfirmed = false;
		psychicShown = false;
		stealChoice = null;
		roundPoints = 0;
		stealPoints = 0;
		roundMessage = '';
		phase = 'psychic';
	}

	function confirmGuess() {
		roundPoints = guessBand;
		teams = teams.map((t, i) => (i === activeTeam ? { ...t, score: t.score + roundPoints } : t));
		phase = 'steal';
	}

	function confirmSteal() {
		if (!stealChoice) return;
		if (actualSide === 'exact') {
			stealPoints = 0;
			roundMessage = `${teams[activeTeam].name} scored ${roundPoints}. Exact center — no steal.`;
		} else if (stealChoice === actualSide) {
			stealPoints = 1;
			teams = teams.map((t, i) => (i === opposingTeam ? { ...t, score: t.score + 1 } : t));
			roundMessage = `${teams[activeTeam].name} scored ${roundPoints}. ${teams[opposingTeam].name} stole 1.`;
		} else {
			stealPoints = 0;
			roundMessage = `${teams[activeTeam].name} scored ${roundPoints}. ${teams[opposingTeam].name} missed the steal.`;
		}
		phase = 'result';
	}

	function nextRound() {
		activeTeam = opposingTeam;
		startRound();
	}

	function resetToSetup() {
		phase = 'setup';
		round = 0;
		teams = teams.map((t) => ({ ...t, score: 0 }));
	}

	function updateTeamName(i: number, value: string) {
		teams = teams.map((t, idx) => (idx === i ? { ...t, name: value } : t));
	}

	function bandStyle(center: number, half: number, color: string) {
		const left = clamp(center - half, 0, 100);
		const right = clamp(center + half, 0, 100);
		return `left:${left}%;width:${right - left}%;background:${color};`;
	}
</script>

<svelte:head>
	<title>Wavelength</title>
	<meta name="robots" content="noindex, nofollow" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="app">
	<main class="main" id="main-content">
		{#if phase !== 'setup'}
			<div class="top">
				<span class="meta">Round {round} · {teams[activeTeam].name}</span>
				<button class="text-btn" onclick={resetToSetup}>Reset</button>
			</div>
		{/if}

		{#if phase === 'setup'}
			<section class="screen">
				<div class="block">
					<p class="eyebrow">Teams</p>
					<div class="stack">
						{#each teams as team, i}
							<input
								class="input"
								value={team.name}
								oninput={(e) => updateTeamName(i, e.currentTarget.value)}
								maxlength={24}
								aria-label={`Team ${i + 1} name`}
								placeholder={`Team ${i + 1}`}
							/>
						{/each}
					</div>
				</div>
				<button class="btn primary" onclick={startGame}>Start</button>
			</section>

		{:else if phase === 'psychic'}
			<section class="screen center">
				<p class="eyebrow">{teams[activeTeam].name} · Psychic</p>
				{#if !psychicConfirmed}
					<h1>Who is the psychic?</h1>
					<p class="sub">The psychic will see the target and give a clue. Everyone else will guess.</p>
					<!-- svelte-ignore a11y_autofocus -->
					<input
						class="input"
						bind:value={psychicName}
						placeholder="Psychic name"
						maxlength={24}
						aria-label="Psychic name"
						autofocus
						onkeydown={(e) => {
							if (e.key === 'Enter' && psychicName.trim()) {
								psychicName = psychicName.trim();
								psychicConfirmed = true;
							}
						}}
					/>
					<button
						class="btn primary"
						onclick={() => {
							psychicName = psychicName.trim();
							psychicConfirmed = true;
						}}
						disabled={!psychicName.trim()}>Continue</button
					>
				{:else if !psychicShown}
					<h1 class="big">Pass to {psychicName}</h1>
					<p class="sub">Only {psychicName} should see the target.</p>
					<button class="btn primary" onclick={() => (psychicShown = true)}>Show target</button>
				{:else}
					<h1>{spectrum.left} <span class="muted">→</span> {spectrum.right}</h1>
					<div class="dial" aria-label="Target dial">
						<div class="track">
							<div class="band" style={bandStyle(target, BAND_2, 'rgba(183,243,106,0.18)')}></div>
							<div class="band" style={bandStyle(target, BAND_3, 'rgba(183,243,106,0.28)')}></div>
							<div class="band" style={bandStyle(target, BAND_4, 'rgba(183,243,106,0.55)')}></div>
							<div class="needle" style={`left:${target}%`}></div>
						</div>
						<div class="labels"><span>{spectrum.left}</span><span>{spectrum.right}</span></div>
					</div>
					<p class="sub">Give a clue, then hide this screen.</p>
					<button class="btn primary" onclick={() => (phase = 'guess')}>Hide and guess</button>
				{/if}
			</section>

		{:else if phase === 'guess'}
			<section class="screen">
				<div class="block">
					<p class="eyebrow">{teams[activeTeam].name} guesses</p>
					<h1>{spectrum.left} <span class="muted">→</span> {spectrum.right}</h1>
					{#if psychicName.trim()}<p class="sub">{psychicName} sits this one out.</p>{/if}
				</div>
				<div class="dial">
					<div class="track">
						<div class="needle guess" style={`left:${guess}%`}></div>
					</div>
					<div class="labels"><span>{spectrum.left}</span><span>{spectrum.right}</span></div>
				</div>
				<input
					class="slider"
					type="range"
					min="0"
					max="100"
					value={guess}
					oninput={(e) => (guess = Number(e.currentTarget.value))}
					aria-label="Guess position"
				/>
				<button class="btn primary" onclick={confirmGuess}>Lock in</button>
			</section>

		{:else if phase === 'steal'}
			<section class="screen">
				<p class="eyebrow">{teams[opposingTeam].name} · Steal</p>
				<h1>Left or right of the guess?</h1>
				<div class="dial">
					<div class="track">
						<div class="needle guess" style={`left:${guess}%`}></div>
					</div>
					<div class="labels"><span>{spectrum.left}</span><span>{spectrum.right}</span></div>
				</div>
				<p class="sub">Is the target left or right of {teams[activeTeam].name}'s guess?</p>
				<div class="row2">
					<button class="pick" class:selected={stealChoice === 'left'} onclick={() => (stealChoice = 'left')}>Left</button>
					<button class="pick" class:selected={stealChoice === 'right'} onclick={() => (stealChoice = 'right')}>Right</button>
				</div>
				<button class="btn primary" onclick={confirmSteal} disabled={stealChoice === null}>Confirm</button>
			</section>

		{:else if phase === 'result'}
			<section class="screen">
				<p class="eyebrow">Result</p>
				<h1>{guessBand === 4 ? '4 points' : guessBand === 3 ? '3 points' : guessBand === 2 ? '2 points' : '0 points'}</h1>
				<p class="sub">{roundMessage || `${teams[activeTeam].name} scored ${roundPoints}.`}</p>
				<div class="dial">
					<div class="track">
						<div class="band" style={bandStyle(target, BAND_2, 'rgba(183,243,106,0.18)')}></div>
						<div class="band" style={bandStyle(target, BAND_3, 'rgba(183,243,106,0.28)')}></div>
						<div class="band" style={bandStyle(target, BAND_4, 'rgba(183,243,106,0.55)')}></div>
						<div class="needle guess" style={`left:${guess}%`}></div>
						<div class="needle" style={`left:${target}%`}></div>
					</div>
					<div class="labels"><span>{spectrum.left}</span><span>{spectrum.right}</span></div>
				</div>
				<div class="scores">
					{#each teams as team, i}
						{@const delta = i === activeTeam ? roundPoints : i === opposingTeam ? stealPoints : 0}
						<div class="score" class:active={i === activeTeam}>
							<span>{team.name}</span>
							<strong>{team.score}{#if delta > 0} <span class="delta">+{delta}</span>{/if}</strong>
						</div>
					{/each}
				</div>
				<div class="stack">
					<button class="btn primary" onclick={nextRound}>Next round</button>
					<button class="text-btn" onclick={resetToSetup}>Setup</button>
				</div>
			</section>
		{/if}
	</main>
</div>

<style>
	:global(html, body) { margin: 0; min-height: 100%; background: #111; color: #ededed; }
	:global(body) { font-family: var(--font-text, system-ui, -apple-system, sans-serif); }
	:global(*), :global(*::before), :global(*::after) { box-sizing: border-box; }

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
		padding: 1.5rem 1.25rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--space);
	}
	@supports (justify-content: safe center) {
		.main { justify-content: safe center; }
	}

	.top { display: flex; justify-content: space-between; align-items: center; width: 100%; }
	.screen { width: 100%; display: flex; flex-direction: column; gap: var(--space); }
	.screen.center { align-items: center; text-align: center; }
	.block { display: flex; flex-direction: column; gap: 0.75rem; }
	.stack { display: flex; flex-direction: column; gap: 0.625rem; }
	.row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0.625rem; }

	h1, p { margin: 0; }
	h1 { font-size: clamp(1.75rem, 5vw, 2.5rem); line-height: 1.1; font-weight: 600; letter-spacing: -0.03em; overflow-wrap: anywhere; }
	.big { font-size: clamp(2.5rem, 10vw, 4.5rem); }
	.eyebrow { font-size: 0.8125rem; line-height: 1.2; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; }
	.sub { font-size: 1rem; line-height: 1.5; color: var(--muted); }
	.meta { font-size: 0.875rem; color: var(--muted); }
	.muted { color: var(--muted); }

	.input, .btn, .pick {
		font: inherit; font-size: 1rem; line-height: 1.25; color: var(--text); border-radius: var(--radius);
	}
	.input { width: 100%; padding: 0.75rem 0.875rem; background: var(--surface); border: 1px solid var(--border); }
	.input:focus { outline: 2px solid #555; outline-offset: 1px; border-color: #555; }

	.btn, .pick, .text-btn { appearance: none; background: none; border: 1px solid var(--border); cursor: pointer; }
	.btn { padding: 0.75rem 1rem; background: var(--surface); font-weight: 550; white-space: nowrap; }
	.btn:hover:not(:disabled), .pick:hover:not(.selected) { background: var(--surface-2); }
	.btn:disabled { opacity: 0.35; cursor: not-allowed; }
	.btn.primary { background: var(--accent); border-color: var(--accent); color: #111; }
	.btn.primary:hover:not(:disabled) { filter: brightness(0.96); background: var(--accent); }
	.text-btn { border: 0; padding: 0.5rem; margin: -0.5rem; color: var(--muted); font: inherit; font-size: 0.9375rem; }
	.text-btn:hover { color: var(--text); }

	.pick { padding: 0.8125rem 0.875rem; background: var(--surface); text-align: center; font-weight: 550; }
	.pick.selected { border-color: var(--accent); color: var(--accent); background: #1b2214; }

	.dial { width: 100%; display: flex; flex-direction: column; gap: 0.625rem; }
	.track {
		position: relative;
		width: 100%;
		height: 4.5rem;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		overflow: hidden;
	}
	.band { position: absolute; top: 0; bottom: 0; }
	.needle {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 3px;
		margin-left: -1.5px;
		background: var(--accent);
	}
	.needle.guess { background: #fff; }
	.labels { display: flex; justify-content: space-between; gap: 1rem; font-size: 0.875rem; color: var(--muted); }
	.labels span { max-width: 45%; overflow-wrap: anywhere; }

	.slider {
		width: 100%;
		accent-color: #fff;
		margin: 0;
	}

	.scores { display: flex; flex-direction: column; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
	.score { display: flex; justify-content: space-between; gap: var(--space); padding: 0.75rem 0.875rem; background: var(--surface); border-bottom: 1px solid var(--border); font-size: 0.9375rem; }
	.score:last-child { border-bottom: 0; }
	.score span { color: var(--muted); overflow-wrap: anywhere; }
	.score strong { color: var(--text); }
	.score.active span, .score.active strong { color: var(--accent); }
	.delta { color: var(--muted); font-size: 0.875em; font-weight: 500; margin-left: 0.25rem; }

	@media (max-width: 640px) {
		.main { padding: 1rem; }
		.screen > .btn.primary, .stack > .btn.primary, .screen.center > .btn.primary { width: 100%; }
	}
	@media (min-width: 641px) {
		.screen > .btn.primary, .stack > .btn.primary { min-width: 12rem; }
		.screen.center > .btn.primary { width: min(100%, 20rem); }
	}
</style>
