const div = document.createElement('div');

div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

const text = document.createTextNode('Hell World!');

document.querySelector('#item-list').appendChild(text);

console.log(div);

// Get ul element
const itemList = document.querySelector('#item-list');

// Create item
const item = document.createElement('li');
item.appendChild(text);

// Create button
const button = document.createElement('button');
button.classList = 'remove-item btn-link text-red';

// Create icon
const icon = document.createElement('i');
icon.classList = 'fa-solid fa-xmark';

button.appendChild(icon);
item.appendChild(button);
itemList.appendChild(item);
console.log(button);

function createButton(classes) {
	// Create button
	const button = document.createElement('button');
	button.classList = classes;
	return button;
}

function createIcon(classes) {
	// Create icon
	const icon = document.createElement('i');
	icon.classList = classes;
	return icon;
}

function createItems(item) {
	// Create item
	const li = document.createElement('li');
	const text = document.createTextNode(item);
	li.appendChild(text);

	const button = createButton('remove-item btn-link text-red');
	const icon = createIcon('fa-solid fa-xmark');
	// Append elements

	button.appendChild(icon);
	li.appendChild(button);
	itemList.appendChild(li);
}

createItems('Eggs');
createItems('Cheese');
