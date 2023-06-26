// fetch('http://httpstat.us/200')
// 	.then((response) => response)
// 	.then(console.log('Success'));

// Test with response.ok
// fetch('http://httpstat.us/404')
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error(`Request failed: ${response.status} ${response.statusText}`);
// 		}
// 		return response;
// 	})
// 	.then(() => console.log('Success'))
//   .catch((error) => console.log(error));

fetch('http://httpstat.us/300')
	.then((response) => {
		if (response.status === 404) {
			throw new Error('Not Found');
		} else if (response.status === 500) {
			throw new Error('Internal Server Error');
		} else if (response.status !== 200) {
			throw new Error('Request Failed');
		}
		return response;
	})
	.then(() => console.log('Success'))
	.catch((error) => console.log(error));

// Catch runs on a Network error

// fetch('http://hello123')
// 	.then((response) => response)
// 	.then(() => console.log('Success'))
// 	.catch((error) => console.log(error));
