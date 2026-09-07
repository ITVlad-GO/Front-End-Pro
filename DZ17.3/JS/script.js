class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); 

account1.deposit(500);
account1.deposit(500);
account1.deposit(500);

account1.withdraw(2000);

console.log(account1.getBalance()); 

account1.withdraw(200);

console.log(account1.getBalance()); 