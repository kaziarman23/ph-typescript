{
  // Getter AND Setter

  class BankAccount {
    constructor(
      public name: string,
      public account: string,
      private _balance: number
    ) {}

    set addDeposit(amount: number) {
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
