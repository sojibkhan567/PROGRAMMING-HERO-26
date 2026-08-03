// 1. map() : protita element ke niye notun array return kore.
// 2. forEach() : protita element ke niye kono kaj kore, kintu notun array return kore na.
// 3. filter() : protita element ke niye condition check kore, jodi condition true hoy tahole notun array return kore.
// 4. find() : protita element ke niye condition check kore, jodi condition true hoy tahole first matching element return kore.

const numbers = [1, 2, 3, 4, 5];

// map(): to modify each element and return a new array
const squaredNumbers = numbers.map(num => num * num);
console.log('Squared Numbers:', squaredNumbers); // [1, 4, 9, 16, 25]

// forEach(): to perform an action on each element without returning a new array
numbers.forEach((num, index, array) => {
  console.log(`Number: ${num}, Index: ${index}, Array: ${array}`);
});


// filter(): to filter elements based on a condition and return a new array
let prices = [100, 200, 300, 400, 500];
const expensivePrices = prices.filter(price => price > 300);
console.log('Expensive Prices:', expensivePrices); // [400, 500]

// find(): to find the first element that matches a condition
const phones = [
    { name: 'iPhone', price: 999 },
    { name: 'Samsung', price: 899 },
    { name: 'OnePlus', price: 699 },
    { name: 'Google Pixel', price: 99 }
]

const phone = phones.find(p => p.price === 899);
console.log('Found Phone:', phone); // { name: 'Samsung', price: 899 }

const phone2 = phones.filter(p => p.price < 1000 && p.price > 100);
console.log('Found Phone 2:', phone2); // [ { name: 'Samsung', price: 899 }, { name: 'Google Pixel', price: 799 } ]

// slice() : to extract a portion of an array and return a new array
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const slicedFruits = fruits.slice(1, 4);

console.log(a)
var a = 5