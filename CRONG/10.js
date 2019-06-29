// WeakMap 활용

const wm = new WeakMap();

function Area(height, width) {
  wm.set(this, { height, width });
}

Area.prototype.getArea = function () {
  const { height, width } = wm.get(this) 
  return height * width;
}

let myArea = new Area(10, 20);
console.log(myArea.getArea()); // 200
console.log(myArea.height);    // undefined