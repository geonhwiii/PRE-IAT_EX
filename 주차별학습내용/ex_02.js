/* 2주차 목 - Javascript Basic */

// 1. printObject
function printObject(obj) {
  let result = "";
  for(let k in obj) {
    result += `${k}: ${obj[k]}\n`;
  }
  return result;
}
var obj = { name: 'Steve', age: 13, sex: 'Male' };
var output = printObject(obj);
console.log(output);
/*
"name: Steve
age: 13
sex: Male
"
*/

// 2. getElementOfArrayProperty
function getElementOfArrayProperty(obj, key, index) {
  return (!Array.isArray(obj[key])) ? undefined : obj[key][index]
}
var obj = {
  key: ['Jamil', 'Albrey']
 };
var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'