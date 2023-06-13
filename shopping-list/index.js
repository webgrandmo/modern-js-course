const itemForm = document.getElementById('item-form'),
	itemInput = document.getElementById('item-input'),
	itemFilter = document.getElementById('filter'),
	itemList = document.getElementById('item-list');

const createHTMLElement = (element, classes) => {
	const HTMLelement = document.createElement(element);
	HTMLelement.className = classes;
	return HTMLelement;
};

const createText = (newItem) => {
	return document.createTextNode(newItem);
};

const addItem = (e) => {
	e.preventDefault();
	// Validate input
	const newItem = itemInput.value;
	if (!newItem) {
		alert('Please fill the input');
		newItem.style.border = '2px solid red';
		return;
	}

	// Create list item
	const li = document.createElement('li'),
		button = createHTMLElement('button', 'remove-item btn-link text-red'),
		icon = createHTMLElement('i', 'fa-solid fa-xmark'),
		text = createText(newItem);
	li.appendChild(text);
	button.appendChild(icon);
	li.appendChild(button);
	itemList.appendChild(li);

	itemInput.value = '';
};

// Event Listeners
itemForm.addEventListener('submit', addItem);
