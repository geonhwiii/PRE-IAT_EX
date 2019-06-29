// WeakSet : 참조를 가지고 있는 객체만 저장이 가능
let arr = [1,2,3,4];
let ws = new WeakSet();
// ws.add(arr);
// ws.add(111);   --> error
// ws.add("111"); --> error
// ws.add(null);  --> error
// ws.add(function() {})
// console.log(ws);

let arr2 = [5,6,7,8];
let obj = {arr, arr2}
ws.add(arr);
ws.add(arr2);
ws.add(obj);
arr = null;
console.log(ws)
console.log(ws.has(arr), ws.has(arr2))
// ws를 출력해보면 arr가 살아있는 것처럼 보이지만, has메소드로 찾아보면 없다.