// Ex1 : 계산기 프로그램
window.addEventListener('load', function() {
  var txtX = document.getElementById('txt-x')
  var txtY = document.getElementById('txt-y')
  var btnAdd = document.getElementById('btn-add')
  var txtSum = document.getElementById('txt-sum')

  btnAdd.onclick = function () {
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);
    txtSum.value = x + y;
  }
});

// Ex2 : 엘리먼트 선택방법 개선하기
window.addEventListener('load', function() {
  var section2 = document.getElementById('section2');

  var txtX = section2.getElementsByClassName('txt-x')[0];
  var txtY = section2.getElementsByClassName('txt-y')[0];
  var btnAdd = section2.getElementsByClassName('btn-add')[0];
  var txtSum = section2.getElementsByClassName('txt-sum')[0];

  /*
  var inputs = section2.getElementsByTagName('input');
  var txtX = inputs[0];
  var txtY = inputs[1];
  var btnAdd = inputs[2];
  var txtSum = inputs[3];
  */
  btnAdd.onclick = function () {
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);
    txtSum.value = x + y;
  }
})

// Ex3 : Selectors API Level
window.addEventListener('load', function() {
  var section3 = document.querySelector('#section3');

  var txtX = section3.querySelector("input[name='x']");
  var txtY = section3.querySelector('.txt-y');
  var btnAdd = section3.querySelector('.btn-add');
  var txtSum = section3.querySelector('.txt-sum');

  btnAdd.onclick = function () {
    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);
    txtSum.value = x + y;
  }
})

// Ex4 : childNode를 이용한 노드 선택
window.addEventListener('load', function() {
  var section4 = document.querySelector('#section4');
  var box = section4.querySelector('.box');
  // childNodes는 공백, text, 주석도 가져옴.
  // children은 태그형태만 가져옴
  var input1 = box.children[0];
  var input2 = box.children[1];
  input1.value = "hello";
  input2.value = "okay";
})

// Ex5 : 엘리먼트 노드의 속성 && 변경
window.addEventListener('load', function() {
  var section = document.querySelector('#section5');
  var srcInput = section.querySelector('.src-input');
  var imgSelect = section.querySelector('.img-select');
  var changeButton = section.querySelector('.change-button');
  var img = section.querySelector('.img');
  var colorInput = section.querySelector('.color-input')
  
  changeButton.onclick = function () {
    img.src = "images/" + srcInput.value;
    srcInput.value = "";
    // img.src = "images/" + imgSelect.value;

    img.style.borderColor = colorInput.value;
  }
})

// Ex6 : 노드 조작: 메뉴 추가(createTextNode, Element)
window.addEventListener('load', function() {
  var section = document.querySelector("#section6");
  var titleInput = section.querySelector('.title-input');
  var menuListUl = section.querySelector('.menu-list');
  var addButton = section.querySelector(".add-button");
  var delButton = section.querySelector(".del-button");

  addButton.onclick = function () {
    var title = titleInput.value;
    var html = `<a href="">${title}</a>`
    var li = document.createElement('li');
    li.innerHTML = html;
    // menuListUl.appendChild(li);
    menuListUl.append(li);

    // var title = titleInput.value;
    // var txtNode = document.createTextNode(title);

    // var aNode = document.createElement('a');
    // aNode.href = "";
    // aNode.appendChild(txtNode);
    // var liNode = document.createElement('li');
    
    // liNode.appendChild(aNode);
    // menuListUl.appendChild(liNode);
  };
  delButton.onclick = function () {
    // var txtNode = menuListUl.childNodes[0];

    var liNode = menuListUl.children[0];
    // menuListUl.removeChild(liNode);
    liNode.remove();
  }
})

//Ex7 : 노드 복제와 템플릿 태그
window.addEventListener("load", function(){
  var notices = [
      {id:5, title:"퐈이야~~~", regDate:"2019-01-26", writerId:"newlec", hit:0},
      {id:6, title:"나 좀 복제해줘~", regDate:"2019-01-26", writerId:"newlec", hit:17}
  ];

  var section = document.querySelector("#section7");
  
  var noticeList = section.querySelector(".notice-list"); 
  var tbodyNode = noticeList.querySelector("tbody");
  var cloneButton = section.querySelector(".clone-button");
  var templateButton = section.querySelector(".template-button");

  cloneButton.onclick = function(){
    var trNode = noticeList.querySelector("tbody tr");
    var cloneNode = trNode.cloneNode(true);
    var tds = cloneNode.querySelectorAll("td");
    tds[0].innerText = notices[0].id;
    tds[1].innerHTML = `<a href="">${notices[0].title}</a>`;
    tds[2].innerText = notices[0].regDate;
    tds[3].innerText = notices[0].writerId;
    tds[4].innerText = notices[0].hit;

    tbodyNode.append(cloneNode);
  };

  templateButton.onclick = function(){
    var template = section.querySelector("template");
    var cloneNode = document.importNode(template.content, true)
    var tds = cloneNode.querySelectorAll("td");
    tds[0].innerText = notices[0].id;
    // tds[1].innerHTML = `<a href="">${notices[0].title}</a>`;
    var aNode = tds[1].children[0];
    aNode.href = notices[0].id;
    aNode.innerText = notices[0].title

    tds[2].innerText = notices[0].regDate;
    tds[3].innerText = notices[0].writerId;
    tds[4].innerText = notices[0].hit;
    
    tbodyNode.append(cloneNode);
  };

});

// Ex8 - 노드 삽입과 바꾸기
window.addEventListener("load", function() {
  var section = document.querySelector("#section8");
  var noticeList = section.querySelector(".notice-list")
  var tbodyNode = noticeList.querySelector("tbody");
  var upButton = section.querySelector(".up-button");
  var downButton = section.querySelector(".down-button")

  var currentNode = tbodyNode.firstElementChild;

  downButton.addEventListener("click", function() {
    var nextNode = currentNode.nextElementSibling;
    if(!nextNode) {
      alert('더 이상 이동할 수 없습니다.');
      return;
    }
    // tbodyNode.removeChild(nextNode);
    // tbodyNode.insertBefore(nextNode, currentNode);
    currentNode.insertAdjacentElement('beforebegin', nextNode)
  })

  upButton.addEventListener("click", function() {
    var prevNode = currentNode.previousElementSibling;
    if(!prevNode) {
      alert('더 이상 이동할 수 없습니다.');
      return;
    }
    // tbodyNode.removeChild(currentNode);
    // tbodyNode.insertBefore(currentNode, prevNode);
    currentNode.insertAdjacentElement('afterend', prevNode)
  })
})

//Ex9-다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기
window.addEventListener("load", function(){

  var section = document.querySelector("#section9");
  
  var noticeList =section.querySelector(".notice-list"); 
  var tbody = noticeList.querySelector("tbody");
  var allCheckbox = section.querySelector(".overall-checkbox");
  var delButton = section.querySelector(".del-button");
  var swapButton = section.querySelector(".swap-button");

  allCheckbox.onchange = function(){
    var inputs = tbody.querySelectorAll("input[type='checkbox']");
    inputs.forEach(item => item.checked = allCheckbox.checked)
  };

  delButton.onclick = function(){
    var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
    inputs.forEach(input => input.parentElement.parentElement.remove());
  };

  swapButton.onclick = function(){
    var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");       
    if(inputs.length !== 2) {
      alert('엘리먼트는 2개이어만 합니다.');
      return;
    }
    var trs = [];
    for(var i = 0; i < inputs.length; i++) {
      trs.push(inputs[i].parentElement.parentElement);
    }

    var cloneNode = trs[0].cloneNode(true);
    trs[1].replaceWith(cloneNode);
    trs[0].replaceWith(trs[1]);
  };

});

//Ex10-클릭한 컬럼을 기준으로 레코드 정렬하기 #1
window.addEventListener("load", function(){

  var notices = [
      {"id":1, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
      {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
      {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
      {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
  ];

  var section = document.querySelector("#section10");
  
  var noticeList =section.querySelector(".notice-list");
  var titldTd = section.querySelector(".title");
  var tbodyNode = noticeList.querySelector("tbody");

  var bindData = function() {
      var template = section.querySelector("template");

      for(var i=0; i<notices.length; i++){
          var cloneNode = document.importNode(template.content, true);
          var tds = cloneNode.querySelectorAll("td");
          tds[0].textContent = notices[i].id;            

          var aNode = tds[1].children[0];
          aNode.href=notices[i].id;
          aNode.textContent = notices[i].title;

          tds[2].textContent = notices[i].regDate;
          tds[3].textContent = notices[i].writerId;
          tds[4].textContent = notices[i].hit;

          tbodyNode.appendChild(cloneNode);
      }
  };

  bindData();

  var titleSorted = false;

  titldTd.onclick = function(){
    tbodyNode.innerHTML = "";

    if(!titleSorted) {
      notices.sort(function(a, b) {
        titleSorted = true;
        if(a.title < b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        } else {
          return 0;
        }
      })
     } else {
      notices.reverse();
    }
    bindData();
  };
});

// Ex 11 : 선택된 이미지 보여주기:event target
window.addEventListener('load', function() {
  var section = document.querySelector("#section11");

  var imgs = section.querySelectorAll(".img");
  var currentImg = section.querySelector('.current-img');

  for(let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function(e) {
      currentImg.src = e.target.src
    };
  }

})

//연습문제 1 : 선택된 레코드 삭제하기:event target
window.addEventListener("load", function(){
  var section = document.querySelector("#section11-1");
  var delButton = section.querySelectorAll(".del-button")
  for(let i = 0; i < delButton.length; i++) {
    delButton[i].onclick = function(e) {
      var tr = e.target.parentElement.parentElement;
      tr.remove();
    }
  }
    
}); 

//Ex 12 : 이벤트 버블링을 이용해 사용자 이벤트 처리하기:event Bubbling
window.addEventListener("load", function(){

  var section = document.querySelector("#section12");
  var imgList = section.querySelector(".img-list"); 
  var currentImg = section.querySelector(".current-img");
  
  imgList.onclick = function(e){
      if(e.target.nodeName !== 'IMG') return;
      currentImg.src = e.target.src;
  };
}); 

// Ex3-이벤트 버블링 멈추기
window.addEventListener("load", function(){

  var section = document.querySelector("#section13");
  
  var imgList = section.querySelector(".img-list"); 
  var addButton = section.querySelector(".add-button");
  var currentImg = section.querySelector(".current-img");
  
  imgList.onclick = function(e){
      if(e.target.nodeName !== 'IMG') return;
      currentImg.src = e.target.src;
  };

  addButton.onclick = function(e){
    e.stopPropagation();
    var img = document.createElement("img");
    img.src = "images/img1.jpg";
    currentImg.insertAdjacentElement("afterend", img);
  };

}); 
