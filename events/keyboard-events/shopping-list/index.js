const itemInput = document.getElementById('item-input');

const onKeyPress = () => console.log('keypress');
const onKeyUp = () => console.log('keyup');
const onKeyDown = (e) => {
	// key
	// console.log(e.key);
	// if (e.key === 'Backspace') {
	// 	alert('You pressed Backspace');
	// }
	// keyCode
	// https://www.toptal.com/developers/keycode/table
	// if (e.keyCode === 8) {
	// 	alert('You pressed Backspace');
	// }
	// code
	// console.log(e.code);
	// if (e.code === 'Digit1') {
	// 	console.log('You pressed 1');
	// }

	// if (e.repeat) {
	// 	console.log(`You are holding down ${e.key}`);
	// }

	// console.log(`Shift: ${e.shiftKey}`);
	// console.log(`Control: ${e.ctrlKey}`);
	// console.log(`Alt: ${e.altKey}`);

	if (e.shiftKey && e.key === 'K') {
		console.log('You pressed K');
	}
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
