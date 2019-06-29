// destructing

let newObj = {
  name: 'crong',
  age: 25,
  address: 'KOREA'
}

// const { name, age } =  newObj;
// console.log(`name: ${name}, age: ${age}`)

const { name: iName, age: iAge } =  newObj;
console.log(`iName: ${iName}, iAge: ${iAge}`)