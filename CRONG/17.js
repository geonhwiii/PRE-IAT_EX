//setPrototypeOf

// parent
const healthObj = {
  showHealth() {
    console.log(`오늘 운동시간 : ${this.healthTime}`);
  },
  setHealth(newTime) {
    this.healthTime = newTime;
  }
}

// childObj
const healthChildObj = {
  getAge() {
    return this.age;
  }
}

Object.setPrototypeOf(healthChildObj, healthObj)

const childObj = Object.setPrototypeOf({
  age: 22
}, healthChildObj);
childObj.setHealth("11:55");
childObj.showHealth();