fetch('./movies.json')
	.then((response) => response.json())
	.then((data) => console.log(data));

fetch('./test.txt')
	.then((response) => response.text())
	.then((data) => console.log(data));

fetch('https://api.github.com/users/webgrandmo')
	.then((response) => response.json())
	.then((data) => console.log(data));
