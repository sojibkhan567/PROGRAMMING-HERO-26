class BkashAccount {
    public phone:string;
    private balance:number;
    private pin:number;
    protected history:unknown = [];

    constructor(phone:string, balance:number, pin:number) {
        this.phone = phone;
        this.balance = balance;
        this.pin = pin;
    }

    getBalance(pin:number): number | string {
        if(this.pin === pin) {
            return this.balance;
        }
        return `Pin is wrong!`;
    }

}

const rafi = new BkashAccount("Rafi", 456, 5656); //
console.log(rafi.getBalance(5656));