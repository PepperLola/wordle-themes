window.onload = () => {
	document.querySelectorAll('input').forEach((input) => {
		input.addEventListener('input', (e) => {
			if (e.target.value.length > 0) {
				let data = {};
				data[e.target.id] = e.target.value;
				browser.storage.sync.set(data);
			} else {
				browser.storage.sync.remove(e.target.id);
			}
		});

		try {
			browser.storage.sync.get(input.id).then(
				(stored) => {
					if (stored[input.id]) {
						input.value = stored[input.id];
					}
				},
				() => {}
			);
		} catch (e) {
			input.value = e.toString();
		}
	});

	document.getElementById('showEmojis').addEventListener('click', (e) => {
		let element = document.getElementById('preview');
		element.innerText = 'test';
	});
};
