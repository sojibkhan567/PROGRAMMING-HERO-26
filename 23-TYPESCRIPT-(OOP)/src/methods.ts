class TeaShop {
    shopName: string;
    soldItems: { name: string; price: number }[] = [];
    // create a constructor that takes a name parameter
    constructor(shopName: string) {
        this.shopName = shopName;
    }
    // create a method that adds an item to the soldItems array
    buy(name: string, price: number): void {
        this.soldItems.push({ name, price });
    }
    // create a method that returns the total sales of the tea shop
    getTotalSales(): number {
        return this.soldItems.reduce((total, item) => total + item.price, 0);
    }
    // create a method that returns the total number of items sold
    getTotalItemsSold(): number {
        return this.soldItems.length;
    }
}

// create a new instance of the TeaShop class
const shop1 = new TeaShop("Tea Time");
shop1.buy("Green Tea", 3.5);
shop1.buy("Black Tea", 4.0);
shop1.buy("Herbal Tea", 5.0);
console.log("Total Sales:", shop1.getTotalSales()); // 12.5
console.log("Total Items Sold:", shop1.getTotalItemsSold()); // 3
