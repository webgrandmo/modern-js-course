// const socials = ['Facebook', 'Twitter', 'LinkedIn', 'Instagram'];
// socials.forEach((social) => console.log(social));

// socials.forEach((social, index, arr) => console.log(`${index} - ${social}`, arr));

// function logSocials(social, index, arr) {
// 	console.log(`${index} - ${social}`, arr);
// }

// socials.forEach(logSocials);

const socialsObj = [
	{ name: 'Twitter', url: 'https://twitter.com' },
	{ name: 'Facebook', url: 'https://facebook.com' },
	{ name: 'LinkedIn', url: 'https://linkedin.com' },
	{ name: 'Instagram', url: 'https://instagram.com' },
];

socialsObj.forEach((item) => console.log(item.name));
