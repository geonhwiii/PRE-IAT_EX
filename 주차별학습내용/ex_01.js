/* 1주차 목 - Javascript Basic */

/** 1. convertScoreToGradeWithPlusAndMinus
 * (100 - 90) --> 'A' / (89 - 80) --> 'B' / (79 - 70) --> 'C' / (69 - 60) --> 'D' / (60 - 0) --> 'F'
 * 'INVALID SCORE' / + / - / not F-
 */  
function convertScoreToGradeWithPlusAndMinus(score) {
  if(score > 100 || score < 0) return 'INVALID SCORE';
  if(score === 100) return 'A+';
  if(score < 60) return 'F';
  let grade = '';
  score >= 90 ? grade = 'A' :
   score >= 80 ? grade = 'B' :
    score >= 70 ? grade = 'C' : grade = 'D';
  if(score % 10 >= 0 && score % 10 <= 2) grade += '-';
  if(score % 10 >= 8 && score % 10 <= 9) grade += '+';
  return grade;
}
let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'

// 2. addProperty
function addProperty(obj, prop) {
  return obj[prop] = true
}

let myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true

addProperty(myObj, 'myProperty2');
console.log(myObj.myProperty2); // --> true

let yourObj = {};
addProperty(yourObj, 'yourProperty');
console.log(yourObj.yourProperty); // --> true



