const itemForm = document.getElementById('item-form'),
	itemInput = document.getElementById('item-input'),
	itemFilter = document.getElementById('filter'),
	itemList = document.getElementById('item-list'),
	clearBtn = document.getElementById('clear');

const createHTMLElement = (element, classes) => {
	const HTMLelement = document.createElement(element);
	HTMLelement.className = classes;
	return HTMLelement;
};

const createText = (newItem) => {
	return document.createTextNode(newItem);
};

// Add item
const onAddItemSubmit = (e) => {
	e.preventDefault();
	// Validate input
	const newItem = itemInput.value;
	if (!newItem) {
		alert('Please fill the input');
		newItem.style.border = '2px solid red';
		return;
	}

	addItemToDOM(newItem);
	addItemToStorage(newItem);

	checkUI();
	itemInput.value = '';
};

const addItemToDOM = (item) => {
	// Create list item
	const li = document.createElement('li'),
		button = createHTMLElement('button', 'remove-item btn-link text-red'),
		icon = createHTMLElement('i', 'fa-solid fa-xmark'),
		text = createText(item);
	li.appendChild(text);
	button.appendChild(icon);
	li.appendChild(button);
	itemList.appendChild(li);
};

const addItemToStorage = (item) => {
	let itemsFromStorage;
	if (localStorage.getItem('items') === null) {
		itemsFromStorage = [];
	} else {
		itemsFromStorage = JSON.parse(localStorage.getItem('items'));
	}
	itemsFromStorage.push(item);
	localStorage.setItem('items', JSON.stringify(itemsFromStorage));
};

// Delete item
const deleteItem = (e) => {
	if (e.target.classList.contains('fa-xmark')) {
		if (window.confirm('Are you sure you want to delete')) {
			e.target.parentElement.parentElement.remove();
		}
	}
	checkUI();
};

// Clear All Items

const clearItems = (e) => {
	// const items = document.querySelectorAll('li');
	// if (e.target.id === 'clear' && items.length > 0) {
	// 	items.forEach((item) => item.remove());
	// }

	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild);
	}
	checkUI();
	itemInput.value = '';
};

// Filter items
const filterItems = (e) => {
	const text = e.target.value.toLowerCase(),
		items = itemList.querySelectorAll('li');
	items.forEach((item) => {
		const itemName = item.firstChild.textContent.toLowerCase();

		if (itemName.includes(text)) {
			item.style.display = 'flex';
		} else {
			item.style.display = 'none';
		}
	});
};

// Check on items presents

const checkUI = () => {
	const items = itemList.querySelectorAll('li');
	if (!items || items.length === 0) {
		itemFilter.style.display = 'none';
		clearBtn.style.display = 'none';
	} else {
		itemFilter.style.display = 'block';
		clearBtn.style.display = 'block';
	}
};

// Event Listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', deleteItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);
checkUI();
