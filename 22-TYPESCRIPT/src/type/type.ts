// generics in typescript
interface Response<T> {
  status: number;
  message: string;
  data: T;
}

const transactionResponse: Response<string> = {
  status: 200,
  message: "Transaction successful",
  data: "Transaction ID: 12345" //data type is string
};

// check boolean type
const booleanResponse: Response<boolean> = {
  status: 200,
  message: "Boolean response",
  data: true //data type is boolean
};

// check length of data
function getLength<item>(array: item[]): number {
  return array.length;
}
getLength<number>([1, 2, 3, 4]); // returns 4
getLength<string>(["a", "b", "c"]); // returns 3    



// Advanced generics in typescript
function useState<T>(initialValue: T): [T, (newValue: T) => void] {
    let value = initialValue;
    function setValue(newValue: T) {
        value = newValue;
    }
    return [value, setValue];
}

useState<string>("Hello World"); // initialValue type is string



// enums in typescript
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
console.log(Color.Red)

enum Roles {   
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
console.log(Roles.Admin)


// assertion in typescript
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;

let data: unknown;
interface User {
  name: string;
  age: number;
}
const userData = data as User; // Type assertion to treat data as User
userData.name; // Accessing User properties after type assertion 
//(data as User).name; // Type assertion to access User properties