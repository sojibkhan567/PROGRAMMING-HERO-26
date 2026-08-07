/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/
const applyDiscount = (prices, discountRate = 0) => {
    let priceAfterDiscount = prices.map((element, index) => {
        const discountedPrice = element - (element * discountRate) / 100;
        return discountedPrice;
    });
    return priceAfterDiscount;
};
let productPrices = [500, 1000, 250, 400, 700];
//console.log(applyDiscount(productPrices, 10));

/*
  Problem 2: Passing Students Filter
  getPassingStudents(students, threshold) — return only the students
  whose marks are greater than or equal to the given threshold.

  Input:
    students = [
      { name: "Rafi", marks: 75 },
      { name: "Karim", marks: 40 },
      { name: "Utsho", marks: 60 },
    ]
    threshold = 60

  Output:
    [
      { name: "Rafi", marks: 75 },
      { name: "Utsho", marks: 60 },
    ]
*/
const getPassingStudents = (students, threshold) => {
    let filteredStudent = students.filter((student) => {
        // if (student.marks >= threshold) {
        //     return true;
        // } else {
        //     return false;
        // }

        return student.marks >= threshold; //its return true/false
    });
    return filteredStudent;
};
let students = [
    { name: "Rafi", marks: 75 },
    { name: "Karim", marks: 40 },
    { name: "Utsho", marks: 60 },
    { name: "Akash", marks: 59 },
];
//console.log(getPassingStudents(students, 60));

/*
  Problem 1: User Lookup by ID
  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/
const findUserById = (users, id) => {
    // let expectedUser = users.find((user) => {
    //     if (user.id === id) {
    //       return true;
    //     }
    // });

    let expectedUser = users.find((user) => user.id === id);

    // if (expectedUser === undefined) {
    //     return "User not found";
    // }

    if (!expectedUser) return "User not found";

    return expectedUser;
};
let users = [
    { id: 1, name: "Rafi" },
    { id: 2, name: "Karim" },
];
// console.log(findUserById(users, 2));
// console.log(findUserById(users, 1));
// console.log(findUserById(users, -1));

/*
  Problem 2: Shopping Cart Total (reduce)
  getCartTotal(cart) — sum price * qty across every item in the cart
  using reduce().

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Notebook", price: 50, qty: 2 },
    ]

  Output:
    160   (20*3 + 50*2)
*/
const getCartTotal = (carts) => {
    let sumOfProduct = carts.reduce((accumulator, cart) => {
        return accumulator + cart.price * cart.qty; // 1st:0+(20*3)=60 -> 2nd:60+(50*2)=160
    }, 0);
    return sumOfProduct;
};

let carts = [
    { name: "Pen", price: 20, qty: 3 },
    { name: "Notebook", price: 50, qty: 2 },
];
//// console.log(getCartTotal(carts));

/*
  Problem: Filtered Cart Total (Chaining filter -> map -> reduce)
  getExpensiveItemsTotal(cart, minPrice) — from the cart, keep only
  items priced at or above minPrice, then calculate the total cost
  (price * qty) of just those items — all in ONE chained expression.

  Input:
    cart = [
      { name: "Pen", price: 20, qty: 3 },
      { name: "Headphone", price: 800, qty: 1 },
      { name: "Notebook", price: 50, qty: 2 },
      { name: "Watch", price: 1500, qty: 1 },
    ]
    minPrice = 500

  Output:
    2300   (800*1 + 1500*1)

  Build it live, one step at a time (uncomment one block, log, then move on):
    1. filter alone        -> just the expensive items
    2. filter + map        -> price*qty for each expensive item
    3. filter + map + reduce -> single total number
*/
const getExpensiveItemsTotal = (carts, minPrice) => {
    // let total = 0;
    // for (const product of carts) {
    //     if (product.price >= minPrice) {
    //         total += product.price;
    //     }
    // }
    // return total;

    //using method chaning

    // let filteredProducts = carts.filter((product) => product.price >= minPrice);
    // const modifyProducts = filteredProducts.map((product) => product.price * product.qty);
    // let total = modifyProducts.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    // return total;

    return total = carts
        .filter((product) => product.price >= minPrice)
        .map((product) => product.price * product.qty)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const cartItems = [
    { name: "Pen", price: 20, qty: 3 },
    { name: "Headphone", price: 800, qty: 1 },
    { name: "Notebook", price: 50, qty: 2 },
    { name: "Watch", price: 1500, qty: 4 },
];
//console.log(getExpensiveItemsTotal(cartItems, 500));



/*
Problem: Assignment Life(Closures)

Real - life scenario: On Programming Hero, every student gets 3 LIVES.Each time you submit an assignment LATE for 60 marks, you lose 1 life.
  When lives hit 0, you can't submit late assignment for 60 marks. You
  want ONE function that can create a fresh, independent life - counter.

  createLifeCounter() — returns a function. Every time you call that
  returned function (on a late submission), it decreases a PRIVATE
  lives count by 1 and returns the remaining lives.There is NO global
  variable storing lives — it lives only inside the closure.

    Input:
const rahimLives = createLifeCounter();
rahimLives(); // late submission
rahimLives(); // late submission

Output: 2 1
*/
// function outer() {
//     let name = "Sojib";

//     function inner() {
//         console.log(name);
//     }

//     return inner;
// }

// const myFunction = outer();
// myFunction();

const createLifeCounter = () => {
    let lives = 3;

    return () => {
        if (lives > 0) {
            lives--;
        }
        return lives;
    }
}
// const rahimLifeUpdate = createLifeCounter();
// const karimLifeUpdate = createLifeCounter();
// const johnLifeUpdate = createLifeCounter();
// const akashLifeUpdate = createLifeCounter();

// console.log("rahim LifeUpdate ->", rahimLifeUpdate());
// console.log("rahim LifeUpdate ->", rahimLifeUpdate());
// console.log("rahim LifeUpdate ->", rahimLifeUpdate());
// console.log("rahim LifeUpdate ->", rahimLifeUpdate());
// console.log("rahim LifeUpdate ->", rahimLifeUpdate());
// console.log("rahim LifeUpdate ->", rahimLifeUpdate());

// console.log("karim LifeUpdate ->", karimLifeUpdate());
// console.log("karim LifeUpdate ->", karimLifeUpdate());

// console.log("john LifeUpdate ->", johnLifeUpdate());

// console.log("akashLifeUpdate ->", akashLifeUpdate());

// console.log("karim LifeUpdate ->", karimLifeUpdate());



/*
  Problem 1: Custom Sort — Descending Numbers
  sortDescending(nums) — sort an array of numbers from largest to
  smallest, using a comparator callback passed to .sort(). Return a
  NEW array — don't mutate the original nums array.

  Input:
    [1, 10, 2, 25, 3]

  Output:
    [25, 10, 3, 2, 1]
*/
const sortDescending = (nums) => {
    const duplicateNums = [...nums];
    const sortedNums = duplicateNums.sort((a, b) => {
        //return a - b; //ascending
        return b - a; //decending
    });
    return sortedNums;
}
const numbers = [1, 10, 2, 25, 3]
// console.log("numbers before func call : -> ",numbers);
// console.log(sortDescending(numbers));
// console.log("numbers after func call : -> ",numbers);




/*
  Problem 2: Fix the Mutation Bug — Discount Preview
  previewDiscount(cart) — should return a NEW array showing what each
  cart item's price WOULD be after a 10% discount, WITHOUT changing
  the original cart. The buggy version below accidentally mutates the
  original objects because objects/arrays are passed by REFERENCE — writing to item.price inside map() edits the
  very same object the original cart array points to.

  Input:
    cart = [
      { name: "Pen", price: 100 },
      { name: "Bag", price: 500 },
    ]

  Output (new array; original cart price fields unchanged):
    [
      { name: "Pen", price: 90 },
      { name: "Bag", price: 450 },
    ]
*/
const previewDiscount = (cart) => {
    // console.log(cart);
    const updatedCart = cart.map((item) => {
        // console.log(item, "item");
        return {
            // name: item.name,
            // color: item.color,
            ...item,
            price: item.price - (item.price * 0.1)
        }
    })
    // console.log(updatedCart, "updatedCart");
    return updatedCart
};

let cart = [
    { name: "Pen", color: 'red', sku: "123", price: 100 },
    { name: "Bag", color: 'white', sku: "34234", price: 500 },
];
// console.log("Before:", cart);
// console.log("Preview:", previewDiscount(cart));
// console.log("After:", cart); 

console.log(3 + 2 + "7")
