/**
 * Write a function called "computeProductOfAllElements".
 * Given an array of numbers, "computeProductOfAllElements" returns 
 * the products of all the elements in the given array.
 * If given array is empty, it should return 0.
 */

function computeProductOfAllElements(arr) {
  return arr.length === 0 ? 0 : arr.reduce((acc, cur) => acc * cur, 1)
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60