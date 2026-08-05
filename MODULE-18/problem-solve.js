/*
  Problem 1: Fix the Scope Bug
  Rewrite using let to fix the output.
*/

let status = "Order Placed";

for (var i = 1; i <= 3; i++) {
    let status = "Processing Item " + i;
    //// console.log(status);
}
//console.log("Final Status:", status);


/*
  Problem 2: Receipt Generator (Template Strings)
  Build a receipt generator using template strings — take item name,
  price, qty as input, output formatted multiline receipt.

  Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 Taka"
*/
const receiptGenerator = (itemName, price, qty) => {
    return `${itemName} x${qty} = ${price * qty} Taka`
}
// console.log(receiptGenerator("Pen", 20, 3));
// console.log(receiptGenerator("Eraser", 15, 2));


/*
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/
const calculateTotal = (discount, ...prices) => {
    let totalAmount = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    let discountAmount = (totalAmount * discount) / 100;
    let finalAmount = totalAmount - discountAmount;
    return finalAmount;
}
//console.log(calculateTotal(5, 200, 250, 340))



/*
  Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const mergedArray = [...array1, ...array2];

// let newArray = [];
// for (let item of mergedArray) {
//     if (!newArray.includes(item)) {
//         newArray.push(item);
//     }
// }

const newArray = [...new Set(mergedArray)];
//console.log(newArray);



/*
  Problem 1: Arrow Function with Default Parameters & Logic
  Write an arrow function that calculates shipping cost based on
  order amount. Free shipping if amount >= 1000, otherwise charge
  a default fee 60 taka.

  Example: calculateShipping(1200) -> "Free Shipping"
  Example: calculateShipping(500) -> "Shipping Fee: 60 Taka"
  Example: calculateShipping(500, 100) -> "Shipping Fee: 100 Taka"
*/
const calculateShipping = (amount, fee = 60) => {
    // if (amount >= 1000) {
    //     return "Free Shipping";
    // } else {
    //     return `Shipping Fee: ${fee} Taka`;
    // }
    return amount >= 1000 ? "Free Shipping" : `Shipping Fee: ${fee} Taka`;
}
// console.log(calculateShipping(1200));
// console.log(calculateShipping(500));
// console.log(calculateShipping(500, 100));



/*
  Problem 2: Arrow Function with Multiple Conditions
  Write an arrow function that assigns a grade based on marks.
  90+ -> "A+", 80-89 -> "A", 60-79 -> "B", below 60 -> "Fail"
  Rules: if not number -> return invalid

  Example: getGrade(95) -> "A+"
  Example: getGrade(82) -> "A"
  Example: getGrade(45) -> "Fail"
*/
const getGrade = (marks) => {
    if (typeof marks !== "number") {
        return "Invalid";
    } else if (marks >= 90) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else {
        return "Fail";
    }
}
console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(45));
console.log(getGrade("A+"));