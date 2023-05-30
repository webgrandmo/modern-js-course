const numbers = [2, 4, 5, 6, 8, 9];

// const doubledNumbersArray = numbers.map((n) => n * 2);

// console.log(doubledNumbersArray);

// // Same with ForEach method

// const doubledNumbersArray2 = [];

// numbers.forEach((n) => {
// 	doubledNumbersArray2.push(n * 2);
// });

// console.log(doubledNumbersArray2);

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

// Create an array with company names

const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Create an objects in the array with company names and categories

const companyInfo = companies.map((company) => {
	return {
		name: company.name,
		category: company.category,
	};
});
console.log(companyInfo);

// Create an array with length of each company in years

const companyYears = companies.map((company) => company.end - company.start);
console.log(companyYears);

// Create an array of objects with name and length of each company in years

const companyYearsInfo = companies.map((company) => {
	return { name: company.name, length: company.end - company.start };
});
console.log(companyYearsInfo);

// Chain map methods

const squaredAndDoubledNumbers = numbers.map((number) => Math.sqrt(number)).map((sqrt) => sqrt * 2);
console.log(squaredAndDoubledNumbers);

// Chaining different methods

const evenAndDoubled = numbers.filter((number) => number % 2 === 0).map((evenNumber) => evenNumber * 2);
console.log(evenAndDoubled);
