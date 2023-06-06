const clearButton = document.querySelector('#clear');
const items = document.querySelectorAll('li');
const itemList = document.querySelector('ul');

function clearEventHandler() {
	//listItems.forEach((item) => item.remove());
	// listItems.forEach((item) => (item.style.display = 'none'));
	// listItems.forEach((item) => item.classList.add('hidden'));

	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild);
	}
}

// JavaScript event listener

// clearButton.onclick = function () {
// 	console.log('Clicked');
// };

// addEventListener method

clearButton.addEventListener('click', clearEventHandler);
// setTimeout(() => {
// 	clearButton.removeEventListener('click', clearEventHandler);
// }, 5000);

// Fire event programmatically

// setInterval(() => {
// 	clearButton.click();
// }, 3000);
