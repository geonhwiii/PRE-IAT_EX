// prototype

// 1. 생성자 함수
function List() {
  this.list = {};
}

// 2. prototype에 put 메소드 추가
List.prototype.put = function(key, user) {
  this.list[key] = user;
}

// 3. prototype에 getData 메소드 추가
List.prototype.getUser = function(key) {
  return this.list[key];
}

// 4. productList 인스턴스 생성
const userList = new List();
userList.put('1', { name: '다현', age: 22 });
console.log(userList.getUser('1')); // { name: '다현', age: 22 }

// 5. List를 호출하여 this를 전달. DeleteList에 list가 추가됨.
function DeleteList() {
  List.call(this);
}

// 6. List의 prototype을 DeleteListdml prototype에 연결. (상속)
DeleteList.prototype = Object.create(List.prototype)
DeleteList.prototype.deleteUser = function() {
  this.list = {};
};
const deleteUserList = new DeleteList();
deleteUserList.put('2', { name: '소희', age: 27 });
console.log(deleteUserList.getUser('2'));
deleteUserList.deleteUser();
console.log(deleteUserList.getUser('2'));