/**
 * Write a function called "transformEmployeeData" that transforms some employee data 
 * from one format to another.
*/

function transformEmployeeData(array) {
  let res = [];
  let obj = {};
  array.forEach(item => {
    for(const a of item) {
      obj[a[0]] = a[1];
    }
    res.push(obj);
    obj = {};
  })
  return res;
}

let arr = [
  [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager']
  ]
];

console.log(transformEmployeeData(arr));
// [
//   { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
//   { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
// ];