// Abstract Classes in TypeScript
abstract class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeSound(): void; // Abstract method
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): void {
        console.log("Meow! Meow!");
    }
}

 
// Abstract classes cannot be instantiated directly, but we can create instances of derived classes
const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Woof! Woof!

const myCat = new Cat("Whiskers");
myCat.makeSound(); // Output: Meow! Meow!
