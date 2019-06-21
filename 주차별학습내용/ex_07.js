
/*
var fns = [];
for (var i=0; i<3; i++) {
  fns[i] = function() {
    console.log('My value:' + i);
  }
}
for (var j=0; j<3; j++) {
  fns[j]();
}
*/

var foo = function(j) {
  console.log('My value:' + j);
}
var fns = [];
for (var i=0; i<3; i++) {
  fns[i] = foo(i);
}
console.log(fns)

/*
// My value: 0
// My value: 1
// My value: 2
// ...를 기대했지만, 

// My value: 3
// My value: 3
// My value: 3
// ...이 출력됩니다.

var foo = function(j) {
  console.log('My value:' + j);
}

var fns = [];
for (var i=0; i<3; i++) {
  fns[i] = foo(i);
}

// IIFE 를 적용해서 풀어보겠습니다

var fns = [];
for (var i=0; i<3; i++) {
  fns[i] = (function(j) {
    console.log('My value:' + j);
  })(i);
}


*/