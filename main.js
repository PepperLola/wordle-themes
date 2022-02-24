let gameApp = document.querySelector('game-app');

let defaultColors = {
	default: {
		light: {
			correct: '#6aaa64',
			present: '#c9b458',
			absent: '#787c7e',
			keyboard: '#d3d6da',
		},
		dark: {
			correct: '#538d4e',
			present: '#b59f3b',
			absent: '#3a3a3c',
			keyboard: '#818384',
		},
	},
	highContrast: {
		light: {
			correct: '#f5793a',
			present: '#85c0f9',
			absent: '#787c7e',
			keyboard: '#d3d6da',
		},
		dark: {
			correct: '#f5793a',
			present: '#85c0f9',
			absent: '#3a3a3c',
			keyboard: '#818384',
		},
	},
};

// set custom colors
let gameRows = gameApp.shadowRoot.querySelectorAll('game-row');
let gameKeyboard = gameApp.shadowRoot.querySelector('game-keyboard');
let keyboardButtons = gameKeyboard.shadowRoot.querySelectorAll('button');

// day of first wordle problem?
let startDay = new Date(2021, 5, 19, 0, 0, 0, 0);

// get the number of days between the first wordle problem and today
const getOffset = () => {
	let currentDate = new Date();
	let difference = currentDate.setHours(0, 0, 0, 0) - startDay;
	return Math.round(difference / 864e5);
};

let colorObserver = new MutationObserver((mutationList, observer) => {
	let mutated = mutationList
		.filter((btn) => btn.attributeName == 'data-state')
		.map((btn) => btn.target);
	// second expression is dumb but we have to find elements one at a time because of shadowRoot
	// finds each row, their shadow roots, then each tile in the row, then their shadow roots,
	// then the actual tile element with the letter
	// then reduces because the previous expression returns an array of arrays
	// then removes the ones that don't have a data state because we don't change their colors
	// which might be faster than leaving them?
	mutated = [
		...mutated,
		...Array.from(gameApp.shadowRoot.querySelectorAll('game-row'))
			.map((row) => row.shadowRoot)
			.map((row) =>
				Array.from(row.querySelectorAll('game-tile'))
					.map((row) => row.shadowRoot)
					.map((tile) => tile.querySelector('div.tile'))
			)
			.reduce((a, b) => [...a, ...b])
			.filter((element) => element.getAttribute('data-state') != ''),
	];
	if (mutated.length < 1) return;
	browser.storage.sync
		.get(['correctColor', 'presentColor', 'absentColor'])
		.then((stored) => {
			let darkMode =
				localStorage.getItem('nyt-wordle-darkmode') == 'true';
			let highContrast =
				localStorage.getItem('nyt-wordle-cbmode') == 'true';
			let contrastMode = highContrast ? 'highContrast' : 'default';
			let mode = darkMode ? 'dark' : 'light';
			mutated.forEach((element) => {
				let color = '#121213';
				let evaluation = element.getAttribute('data-state');
				switch (evaluation) {
					case 'correct':
						color =
							stored['correctColor'] ||
							defaultColors[contrastMode][mode][evaluation];
						break;
					case 'present':
						color =
							stored['presentColor'] ||
							defaultColors[contrastMode][mode][evaluation];
						break;
					default:
					case 'absent':
						color =
							stored['absentColor'] ||
							defaultColors[contrastMode][mode][evaluation];
						break;
				}

				element.style.background = color;
			});
		});
});

colorObserver.observe(gameKeyboard.shadowRoot, {
	attributes: true,
	childList: true,
	subtree: true,
});

// share button doesn't exist until stats container is created, so we listen for that
const observer = new MutationObserver(() => {
	let statsContainer = gameApp.shadowRoot.querySelector('game-stats');
	// since we can't listen for a specific component creation, instead we return if the one we want doesn't exist
	if (!statsContainer) return;
	let shareButton = statsContainer.shadowRoot.querySelector(
		'button#share-button'
	);
	if (!shareButton) return;
	shareButton.addEventListener('click', (e) => {
		// gameApp custom properties not defined for the extension so we have to use localStorage
		let state = JSON.parse(localStorage.getItem('nyt-wordle-state'));
		let evaluations = state.evaluations, // evaluations = letter states in guessed words
			dayOffset = getOffset(),
			rowIndex = state.rowIndex, // row the player is on
			isHardMode = state.hardMode,
			isWin = state.gameStatus === 'WIN',
			result = 'Wordle '.concat(dayOffset);
		result += ' '.concat(isWin ? rowIndex : 'X', '/').concat(6);
		if (isHardMode) result += '*';

		// fetch stored emojis from browser sync storage
		browser.storage.sync
			.get(['correct', 'present', 'absent'])
			.then((stored) => {
				// create string for answers with emojis
				let answers = '';
				evaluations.forEach((evaluation) => {
					if (evaluation) {
						evaluation.forEach((answer) => {
							switch (answer) {
								case 'correct':
									answers += stored.correct || '🟩';
									break;
								case 'present':
									answers += stored.present || '🟨';
									break;
								default:
								case 'absent':
									answers += stored.absent || '⬛';
									break;
							}
						});
					}
					answers += '\n';
				});
				result = result.concat('\n\n', answers.trimEnd());
				// copy text to clipboard
				navigator.clipboard.writeText(result);
			});
	});
});

// start watching gameApp shadowRoot for changes
observer.observe(gameApp.shadowRoot, {
	childList: true,
	subtree: true,
});
