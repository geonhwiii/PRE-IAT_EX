// ES5 Class
/*
function Health(name) {
  this.name = name;
}

Health.prototype.showHealth = function() {
  console.log(this.name + '님, 안녕하세요...!');
}

const h = new Health('다현');
h.showHealth();
*/

// ES6 Class
class Health {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  showHealth() {
    console.log(this.name + '님, 안녕하세요...!');
  }
}
const myHealth = new Health('나연');
myHealth.showHealth();