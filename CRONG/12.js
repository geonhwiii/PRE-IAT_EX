const data = [
  {
    name: 'coffee-bin',
    order: true,
    items: ['americano', 'milk', 'green-tea']
  },
  {
    name: 'starbucks',
    order: false
  },
  {
    name: 'compose-coffe',
    order: true,
    items: ['americano', 'latte', 'ulgray']
  },
]
function fn(tags, name, items) {
  if(typeof items === 'undefined') {
    items = "<span style='color: red'>주문 가능한 상품이 없습니다.</span>"
  }
  return (tags[0] + name + tags[1] + items + tags[2]);
}
data.forEach(item => {
  const templete = fn`<h2>welcome, ${item.name} !!</h2><h4>주문가능항목</h4><div>${item.items}</div>
  `
  document.querySelector('#message').innerHTML += templete;
})
// Tagged Templete Literals


// 이런걸 왜할까...?!
// json으로 응답받고, js Object로 변환한 후 데이터 조작을 하여 DOM에 추가.
// 데이터 + HTML문자열 결합이 필요