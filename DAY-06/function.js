// 01. generate fullname function
function generateFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
const fullName = generateFullName("John", "Doe");
console.log("Full Name:", fullName); // Output: John Doe


// 02. calculate area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}
const area = calculateRectangleArea(5, 3);
console.log("Area:", area); // Output: 15


// 03. do price double function
function doublePrice(price, isDouble) {
    if (isDouble) {
        return price * 2;
    }
    return price;
}
const doubledPrice = doublePrice(10, true);
console.log("Doubled Price:", doubledPrice); // Output: 20


// 04. double array elements function
function doubleArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArrayElements(numbers);
console.log("Doubled Numbers:", doubledNumbers); // Output: [2, 4, 6, 8, 10]


// 05. pass an object to a function
function displayPersonInfo(person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}
const person = { name: "Alice", age: 30 };
displayPersonInfo(person); // Output: Name: Alice, Age: 30



// 06. pass an object to check A+
function checkGrade(student) {
    if (student.mark >= 80) {
        console.log(`${student.name} has got an A+.`);
    } else {
        console.log(`${student.name} does not have an A+.`);
    }
}
const student = { name: "Rony", age: 20, mark: 85 };
checkGrade(student); // Output: Rony has got an A+ grade.


// 07. sum of array elements function
function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const numbers2 = [12, 22, 31, 41, 58];
const total = sumArrayElements(numbers2);
console.log("Sum of array elements:", total); // Output: 164


// 08. identify evens or odd number
function indentifyEvenOdd(array) {
    const evens = [];
    const odds = [];
    for(const num of array) {
        if(num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }
    }
    return { evens, odds };
}
const array1 = [2, 3, 4, 7, 8, 10, 12, 15];
const { evens, odds } = indentifyEvenOdd(array1);
console.log("Even Numbers:", evens); // Output: [2, 4, 8, 10, 12]
console.log("Odd Numbers:", odds); // Output: [3, 7, 15]