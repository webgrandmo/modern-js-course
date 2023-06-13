// window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));
// window.addEventListener('load', () => console.log('Page Loaded'));

// window.addEventListener('resize', () => {
// 	document.querySelector('h1').textContent = `Resized to: ${window.innerWidth} ${window.innerHeight}`;
// });

window.addEventListener('scroll', () => {
	console.log(`Scrolled to: ${window.scrollX} ${window.scrollY.toFixed()}`);

	if (window.scrollY > 70) {
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white';
	} else {
		document.body.style.backgroundColor = 'white';
		document.body.style.color = 'black';
	}
});

window.addEventListener('focus', () => {
	document.querySelectorAll('p').forEach((p) => (p.style.fontSize = '5rem'));
});

window.addEventListener('blur', () => {
	document.querySelectorAll('p').forEach((p) => (p.style.fontSize = '1rem'));
});
