// const arr = [1, 2, 3];

// function change(a) {
//     a.push(4);
//     a = [10, 20]; // This reassigns 'a' to a new array, but does not affect the original 'arr'
//     a.push(30); // This modifies the new array 'a', but does not affect the original 'arr'
// }

// change(arr);

// console.log(arr); // Output: [1, 2, 3, 4]


// template string
function sendEmail(name, payment) {
    const message = `Hello ${name},
    Your payment ${payment} has been comfrimed.

    Best regards,
    The Team`;
    return message;
}
console.log(sendEmail("Rony", 67000));