// // InsertAdjacentElement Example

// function insertElement() {
// 	const filter = document.querySelector('.filter');

// 	const h1 = document.createElement('h1');
// 	h1.textContent = 'InsertAdjacentElement';

// 	filter.insertAdjacentElement('beforebegin', h1);
// }

// // InsertAdjacentText Example

// function insertText() {
// 	const item = document.querySelector('li:first-child');

// 	item.insertAdjacentText('afterend', 'InsertAdjacentText');
// 	console.log(item);
// }

// // InsertAdjacentHTML Example

// function insertAdjacentHTML() {
// 	const clearBtn = document.querySelector('.btn-clear');
// 	clearBtn.insertAdjacentHTML('beforebegin', '<h1>InsertAdjacentHTML</h1>');
// }

// // insertBefore Method

// function insertBeforeItem() {
// 	const ul = document.querySelector('ul');
// 	const li = document.createElement('li');
// 	li.textContent = 'Bananas';

// 	const item = document.querySelector('li:first-child');

// 	ul.insertBefore(li, item);
// }

// insertElement();

// insertText();

// insertAdjacentHTML();

// insertBeforeItem();

// insertAfter

function insertAfter(newElement, existingElement) {
	//const parent = document.querySelector('.items');
	existingElement.insertAdjacentElement('afterend', newElement);
}

function insertAfter1(newElement, existingElement) {
	existingElement.parentElement.insertBefore(newElement, existingElement.nextSibling);
}

// New element

const li = document.createElement('li');
li.textContent = 'insertAfter Method';

// Existing Element to insert after

const secondItem = document.querySelector('li:first-child');

//insertAfter(li, secondItem);

insertAfter1(li, secondItem);
