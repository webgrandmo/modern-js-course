const form = document.getElementById('item-form');

const onSubmit = (e) => {
	e.preventDefault();

	const item = document.querySelector('#item-input').value;
	const priority = document.querySelector('#priority-input').value;

	if (item === '' || priority === '0') {
		alert('Please fill all fields');
		return;
	}

	console.log(item, priority);
};

const onSubmit2 = (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	// const item = formData.get('item');
	// const priority = formData.get('priority');

	const entries = formData.entries();
	for (const entry of entries) {
		console.log(entry[1]);
	}
	// console.log(item, priority);
};

form.addEventListener('submit', onSubmit2);
