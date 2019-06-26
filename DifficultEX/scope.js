
console.log('1')
var fns = [];
for (var i=0; i<3; i++) {
  fns[i] = function() {
    console.log('#1. My value:' + i);
  }
}
for (var j=0; j<3; j++) {
  fns[j]();
}

// #1. My value:3
// #1. My value:3
// #1. My value:3
// ...이 출력됩니다.

console.log('2')
var foo = function(j) {
  console.log('#2. My value:' + j);
}
var fns = [];
for (var i=0; i<3; i++) {
  fns[i] = foo(i);
}
// #2. My value:0
// #2. My value:1
// #2. My value:2


console.log('3')
// IIFE 를 적용해서 풀어보겠습니다

var fns = [];
for (var i=0; i<3; i++) {
  fns[i] = (function(j) {
    console.log('#3. My value:' + j);
  })(i);
}
