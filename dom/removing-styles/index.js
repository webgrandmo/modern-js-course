const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

document.querySelector('button').onclick = run;

function run() {
	// text.className === 'dark' || text.className === 'card dark' ? (text.className = 'card') : (text.className = 'card dark');
	// ClassList
	//text.classList.add('dark');
	//text.classList.toggle('dark');

	items.forEach((c) => c.classList.add('dark'));
}
