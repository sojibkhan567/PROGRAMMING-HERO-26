// declare object
const person = {
    name: "John",
    age: 30,
    isStudent: true,
};

////console.log(person.age); // Accessing object property using dot notation


// get & set object property
// console.log(person.name); 
// person.name = "Jane";
// console.log(person.name); 


// keys, values, nested object, delete object property
const student = {
    name: "Alice",
    age: 20,
    address: {
        street: "123 Main St",
        city: "New York",
    },
    hobbies: ["reading", "painting", "coding"],
};

delete student.age; // Delete a property from the object
delete student["address"]; // Delete a nested property from the object

const keys = Object.keys(student); // Get all keys of the object
const values = Object.values(student); // Get all values of the object

////console.log("Keys:", keys);
////console.log("Values:", values);


//? Nested object
const college = {
    name: "ABC College",
    location: "Cityville",
    people: {
        principal: {
            name: "Dr. Smith",
            age: 50,
        },
        teachers: [
            { name: "Mr. Johnson", subject: "Math" },
            { name: "Ms. Davis", subject: "Science" },
        ],
    },
};
// console.log(Object.entries(college)); // Get key-value pairs of the object
// console.log("Principal Name:", college.people.principal.name); // Accessing nested object property
// console.log("First Teacher's Subject:", college.people.teachers[0].subject); // Accessing nested array property




/** ======= Looping Through Objects =========*/
for (const key in college) {
    //console.log(college[key]);
    for (const nestedKey in college[key]) {
        console.log(nestedKey, ":", college[key][nestedKey]);
    }
}
