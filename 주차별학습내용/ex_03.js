/* 2주차 목 - Javscript Basic */

// 1. removeFromFront
function removeFromFront(arr) {
  return arr.shift() ? arr : [];
}
var output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
var output2 = removeFromFront([]);
console.log(output2); // --> []

// 2. getElementsLessThan100AtProperty
function getElementsLessThan100AtProperty(obj, key) {
  return !obj[key] ? [] : obj[key].filter((val) => val < 100)
}
var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]

// 3. getLengthOfLongestElement
function getLengthOfLongestElement(arr) {
  return arr.length === 0 ? [] : arr.map((val) => val.length).reduce((acc, cur) => acc > cur ? acc : cur)
}
var output = getLengthOfLongestElement(['one', 'two', 'three', 'four']);
console.log(output); // --> 5