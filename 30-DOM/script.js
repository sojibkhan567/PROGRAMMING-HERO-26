// Promise & fetch API

const promise = new Promise((resolve, reject) => {
    let success = false; // Simulating a successful operation
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed!");
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});