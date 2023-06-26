const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ name: 'John', age: 30 });
		console.log('Success');
	}, 1000);
});

// promise.then((user) => console.log(user));
const getUser = async () => {
	const response = await promise;
	console.log(response);
};

//getUser();

const userList = document.getElementById('user-list');

const displayUsers = (users) => {
	users.forEach((user) => {
		const li = document.createElement('li');
		li.appendChild(document.createTextNode(user.name));
		userList.appendChild(li);
	});
};

// Fetch API with Async and Await
const getUsers = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();
	displayUsers(data);
};

getUsers();
