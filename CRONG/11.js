/**
 * # 로또번호 생성기
 * 1. 유일한 값을 추출하는 과정에서 Set을 사용한다.
 * 2. getRandomNumber 함수에 변수를 전달하는 과정에서 destructing을 사용한다.  
*/ 

const SETTING = {
  name: 'LUCKY LOTTO!',
  count: 6,
  maxNumber: 45
};
const set = new Set();

function getRandomNumber(maxNumber) {
  // 랜덤한 유일한 숫자를 추출
  let arr = Array(maxNumber).fill().map((_, i) => i + 1);
  let randomIndex = Math.floor(Math.random() * maxNumber);
  return set.add(arr[randomIndex])
}
function makeLotto({count, maxNumber}) {
  for(let i = 0; i < count; i++) {
    getRandomNumber(maxNumber)
    set.size !== i + 1 && i--
  }
  console.log(set);
}
makeLotto(SETTING) // Set { 15, 43, 23, 30, 24, 44 }