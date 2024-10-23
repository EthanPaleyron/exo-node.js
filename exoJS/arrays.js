// Exercice 1 ✅
const ns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(ns.map((n) => n * n).filter((n) => n >= 20));

// Exercice 2 ✅
const prices = [65, 257, 1.0, 86, -50];
console.log(prices.reduce((a, b) => a + b * 0.8));

// Exercice 3 ✅
const students = [
  { nom: "Alice", note: 18 },
  { nom: "Bob", note: 5 }, // Note basse
  { nom: "Charlie", note: 12 },
  { nom: "Diana", note: 20 },
  { nom: "Ethan", note: 2 }, // Très basse note
  { nom: "Fanny", note: 9 }, // Note plutôt basse
];

console.log(students.find((s) => s.note >= 15));

// Exercice 4 ✅
const ages = [25, 12, 17, 10, 30, 16, 45, 13, 19, 21];
console.log(ages.some((a) => a < 18));
console.log(ages.every((a) => a > 10));

// Exercice 5 ✅
const mots = ["pomme", "banane", "cerise", "kiwi", "mangue"];
console.log(mots.sort().reverse());
