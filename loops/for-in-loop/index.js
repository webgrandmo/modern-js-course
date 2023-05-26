//Loop through the objects

const colorObj = {
	color1: 'red',
	color2: 'blue',
	color3: 'green',
	color4: 'orange',
};

for (const key in colorObj) {
	console.log(key, colorObj[key]);
}

//Loop through the array of objects
const users = [
	{ name: 'Andriy', age: 36 },
	{ name: 'Milka', age: 42 },
	{ name: 'John', age: 26 },
	{ name: 'Anna', age: 44 },
];

for (const user in users) {
	console.log(user, users[user].name);
}

//Loop through the arrays

const colors = ['red', 'green', 'blue'];
for (const key in colors) {
	console.log(`My colour is ${colors[key]}`);
}
