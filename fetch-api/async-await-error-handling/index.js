//Handle error with Try Catch Block
const getUsers = async () => {
	try {
		// const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const response = await fetch('http://httpstat.us/500');
		if (response.status === 500) {
			throw new Error(`Internal Server Error. Status: ${response.status}`);
		}
		const data = await response.text();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
};
//getUsers();

//Handle error with Catch Method
const getPosts = async () => {
	//const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const response = await fetch('http://httpstat.us/500');
	if (!response.ok) {
		throw new Error(`Internal Server Error. Status: ${response.status}`);
	}
	const data = await response.text();
	console.log(data);
};

getPosts().catch((error) => console.error(error));
