"use strict";
{
    // private -public - protacted
    class BankAccount {
        constructor(name, account, _balance) {
            this.name = name;
            this.account = account;
            this._balance = _balance;
        }
        addDeposite(amount) {
            return (this._balance = this._balance + amount);
        }
        getBalance() {
            return this._balance;
        }
    }
    const userOne = new BankAccount("bok", "current", 50);
    console.log(userOne);
    userOne.addDeposite(50);
    const userAmount = userOne.getBalance();
    console.log(userOne);
    console.log(userAmount);
    // scope end
}
