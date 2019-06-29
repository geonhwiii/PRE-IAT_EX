// arrow function - this context

const myObj = {
  register() {
    document.querySelector('input').addEventListener('click', () => {
      return this.alertData();
    })
  },
  alertData() {
    alert("클릭!!!")
  }
}
myObj.register();