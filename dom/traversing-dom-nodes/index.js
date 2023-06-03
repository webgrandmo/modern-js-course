let output;
const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[0].textContent = 'Hello world';

output = parent.firstChild;

// Parent

const child = document.querySelector('.child');

output = child.parentNode;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Siblings

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
