function getData(endpoint) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open('GET', endpoint);

		xhr.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status !== 200) {
					reject(`Something went wrong: ${this.status}`);
				} else {
					resolve(JSON.parse(this.responseText));
				}
			}
		};

		setTimeout(() => {
			xhr.send();
		}, Math.floor(Math.random() * 3000) + 1000);
	});
}

const createAndDisplayItems = ([...data]) => {
	data.forEach((item, index) => {
		const li = document.createElement('li');

		li.innerHTML = `${item.name ? 'Name:' : 'Title'} ${item.name || item.title}. ${item.age ? 'Age:' : 'Release year:'} ${item.age || item.release_year}`;
		document.getElementById('results').appendChild(li);
	});
};

// getData('./movies.json')
// 	.then((movies) => {
// 		createAndDisplayItems(movies);
// 		return getData('./actors.json');
// 	})
// 	.then((actors) => {
// 		createAndDisplayItems(actors);
// 		return getData('./directors.json');
// 	})
// 	.then((directors) => {
// 		createAndDisplayItems(directors);
// 	})
// 	.catch((error) => console.log(error));

const getAllData = async () => {
	const movies = await getData('./movies.json');
	const actors = await getData('./actors.json');
	const directors = await getData('./directors.json');
	createAndDisplayItems([...movies, ...actors, ...directors]);
};

// Just Fetch
const getAllDataWithFetch = async () => {
	try {
		const moviesResponse = await fetch('./movies.json');
		const actorsResponse = await fetch('./actors.json');
		const directorsResponse = await fetch('./directors.json');
		if (!moviesResponse.ok || !actorsResponse.ok || !directorsResponse.ok) {
			throw new Error(`Something went wrong. Status: ${moviesResponse.status || actorsResponse.status || directorsResponse.status}`);
		}
		const movies = await moviesResponse.json();
		const actors = await actorsResponse.json();
		const directors = await directorsResponse.json();
		createAndDisplayItems([...movies, ...actors, ...directors]);
	} catch (error) {
		console.error(error);
	}
};

// Fetch with Promise.all

const getAllDataPromiseAll = async () => {
	const [moviesResponse, actorsResponse, directorsResponse] = await Promise.all([fetch('./movies.json'), fetch('./actors.json'), fetch('./directors.json')]);
	const movies = await moviesResponse.json();
	const actors = await actorsResponse.json();
	const directors = await directorsResponse.json();
	createAndDisplayItems([...movies, ...actors, ...directors]);
};

getAllDataPromiseAll();
//getAllDataWithFetch();
//getAllData();
