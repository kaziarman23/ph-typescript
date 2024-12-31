{
  // private -public - protacted

  class BankAccount {
    constructor(
      public name: string,
      public account: string,
      private _balance: number
    ) {}

    addDeposite(amount: number) {
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
