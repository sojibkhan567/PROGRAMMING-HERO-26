// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows for asynchronous programming and can be used to handle events, perform actions after a delay, or process data once it becomes available.

function registerUser(cb) {
    console.log("User registration completed.");
    cb(); // Call the callback function after registration is complete
}

function userBasicInfo() {
    user = {
        name: "John Doe",
        email: "john.doe@example.com"
    };
    console.log("User basic info:", user);
}

console.log("Registering user...");
registerUser(userBasicInfo);