// # Recursion
// id 를 이용하여, 해당 객체를 찾아내는 문제가 나올 수 있습니다.
let data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4, children: [
      { id: 6 },
      { id: 7, children: [
          { id: 8 },
          { id: 9 }
      ]}
  ]},
  { id: 5 }
]

function recur(data, id) {
  for(const prop in data) {
    if (data.id === id) {
      return data;
    } else {
      if (typeof data[prop] === 'object') {
        const obj = recur(data[prop], id);
        if(obj) return obj;
      }
    }
  }
}

function findObjectById(n) {
  return recur(data, n)
}


console.log(findObjectById(4)) // { id: 4, children: [ { id: 6 }, { id: 7, children: [Array] } ] }
console.log(findObjectById(6)) // { id: 6 }
console.log(findObjectById(7)) // { id: 7, children: [{id:8}, {id:9}] }

// 1. data를 돌면서 id가 n인 obj를 찾는다.
// 2. (해당 id가 없으면?) children을 가지고 있다면 children에서 다시 1을 반복한다.
// 3. 해당 id를 발견하면 해당 obj를 리턴한다.