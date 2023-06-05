// replaceWith method

// function replaceFirstItem() {
// 	const firstItem = document.querySelector('li:first-child');
// 	const li = document.createElement('li');

// 	li.textContent = 'Replaced item';
// 	firstItem.replaceWith(li);
// }

// // Using outerHTML

// function replaceSecondItem() {
// 	const secondItem = document.querySelector('li:nth-child(2)');
// 	secondItem.outerHTML = '<li>Replaced Second Element</li>';
// }

// Using ForEach Loop

function replaceAllItems([...newItems]) {
	const items = document.querySelectorAll('li');
	const itemsList = Array.from(items);
	const liText = itemsList.map((item) => item.innerText);
	itemsList.forEach((item, index) => (item.outerHTML = `<li>${liText[index]} Replaced with: ${newItems[index]}</li>`));
}

function replaceChildHeading() {
	const header = document.querySelector('header');
	const h1 = document.querySelector('h1');
	const h2 = document.createElement('h2');
	h2.id = 'app-title';
	h2.textContent = 'Shopping List';
	header.replaceChild(h2, h1);
}

// replaceFirstItem();
// replaceSecondItem();

replaceAllItems(['Andriy', 'Milka', 'Bed', 'Sex']);
replaceChildHeading();
