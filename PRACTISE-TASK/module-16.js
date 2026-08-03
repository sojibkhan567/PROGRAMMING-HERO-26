//? Problem-01: Scope Detective
// "var" হলে Return করবে "Can redeclare, can reassign"
// "let" হলে Return করবে "Cannot redeclare, can reassign"
// "const" হলে Return করবে "Cannot redeclare, cannot reassign"

const describeDeclaration = (String) => {
    if (String === "let") {
        return "Cannot redeclare, can reassign";
    } else if (String === "var") {
        return "Can redeclare, can reassign";
    } else if (String === "const") {
        return "Cannot redeclare, cannot reassign";
    } else {
        return "Invalid";
    }
}
// console.log(describeDeclaration("let"));
// console.log(describeDeclaration("var"));
// console.log(describeDeclaration("int"));


//? PROBLEM-02: Movie Ticket Booking
const bookTicket = (movie, seats = 1, pricePerSeat = 300) => {
    if(typeof movie !== "string" || seats < 0 || pricePerSeat < 0) {
        return "Invalid";
    }
    let total = seats * pricePerSeat;
    return `${movie}: ${seats} seat(s), Total ৳${total}`;
}
console.log(bookTicket("Dune"));
console.log(bookTicket(123, 2))