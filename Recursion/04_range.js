const range = (start = 0, end = 0) => {
  let arr = [];
  start > end && ([start, end] = [end, start]);
  arr.push(start);
  return start === end ? arr : [...arr, ...range(start + 1, end)]
}

console.log(range(2, 5))