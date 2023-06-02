// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const evenNumbers = numbers.filter((number) => number % 2 === 0);
// // console.log(evenNumbers);

// const evenNumbers = [];

// numbers.forEach((number) => {
// 	if (number % 2 === 0) {
// 		evenNumbers.push(number);
// 	}
// });
// console.log(evenNumbers);

const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 1998 },
	{ name: 'Company Three', category: 'Auto', start: 1981, end: 2001 },
	{ name: 'Company Four', category: 'Technology', start: 1991, end: 2023 },
	{ name: 'Company Five', category: 'Retail', start: 1998, end: 2005 },
	{ name: 'Company Six', category: 'Auto', start: 2011, end: 2014 },
	{ name: 'Company Seven', category: 'Technology', start: 2001, end: 2008 },
	{ name: 'Company Eight', category: 'Finance', start: 2001, end: 2011 },
	{ name: 'Company Nine', category: 'Auto', start: 1980, end: 2014 },
	{ name: 'Company Ten', category: 'Retail', start: 1990, end: 2010 },
];

// Get only Retails companies

const retailCompanies = companies.filter((company) => company.category === 'Retail');
console.log(retailCompanies);

// Get companies started in or after 1980 and ended in or after 2005

const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);
console.log(earlyCompanies);

// Get companies lasted ten years or more

const decadeCompanies = companies.filter((company) => company.end - company.start >= 10);
console.log(decadeCompanies);
