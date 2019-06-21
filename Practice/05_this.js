// this
const product = {
  name: '에어팟',
  price: 219000,
  getVAT() {
    return `세금 : ${this.price / 10}원`;
  }
}
const valueOfProduct = product.getVAT();
console.log(valueOfProduct); 

const calVAT = product.getVAT;
const VAT = calVAT();
console.log(VAT); // NAN원

const counter1 = {
  count: 0,
  addAfter1Sec() {
    setTimeout(function() {
      this.count++;
      console.log(this.count);
    }, 1000)
  }
};

counter1.addAfter1Sec(); // NaN
// this를 메소드 안에서 정의했지만 메소드를 다른 변수에 저장하고 그 변수를 통해 호출하면 this는 전역 객체를 가리킨다.
// 호출하는 시점에 . 연산자와 함께 객체가 주어져야 메소드 안의 this가 호출의 주체인 객체가 된다.

const counter2 = {
  count: 0,
  addAfter2Sec() {
      setTimeout(() => {
          this.count += 1;
          console.log(this.count);
      }, 2000)
  }
};
counter2.addAfter2Sec(); // 1