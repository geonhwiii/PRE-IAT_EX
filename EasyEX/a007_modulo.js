/**
 * Write a function called "modulo".
 * Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.
 * It should behave as described in the canonical documentation (MDN) for the JavaScript 
 * remainder operator:
 * 
 * Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
 * 0 % ANYNUMBER = 0.
 * ANYNUMBER % 0 = NaN.
 * If either operand is NaN, then the result is NaN.
 * Modulo always returns the sign of the first number.
 */

function modulo(num1, num2) {
  if(num2 === 0 || isNaN(num1) || isNaN(num2)) return NaN;
  return (
    num1 < 0 ? -modulo(-num1, num2) :
    num2 < 0 ? modulo(num1, -num2) :
    num1 < num2 ? num1 : modulo(num1 - num2, num2)
  );
}

console.log(modulo(25, NaN)); // NaN
console.log(modulo(25, 4)); // 1
console.log(modulo(-4, 2)); // 0