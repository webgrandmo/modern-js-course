const changeText = () => {
	document.querySelector('h1').textContent = 'Hello from Callback';
};

const timerID = setTimeout(() => {
	changeText();
}, 3000);

document.querySelector('button').addEventListener('click', () => {
	console.log(timerID);
	clearTimeout(timerID);
});
