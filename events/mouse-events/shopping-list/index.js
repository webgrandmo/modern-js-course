const logo = document.querySelector('img');

const onClick = () => console.log('Click event');
const onDoubleClick = () => {
	if (document.body.style.backgroundColor != 'purple') {
		document.body.style.backgroundColor = 'purple';
		document.body.style.color = 'white';
		document.querySelector('h1').style.fontSize = '48px';
	} else {
		document.body.style.backgroundColor = 'blue';
		document.body.style.color = 'yellow';
		document.querySelector('h1').style.fontSize = '28px';
	}
};

const onRightClick = () => console.log('Context menu event');
const onMouseDown = () => console.log('Mouse down event');
const onMouseUp = () => console.log('Mouse up event');
const onMouseWheel = () => console.log('Mouse wheel event');
const onMouseOver = () => console.log('Mouse over(hover) event');
const onMouseOut = () => console.log('Mouse out event');
const onDragStart = () => console.log('Drag start event');
const onDrag = () => console.log('Drag  event');
const onDragEnd = () => console.log('Drag end  event');

// Event Listeners

logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
