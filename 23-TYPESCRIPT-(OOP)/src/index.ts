// create a class object with a constructor that takes a name and age parameter
class Person {
    name: string;
    email: string;
    age: number;
    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    // create a method that returns the name and age of the person
    getDetails(): string {
        return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
    }
}

// create a new instance of the Person class
const person1 = new Person("John Doe", "john.doe@example.com", 30);
//console.log(person1.getDetails());

// create a new instance of the Person class
const person2 = new Person("Jane Smith", "jane.smith@example.com", 25);
//console.log(person2.getDetails());
