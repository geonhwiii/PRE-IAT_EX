// 1. Object
let address = '서울'
let members = {};

let addFamily = function(age, name, role) {
  this.members[role] = { age, name };
}
let getHeadCount = function() {
  return Object.keys(this.members).length;
}

const family = { address, members, addFamily, getHeadCount }

family.addFamily(22, '짱구', '본인')
family.addFamily(3, '짱아', '동생');
family.addFamily(5, '흰둥이', '강아지');
console.log('가족 수 : ' + family.getHeadCount())
console.log(members)

// 가족 수 : 3
// { '본인': { age: 22, name: '짱구' },
//   '동생': { age: 3, name: '짱아' },
//   '강아지': { age: 5, name: '흰둥이' } }