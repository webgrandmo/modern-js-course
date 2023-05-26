// For OF Loop

// Loop through the arrays

const users = [{ name: 'Andriy' }, { name: 'Milka' }, { name: 'John' }, { name: 'Anna' }];
const items = ['table', 'pen', 'bed', 'broom'];

for (const item of items) {
	console.log(item);
}

for (const user of users) {
	console.log(user.name);
}

// Loop over the strings

const str = 'Hello World!';

for (const char of str) {
	console.log(char);
}

// Loop over the Map

const map = new Map();
map.set('name', 'Andriy');
map.set('age', '36');

for (const [key, value] of map) {
	console.log(key, value);
}
