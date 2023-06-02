// Get child element

let output;

const parent = document.querySelector('.parent');

output = parent.children;
output = parent.children[1];
output = parent.children[1].className;
output = parent.children[1].nodeName;
output = parent.children[1].innerText;

output = parent.children[1].innerText = 'Another child element';
output = parent.children[1].style.color = 'blue';

parent.firstElementChild.innerText = 'First child text';
parent.lastElementChild.innerText = 'Last child text';

// Get parent element of child

const child = document.querySelector('.child');

output = child.parentElement;

child.parentElement.style.border = '1px solid green';
child.parentElement.style.padding = '10px';

// Sibling elements

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;
output = secondItem.nextElementSibling.style.color = 'green';
output = secondItem.previousElementSibling.style.color = 'orange';

console.log(output);
