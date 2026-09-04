// getters and setters in TypeScript
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // getter for name
  get name(): string {
    return this._name;
  }

  // setter for name
  set name(value: string) {
    this._name = value;
  }

  // getter for age
  get age(): number {
    return this._age;
  }

  // setter for age
  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }
}

const person = new Person("John", 30);
console.log(person.name); // Output: John
console.log(person.age); // Output: 30

// Using setters to update the values
person.name = "Doe";
person.age = 25;
console.log(person.name); // Output: Doe
console.log(person.age); // Output: 25