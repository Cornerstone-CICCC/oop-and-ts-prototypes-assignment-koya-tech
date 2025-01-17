function Account(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
}

Account.prototype.deposit = function (amount) {
    this.balance += amount;
};

Account.prototype.withdraw = function (amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    } else {
        console.log('Insufficient funds');
    }
};

function SavingsAccount(accountNumber, balance, interestRate) {
    Account.call(this, accountNumber, balance);
    this.interestRate = interestRate;
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

SavingsAccount.prototype.addInterest = function () {
    this.balance += this.balance * (this.interestRate / 100);
};

function CheckingAccount(accountNumber, balance) {
    Account.call(this, accountNumber, balance);
}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdrawUsingCheck = function (amount) {
    this.withdraw(amount);
};

let savings = new SavingsAccount('SA123', 1000, 5);
savings.deposit(500);
savings.addInterest();
savings.withdraw(200);
console.log(savings);

let checking = new CheckingAccount('CA123', 2000);
checking.deposit(1000);
checking.withdrawUsingCheck(500);
console.log(checking);