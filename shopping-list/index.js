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

const getItemsFromStorage = (item) => {
	let itemsFromStorage;
	if (localStorage.getItem('items') === null) {
		itemsFromStorage = [];
	} else {
		itemsFromStorage = JSON.parse(localStorage.getItem('items'));
	}
	return itemsFromStorage;
};

const displayItems = () => {
	const itemsFromStorage = getItemsFromStorage();
	itemsFromStorage.forEach((item) => addItemToDOM(item));
	checkUI();
};

const addItemToStorage = (item) => {
	const itemsFromStorage = getItemsFromStorage();
	itemsFromStorage.push(item);
	localStorage.setItem('items', JSON.stringify(itemsFromStorage));
};

const onClickItem = (e) => {
	if (e.target.classList.contains('fa-xmark')) {
		deleteItem(e.target.parentElement.parentElement);
	}
};

// Delete item
const deleteItem = (item) => {
	if (window.confirm('Are you sure you want to delete')) {
		item.remove();
	}
	removeItemFromStorage(item.textContent);
	checkUI();
};

const removeItemFromStorage = (item) => {
	let itemsFromStorage = getItemsFromStorage();
	itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
	localStorage.setItem('items', JSON.stringify(itemsFromStorage));
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
	localStorage.clear();
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

// Initialize app

const init = () => {
	// Event Listeners
	itemForm.addEventListener('submit', onAddItemSubmit);
	itemList.addEventListener('click', onClickItem);
	clearBtn.addEventListener('click', clearItems);
	itemFilter.addEventListener('input', filterItems);
	document.addEventListener('DOMContentLoaded', displayItems);
	checkUI();
};

init();
