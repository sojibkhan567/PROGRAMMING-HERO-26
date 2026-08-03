// const person = {
//   name: "John",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     // city: "New York",
//     zipCode: "10001"
//   }
// };

// console.log(person.address.city); // Output: undefined


// // Optional chaining (?.) allows you to safely access nested properties without causing an error if a property is undefined or null.
// console.log(person.address?.city); // Output: New York


function greet(name = "Guest") {

    return `Hello, ${name}`;

}

console.log(greet());