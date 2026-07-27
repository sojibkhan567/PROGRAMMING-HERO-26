// let str = "hello";
// let arr = ["h", "e", "l", "l", "o"];

// console.log(str.length);
// console.log(arr.length);

// console.log(str[0]);
// console.log(arr[0]);

// str.push("!"); // This will throw an error because strings are immutable in JavaScript

// const str1 = "JavaScript";
// const strToArray = str1.split(""); // Convert string to array
// console.log(strToArray); // Output: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// const arr1 = ["c", "a", "t"];
// const arrToStr = arr1.join(""); // Convert array to string
// console.log(arrToStr);

// const name = "JavaScript";
// const str2 = " hi there ";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(str2.trim());

//? Task 3.1 — Slicing Strings
// let sentence = "Learning JavaScript is fun!";
// console.log(sentence.slice(0, 8));
// console.log(sentence.slice(-4));

//? Task 3.2 — Combine Strings
// const str3 = "Hello";
// const str4 = "World";
// console.log(str3.concat(" ", str4));
// console.log(str3 + " " + str4);
// console.log(`${str3} ${str4}`);

//? Task 4.1 — Three Reversal Methods
function reverseString(str) {
  reverseString = str.split("").reverse().join("");
  return reverseString;
}
// function reverseString(str) {
//     let reverseString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseString += str[i];
//     }
//     return reverseString;
// }

// const str4 = "JavaScript";
// const result = reverseString(str4);
// console.log(result);

//? Task 5.1 — Build a Profile Object
// const student = {
//   name: "Rony Khan",
//   age: 24,
//   grade: "A+",
//   isEnrolled: true,
// };
// console.log(student);
// console.log(student.name);

//? Task 6.1 — Dot vs Bracket Notation
// let car = { brand: "Toyota", model: "Corolla", year: 2022 };
// console.log(car.brand);
// console.log(car["model"]);
// car["color"] = "blue";
// car.year = 2023;
// console.log(car);

//? Task 7.1 — Keys and Values
// let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
// console.log(Object.keys(book));
// console.log(Object.values(book));
// delete book.pages;
// console.log(book);

//? Task 7.2 — Nested Objects
// let user = {
//   username: "coder123",
//   address: {
//     city: "Austin",
//     zip: "78701",
//   },
// };
// console.log(user.address.city);
// user.address.country = "BD";
// delete user.address.zip;
// console.log(user);

//? Task 8.1 — Loop Through Properties
let scores = { math: 90, science: 83, art: 95 };
// for(const key in scores) {
//     const result = `${key}: ${scores[key]}`;
//     console.log(result);
// }

// let sum = 0;
// for (const key in scores) {
//   sum += scores[key];
// }
// const count = Object.keys(scores).length;
// const average = sum / count;
// console.log(average.toFixed(2));

//? Task 9.1 — Contact Book
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234",
};
const email = contact.email.toLowerCase();
contact.email = email;

for (const key in contact) {
  console.log(key, ":", contact[key]);
}

const name = contact.name;
const result = reverseString(name);
console.log(result);

//add favouriteWords
contact.favoriteWords = ["mango", "banana", "orange"];
console.log(contact);

//check email
if (email.includes("@email.com")) {
  console.log("Email is correct");
} else {
  console.log("Email is incorrect.");
}
