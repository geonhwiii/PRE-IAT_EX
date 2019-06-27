function convertObjectToArray(obj) {
  return Object.keys(obj).map(k => [k, obj[k]])
}

var obj = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};
console.log(convertObjectToArray(obj));
// [['name', 'Holly'], ['age', 35], ['role', 'producer']];
  