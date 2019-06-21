// !5 = 1 * 2 * 3 * 4 * 5
const fact = n => n < 2 ? n : n * fact(n - 1);
console.log(fact(4))