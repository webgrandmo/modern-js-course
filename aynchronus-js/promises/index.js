// Create a promise
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Async task completed');
		resolve();
	}, 1000);
});

promise.then(() => console.log('Promise consumed'));

const getUser = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = null;
		if (!error) {
			resolve({ name: 'Andriy', age: 36 });
		} else {
			reject('Something went wrong');
		}
	}, 1000);
});

getUser
	.then((user) => console.log(`Name: ${user.name} Age: ${user.age}`))
	.catch((error) => {
		const p = document.createElement('p');
		p.innerText = error;
		document.body.appendChild(p);
		return;
	})
	.finally(() => console.log('The promise has been resolved or rejected'));
