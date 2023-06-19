// const myCallback = () => {
// 	console.log(Date.now());
// };

// const intervalID = setInterval(myCallback, 1000);

// document.querySelector('.stop-color').addEventListener('click', () => {
// 	clearInterval(intervalID);
// });

let intervalID = null;

// const changeColour = () => {
// 	if (document.body.style.backgroundColor !== 'black') {
// 		document.body.style.backgroundColor = 'black';
// 		document.body.style.color = 'white';
// 	} else {
// 		document.body.style.backgroundColor = 'white';
// 		document.body.style.color = 'black';
// 	}
// };

const setRandomColour = () => {
	const randomBGColour = Math.floor(Math.random() * 16777215).toString(16);
	const randomColour = randomBGColour.split('').reverse().join('');
	document.body.style.backgroundColor = `#${randomBGColour}`;
	document.body.style.color = `#${randomColour}`;
};

const startChange = () => {
	if (!intervalID) {
		intervalID = setInterval(setRandomColour, 1000);
	}
};

const stopChange = () => {
	clearInterval(intervalID);
	intervalID = null;
};

document.querySelector('.start').addEventListener('click', startChange);
document.querySelector('.stop').addEventListener('click', stopChange);
