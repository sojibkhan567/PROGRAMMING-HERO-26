const fruits = ["mango", "grapes", "orange", "lichi", "jack-fruits"];

//console.log(fruits.length);

// push() : Add element at last position
//fruits.push("guava");
//console.log(fruits);

// pop() : Remove any element at last
// console.log(fruits.pop());
// console.log(fruits);


// Array Traversal using for and while loop
// for(const fruit of fruits) {
//     console.log(fruit);
// }
for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    console.log(element)
}