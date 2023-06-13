const showKey = (e) => {
	const insert = document.querySelector('#insert');
	insert.innerHTML = '';
	const keyCodes = {
		'e.key': e.key === ' ' ? 'Space' : e.key,
		'e.keyCode': e.keyCode,
		'e.code': e.code,
	};
	for (const key in keyCodes) {
		if (Object.hasOwnProperty.call(keyCodes, key)) {
			const div = document.createElement('div');
			const small = document.createElement('small');
			div.classList = 'key';
			const keyText = document.createTextNode(key);
			const keyValue = document.createTextNode(keyCodes[key]);
			small.appendChild(keyText);
			div.appendChild(keyValue);
			div.appendChild(small);
			insert.appendChild(div);
		}
	}
};

window.addEventListener('keydown', showKey);
