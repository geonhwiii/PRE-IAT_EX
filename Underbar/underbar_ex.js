const log = console.log;

_  = {};

_.identity = val => val;
// log(_.identity(5))

_.first = (arr, n) => !n ? arr[0] : arr.slice(0, n)
// log(_.first([1,2,3,4], 2))

_.last = (arr, n) => !n ? arr[0] : arr.reverse().slice(0, n).reverse();
// log(_.last([1,2,3,4], 2));

_.each = (collection, iterator) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection)
    }
  } else {
    for (let i in collection) {
      iterator(collection[i], i, collection)
    }
  }
}
// _.each({a: 1,b: 2,c: 3,d: 4}, (item, k) => log(`${k} : ${item}`))

_.indexOf = (array, target) => {
  let res = -1;
  _.each(array, (item, i) => item === target && res === -1 && (res = i));
  return res;
}
// log(_.indexOf([1,2,3], 2)) 

_.filter = (collection, test) => {
  let res = [];
  _.each(collection, item => test(item) && (res = [...res, item]))
  return res;
}
// log(_.filter([1,2,3,4], a => !(a % 2)));

_.reject = (collection, test) => {
  let res = [];
  _.each(collection, item => !test(item) && (res = [...res, item]))
  return res;
}
// log(_.reject([1,2,3,4], a => !(a % 2)));

_.uniq = array => {
  let res = [];
  _.each(array, item => !res.includes(item) && (res = [...res, item]));
  return res;
}
// log(_.uniq([1,2,3,4,4,4,4]));

_.map = (collection, iterator) => {
  let res = [];
  _.each(collection, item => {
    res = [...res, iterator(item)]
  })
  return res;
}
// log(_.map([1,2,3,4], a => a * 2));

_.pluck = (collection, key) => _.map(collection, val => val[key]);
let stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// log(_.pluck(stooges, 'name'))

_.reduce = (collection, iterator, accumulator) => {
  const iter = collection[Symbol.iterator]();
  !accumulator && (accumulator = iter.next().value);
  for(const a of iter) {
    accumulator = iterator(accumulator, a);
  }
  return accumulator;
}
// log(_.reduce([1,2,3,4], (acc, cur) => acc + cur))

_.contains = (collection, target) => {
  let isContain = false;
  _.each(collection, item => item === target && isContain === false && (isContain = true))
  return isContain;
}
// log(_.contains(['a','b','c','d'], 'c')); // true
// log(_.contains([1,2,3,4], 5)); // false

_.every = (collection, iterator) => {
  let isTrue = true;
  _.each(collection, item => (iterator ? !iterator(item) : !item) && (isTrue = false));
  return isTrue;
}
// log(_.every([false, true, false])); // false

_.some = (collection, iterator) => {
  let isTrue = false;
  _.each(collection, item => (!iterator ? item : iterator(item)) && (isTrue = true));
  return isTrue;
}
// log(_.some([false, true, false])); // true

_.extend = (obj, ...rest) => Object.assign(obj, ...rest);
// var obj1 = {key1: "something"};
// _.extend(obj1,
//    { key2: "something new", key3: "something else new" }, 
//    { bla: "even more stuff" });
// log(obj1)

_.defaults = (obj, ...rest) => {
  _.each(rest, prop => {
    for(let key in prop) {
      !obj.hasOwnProperty(key) && (obj[key] = prop[key]);
    }
  });
  return obj;
}

_.once = func => {
  let isCalled = false;
  let result;
  return (...rest) => {
    if(isCalled === false) {
      isCalled = true;
      result = func(...rest)
    }
    return result;
  }
}

_.delay = (func, wait, ...rest) => {
  setTimeout(func, wait, ...rest);
}

_.flatten = (nestedArray, result) => {
  result = result || [];
  _.each(nestedArray, item => {
    !Array.isArray(item) ? result.push(item) : _.flatten(item, result);
  })
  return result;
}

_.shuffle = array => {
  let res = [];
  let copiedArr = array.slice(); 
  while(copiedArr.length) {
    let randomIndex = Math.floor(Math.random() * copiedArr.length);
    res.push(copiedArr.splice(randomIndex, 1)[0])
  }
  return res;
}
// log(_.shuffle([1,2,3,4]))