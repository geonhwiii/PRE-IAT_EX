// Map & WeakMap

// Array  -> Set, WeakSet
// Object -> Map, WeakMap

let wm = new WeakMap();
let myFunc = function () {};

wm.set(myFunc, 0);
console.log(wm) // WeakMap { <items unknown> }

let count = 0;
for(let i = 0; i < 10; i++) {
  count = wm.get(myFunc);
  count++;
  wm.set(myFunc, count);
}
console.log(wm.get(myFunc)); // 10

myFunc = null;
console.log(wm.get(myFunc)); // undefined
console.log(wm.has(myFunc)); // false