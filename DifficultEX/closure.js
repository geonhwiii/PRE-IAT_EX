// closure

function outerFn() {
  let outerVar = 'outer';
  console.log(outerVar);

  function innerFn() {
    let innerVar = 'inner';
    console.log(innerVar);
  }
  return innerFn;
}

let globalVar = 'global';

outerFn()() // outer inner
let innerFn = outerFn();  // outer
innerFn(); // inner

// closure module pattern
function countMaker() {
  let privateCounter = 0;
  return {
    increment() {
      privateCounter++;
    },
    decrement() {
      privateCounter--;
    },
    showCount() {
      return privateCounter;
    }
  }
}
let counter1 = countMaker();
let counter2 = countMaker();
counter1.increment();
counter1.increment();
console.log("private : " + counter1.showCount());
counter2.increment();
console.log("private : " + counter2.showCount());