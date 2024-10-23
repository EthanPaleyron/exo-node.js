// Exercice 1 ✅
const user = { name: "John", age: 56, country: "France" };
function processUserData({ name, age }, transformAge) {
  if (transformAge) {
    age = transformAge(age);
  }
  return { name, age };
}
console.log(processUserData(user));

// Exercice 2 ✅
const calculateBirthYear = (age) => new Date().getFullYear() - age;
console.log(processUserData(user, calculateBirthYear));

// Exercice 3 ✅
const users = [
  { name: "Alice", age: 25, country: "France" },
  { name: "Bob", age: 30, country: "Canada", city: "Toronto" },
  { name: "Charlie", country: "USA" },
  { name: "Diana", age: 28, country: "UK" },
  { name: "Ethan", age: 35, country: "Australia", job: "Developer" },
];

function mergeUserData(...users) {
  const object = users.reduce((previous, current) => {
    return { ...previous, ...current };
  });
  return object;
}
console.log(mergeUserData(users[0], users[1], users[2], users[3], users[4]));
//console.log(mergeUserData(user, processUserData(user, calculateBirthYear)));

// Exercice 4 ✅
function isValidUser(user, props = ["name", "age"]) {
  let flag = true;
  for (const [i, prop] of props.entries()) {
    if (user[prop] == undefined) {
      flag = false;
      break;
    }
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}

console.log(
  mergeUserData(user, processUserData(user, calculateBirthYear)),
  isValidUser(mergeUserData(user, processUserData(user, calculateBirthYear)))
);
