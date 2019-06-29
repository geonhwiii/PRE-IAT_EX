// Object assgin으로 객체 생성

const healthObj = {
  showHealth() {
    console.log("오늘 운동시간 : " + this.healthTime)
  }
}

const myHealth = Object.assign(Object.create(healthObj), {
  name: 'crong',
  healthTime: '11:20'
});
myHealth.showHealth();

// 2.
const previousObj = {name: 'crong', lastTime: "11:20"};
const myHealth2 = Object.assign({}, previousObj, {});
console.log(myHealth2 === previousObj)

// 오늘 운동시간 : 11:20
// false