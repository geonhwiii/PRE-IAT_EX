window.addEventListener("load", function () {
  var btnPrint = document.getElementById('btn-print');

  var add = (x, y) => x + y;

  btnPrint.onclick = function () {
    var x = prompt("숫자1", 0);
    var y = prompt("숫자2", 0);
    x = parseInt(x);
    y = parseInt(y);
    btnPrint.value = add(x, y);
  };
});