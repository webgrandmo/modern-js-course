// let x = 100;

// // Solution with For Loop
// for (let i = 1; i <= x; i++)
// {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log('FizzBuzz');
// 	} else if (i % 3 === 0) {
// 		console.log('Fizz');
// 	} else if (i % 5 === 0) {
// 		console.log('Buzz');
// 	} else {
// 		console.log(`Number ${i}`);
// 	}
// }

// Solution with While Loop

let i = 1;
let x = 100;

while (i <= x) {
	if (i % 15 === 0) {
		console.log('FizzBuzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(`Number ${i}`);
	}

	i++;
}
