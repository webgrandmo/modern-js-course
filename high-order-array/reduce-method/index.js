const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// With For Loop

const sum2 = (acc) => {
	for (const curr of numbers) {
		acc += curr;
	}

	return acc;
};

console.log(sum2(0));

// Get total sum

const cart = [
	{ id: 1, name: 'Product1', price: 130 },
	{ id: 2, name: 'Product2', price: 160 },
	{ id: 3, name: 'Product3', price: 230 },
];

const total = cart.reduce((acc, product) => {
	return acc + product.price;
}, 0);
console.log(total);

// const totalPrice = cart.map((price) => price.price);

// const reducedPrice = totalPrice.reduce((acc, currentValue) => {
// 	return acc + currentValue;
// }, 0);

// console.log(reducedPrice);

//cart.reduce((accumulator, cart.p))

const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];
