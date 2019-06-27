/**
 * Write a function called "sumDigits".
 * Given a number, "sumDigits" returns the sum of all its digits.
 */
function sumDigits(num) {
  let numArr = num.toString().split('');
  if(num >= 0) {
    return numArr.reduce((acc, cur) => acc + +cur, 0);
  } else {
    return numArr.slice(2).reduce((acc, cur) => acc + +cur, -numArr[1])
  }
}


var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4