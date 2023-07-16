const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkboxInput = document.getElementById('checkbox');
const heading = document.querySelector('h1');

const onInput = (e) => {
	console.log(e.target.value);
	heading.textContent = e.target.value;
};

const onCheck = (e) => {
	const isChecked = e.target.checked;
	heading.textContent = !isChecked ? 'Shopping List' : 'Movie List';
};

const onFocus = (e) => {
	console.log('Focused');
	itemInput.style.outlineWidth = '1px';
	itemInput.style.outlineColor = 'blue';
	itemInput.style.outlineStyle = 'solid';
};

const onBlur = (e) => {
	if (e.target.value.trim() === '' || e.target.value.length < 5) {
		itemInput.style.outlineWidth = '1px';
		itemInput.style.outlineColor = 'red';
		itemInput.style.outlineStyle = 'solid';
	}
};

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('input', onInput);
checkboxInput.addEventListener('input', onCheck);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
