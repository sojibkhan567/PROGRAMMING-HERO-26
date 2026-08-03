let name = 'John Doe';
let age = 30;

function updateUserInfo(userName, userAge) {
    userName = 'Jane Smith';
    userAge = 25;
    console.log('Inside function:', userName, userAge);
}

updateUserInfo(name, age);
console.log('Outside function:', name, age); // not changed because of pass by value

// pass by reference
let userInfo = {
    name: 'John Doe',
    age: 30
};

function updateUserInfoRef(user) {
    user.name = 'Jane Smith';
    user.age = 25;
    console.log('Inside function:', user.name, user.age);
}

updateUserInfoRef(userInfo);
console.log('Outside function:', userInfo.name, userInfo.age); // changed because of pass by reference


// preincrement and postincrement
let x = 5;
console.log('Pre-increment:', ++x);
// aga 1 baray tarpor use hobe,

console.log('Post-increment:', x++);
