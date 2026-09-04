"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create a class object with a constructor that takes a name and age parameter
class Person {
    name;
    email;
    age;
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    // create a method that returns the name and age of the person
    getDetails() {
        return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
    }
}
// create a new instance of the Person class
const person1 = new Person("John Doe", "john.doe@example.com", 30);
console.log(person1.getDetails());
//# sourceMappingURL=index.js.map