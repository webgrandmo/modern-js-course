function removeClearButton() {
	document.querySelector('#clear').remove();
}

// function removeFirstItem() {
// 	const ul = document.querySelector('ul');
// 	const li = document.querySelector('li:first-child');

// 	ul.removeChild(li);
// }

function removeItem(itemNumber) {
	const ul = document.querySelector('ul');
	const items = document.querySelectorAll('li');
	ul.removeChild(items[itemNumber - 1]);
}

function removeItem1(itemNumber) {
	const li = document.querySelectorAll('li');
	li[itemNumber - 1].remove();
}

// removeFirstItem();
removeClearButton();
//removeItem(3);
removeItem1(1);
