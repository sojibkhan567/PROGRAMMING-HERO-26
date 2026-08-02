// Destructuring for arrays
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;
console.log("Destructuring for arrays:");
console.log(first);
console.log(second);
rest.push(6);
console.log(rest);

// Destructuring for objects
const person = {
  name: "John",
  age: 30,
  city: "New York",
  marks: {
    math: 90,
    science: 85,
  },
};

const { name: personName, age, city, marks: { math, science } } = person;
console.log("Destructuring for objects:");
console.log(personName);
console.log(age);
console.log(city);
console.log(math);
console.log(science);
