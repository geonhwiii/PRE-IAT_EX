const log = console.log;
// fibo : fibo(15) = 610

// 1.
const fibo1 = n => n < 2 ? n : fibo1(n - 1) + fibo1(n - 2);
log(fibo1(15))

// 2.
const fibo2 = n => {
  if(n < 2) return n;
  if(!(n in fibo2)) {
    fibo2[n] = fibo2(n - 1) + fibo2(n - 2);
  } 
  return fibo2[n]
}
log(fibo2(15))

// 3.
const memorize = f => {
  let caching = {};
  return function(x) {
    caching[x] === undefined && (caching[x] = f(x));
    return caching[x]
  }
}

const fibo3 = memorize(n => n < 2 ? n : fibo3(n - 1) + fibo3(n - 2));
log(fibo3(15))