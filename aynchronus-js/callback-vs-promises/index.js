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

const createAndDisplayActors = (data) => {
	data.forEach((item) => {
		const li = document.createElement('li');
		li.innerText = `Title: ${item.name || item.title}. Release year: ${item.age || item.release_year}`;
		document.getElementById('results').appendChild(li);
	});
};

getData('./movies.json')
	.then((movies) => {
		createAndDisplayActors(movies);
		return getData('./actors.json');
	})
	.then((actors) => {
		createAndDisplayActors(actors);
		return getData('./directors.json');
	})
	.then((directors) => {
		createAndDisplayActors(directors);
	})
	.catch((error) => console.log(error));
