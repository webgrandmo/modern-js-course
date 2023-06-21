const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const getJoke = () => {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
	xhr.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			const data = JSON.parse(this.responseText);
			jokeEl.innerHTML = data.value;
		} else {
			jokeEl.innerHTML = `<p style="color: red">Sorry, something went wrong. <br>${this.statusText} ${this.status}</p>`;
		}
	};
	xhr.send();
};

jokeBtn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);
