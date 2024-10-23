// Exercice 1 ✅
function createPasswordValidator(regex) {
  return (password) => {
    if (regex.test(password)) {
      return true;
    } else {
      return false;
    }
  };
}

const passwordValidator = createPasswordValidator(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
);
console.log(passwordValidator("Password123")); // true
console.log(passwordValidator("password")); // false

// Exercice 2 ✅
const createBank = () => {
  let balance = 0;
  return {
    deposit: (amount) => {
      balance += amount;
    },
    withdraw: (amount) => {
      balance -= amount;
    },
    getBalance: () => {
      return balance;
    },
  };
};

class Bank {
  constructor() {
    this.count = 0;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    this.count++;

    return this;
  }

  withdraw(amount) {
    this.count++;
    if (this.balance >= amount) {
      this.balance -= amount;

      return this;
    } else {
      throw new Error("Insufficient funds");
    }
  }

  getBalance() {
    this.count++;
    return this.balance;
  }
}

const bankAccount = createBank();
bankAccount.deposit(100);
bankAccount.withdraw(50);
console.log(bankAccount.getBalance()); // 50
console.log(bankAccount.balance); // ReferenceError: balance is not defined

const bank = new Bank();
bank.deposit(100).withdraw(50).getBalance();

console.log(
  `Current bank balance : ${bank.getBalance()} || Total operation : ${
    this.count
  }`
);

// Exercice 3 ✅
function createTaskManager() {
  const tasks = { pending: [], completed: [] };
  return {
    addTask: (task) => {
      tasks.pending.push(task);
    },
    completeTask: (task) => {
      const i = tasks.pending.indexOf(task);
      if (i !== -1) {
        const t = tasks.pending.splice(i, 1);
        tasks.completed.push(...t);
      }
    },
    getTasks: () => {
      return tasks;
    },
  };
}

const taskManager = createTaskManager();
taskManager.addTask("Learn JavaScript");
taskManager.addTask("Create a project");
taskManager.completeTask("Learn JavaScript");
console.log(taskManager.getTasks()); // { pending: ["Create a project"], completed: ["Learn JavaScript"] }
