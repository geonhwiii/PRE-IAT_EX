// 간단히 객체 생성

function getObj() {
  const name = 'crong';
  
  const getName = () => name;
  const setName = newName => name = newName;
  const printName = () => console.log(name);
  
  return { getName, setName }
}

let obj = new getObj();
console.log(obj)
console.log(obj.getName());