function* fibo() {
  let [prev, curr] = [1, 1];
  while(true) {
    [prev, curr] = [prev, prev + curr];
    yield curr;
  }
}
for(let n of fibo()) {
  console.log(n);
  if(n >= 10) {
    break;
  }
}
