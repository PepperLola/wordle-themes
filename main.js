let gameApp = document.querySelector('game-app');

// day of first wordle problem?
let startDay = new Date(2021, 5, 19, 0, 0, 0, 0);

// get the number of days between the first wordle problem and today
const getOffset = () => {
	let currentDate = new Date();
	let difference = currentDate.setHours(0, 0, 0, 0) - startDay;
	return Math.round(difference / 864e5);
};

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
