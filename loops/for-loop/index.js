// For Loop
// for (let i = 0; i <= 10; i++) {
// 	console.log(`Number ${i}`);
// }

// For Nested Loop

// for (let i = 1; i <= 5; i++) {
// 	console.log(`Number ${i}`);

// 	for (let j = 1; j <= 5; j++) {
// 		console.log(`${i} * ${j} = ${i * j}`);
// 	}
// }

// Loop through the array

// const names = ['Andriy', 'Milka', 'John', 'Anna'];

// for (let i = 0; i < names.length; i++) {
// 	if (i === 1) {
// 		console.log(`${names[i]} is the best`);
// 	} else {
// 		console.log(`My name is ${names[i]}`);
// 	}
// }

// Break

// for (let i = 1; i <= 20; i++) {
// 	console.log(i);
// 	if (i === 15) {
// 		console.log('Breaking');
// 		break;
// 	}
// }

// Continue

for (let i = 1; i <= 20; i++) {
	if (i === 13) {
		console.log(`Skipping ${i}`);
		continue;
	}
	console.log(i);
}
