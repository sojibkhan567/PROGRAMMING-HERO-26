// Inheritance in TypeScript
class User {
  private _name: string;
  private _age: number;
  protected _email: string;

  constructor(name: string, age: number, email: string) {
    this._name = name;
    this._age = age;
    this._email = email;
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

// child class
class Student extends User {
  private _studentId: string;

  constructor(name: string, age: number, email: string, studentId: string) {
    super(name, age, email);
    this._studentId = studentId;
  }

  // getter for studentId
  get studentId(): string {
    return this._studentId;
  }
}   

// child class
class Teacher extends User {
  private _subject: string;

    constructor(name: string, age: number, email: string, subject: string) {
    super(name, age, email);
    this._subject = subject;
  }

  // getter for subject
  get subject(): string {
    return this._subject;
  }

  // setter for subject
    set subject(value: string) {
        this._subject = value;
    }
}

const student = new Student("Alice", 20, "alice@example.com", "S12345");
const teacher = new Teacher("Bob", 35, "bob@example.com", "Math");
console.log(student);
console.log(teacher); 

// Using setters to update the values
teacher.subject = "Physics";
console.log(teacher.subject);
