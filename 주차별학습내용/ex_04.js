/* 3주차 화 - JavaScript Algorithm */

// 1. select
function select(arr, obj) {
  let res = {};
  arr.forEach((item) => obj[item] && (res[item] = obj[item]))
  return res;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }

// 2. transformEmployeeData
function transformEmployeeData(array) {
  let obj = {};
  let res = [];
  array.forEach(item => {
    for(const a of item) {
      obj[a[0]] = a[1] 
    }
    res.push(obj);
    obj = {};
  })
  return res;
}

var arr = [
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

// 3. Math.random()을 이용해, 특정 범위의 랜덤한 정수 리턴
function randomRange(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
