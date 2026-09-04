// Problem 2 — Store Inventory Status
const getStockStatus = (stock:number): string => {
    if (stock === 0) {
        return "Out of Stock";
    } else if (stock <= 5) {
        return "Almost Sold Out";
    } else if (stock <= 20) {
        return "Available";
    } 
    return "In Stock";
}

console.log(getStockStatus(0));
console.log(getStockStatus(3));
console.log(getStockStatus(12));
console.log(getStockStatus(50));
console.log(getStockStatus(5));
console.log(getStockStatus(6));
console.log(getStockStatus(21));