/* 3주차 목 - JavaScript Koans */

// 1. Math.random()을 이용해, 일정한 길이의 임의의 글자 리턴
function randomString(n) {
  let res = [];
  let str = "가나다라마바사아자차카타파하".split('');
  for(let i = 0; i < n; i++) {
    res.push(str[Math.floor(Math.random() * str.length)]);
  }
  return res.join('');
}
console.log(randomString(10));