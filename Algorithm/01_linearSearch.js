/**
 * # linearSearch (선형 검색)
 * `[1,2,3,4,5,6,7,8,9,10]`에서 `item`을 앞에서부터 순차적으로 검색하는 알고리즘입니다.
 * 주어진 함수는 `arr`(배열)과 `item`을 받습니다.\
 * 만약 해당 `item`이 없다면 `null`을 반환합니다.
*/

function linearSearch(arr, item) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 4));  // 3
console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 11)); // null
console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 7));  // 6
console.log(linearSearch(['apple', 'banana', 'carrot', ''], 'banana'));  // 1