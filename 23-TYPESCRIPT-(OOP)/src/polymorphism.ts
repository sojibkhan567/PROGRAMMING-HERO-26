// Polymorphism & Methods overriding in TypeScript
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log("Some generic animal sound");
    }
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

const myDog = new Dog("Buddy");
console.log(myDog.name); // Output: Buddy
myDog.makeSound(); // Output: Woof! Woof!

const myCat = new Cat("Whiskers");
console.log(myCat.name); // Output: Whiskers
myCat.makeSound(); // Output: Meow! Meow!


/**
 * Example using Area of Shapes
 * method overriding and polymorphism
 */
class Shape {
    area(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super(); // Call the constructor of the parent class
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        super(); // Call the constructor of the parent class
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height; // Method overriding
    }
}

class Square extends Shape {
    side: number;
    constructor(side: number) {
        super(); // Call the constructor of the parent class
        this.side = side;
    }
    area(): number {
        return this.side ** 2; // Method overriding
    }
}

const circle = new Circle(5);
console.log(`Area of Circle: ${circle.area().toFixed(2)}`); // Output: Area of Circle: 78.54

const rectangle = new Rectangle(4, 6);
console.log(`Area of Rectangle: ${rectangle.area().toFixed(2)}`); // Output: Area of Rectangle: 24.00

const square = new Square(4);
console.log(`Area of Square: ${square.area().toFixed(2)}`); // Output: Area of Square: 16.00
