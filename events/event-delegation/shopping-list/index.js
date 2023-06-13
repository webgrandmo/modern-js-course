const itemList = document.querySelector('#item-list');

itemList.addEventListener('click', (e) => {
	const target = e.target;
	console.log(target);
	if (target.tagName === 'LI') {
		target.remove();
	}
	if (target.className === 'fa-solid fa-xmark') {
		target.parentElement.parentElement.remove();
	}
});
