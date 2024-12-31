"use strict";
{
    // Getter AND Setter
    class BankAccount {
        constructor(name, account, _balance) {
            this.name = name;
            this.account = account;
            this._balance = _balance;
        }
        set addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        get getBalance() {
            return this._balance;
        }
    }
    const userOne = new BankAccount("bok", "current", 50);
    console.log(userOne);
    userOne.addDeposit = 70;
    const userAmount = userOne.getBalance;
    console.log(userOne);
    console.log(userAmount);
    // scope end
}
