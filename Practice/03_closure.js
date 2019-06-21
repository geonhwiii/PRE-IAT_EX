// closure

function Counter() {
  let count = 0;

  return {
    addCount() {
      count++;
      console.log('count : ' + count);
    },
    subCount() {
      count--;
      console.log('count : ' + count);
    },
    showCount() {
      console.log('count : ' + count);
    }
  }
}


const c = new Counter();
c.addCount();  // count : 1
c.addCount();  // count : 2
c.addCount();  // count : 3
c.subCount();  // count : 2
c.showCount(); // count : 2
