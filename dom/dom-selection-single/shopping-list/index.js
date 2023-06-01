console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').getAttribute('id'));

document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('data-title', 'App Title');

const title = document.getElementById('app-title');

// Get/change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello World Once More';
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '5px 10px';

// document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';

const list = document.querySelector('ul');
console.log(list);
const firstItem = document.querySelector('li');
firstItem.style.color = 'blue';
