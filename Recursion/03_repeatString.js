const repeatString = (str, n) => {
  if (n <= 0) return '';
  return n === 1 ? str : str + repeatString(str, n - 1);
}

console.log(repeatString('code', 4))
console.log(repeatString('banana', 3))
console.log(repeatString('code', 0))

const rs = (str, n) => str.repeat(n);
console.log(rs('code', 3));
