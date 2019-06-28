window.addEventListener('load', () => {
  const numArray = Array(45).fill().map((_, i) => i + 1);
  const shuffle = [];
  while(numArray.length > 0) {
    let moved = numArray.splice(Math.floor(Math.random() * numArray.length), 1);
    shuffle.push(...moved);
  }

  let bonus = shuffle[shuffle.length - 1];
  let selectedNumber = shuffle.slice(0, 6).sort((a, b) => a - b);
  
  const resultBox = document.querySelector("#result-box");
  const bonusBox = document.querySelector('.bonus-box')
  
  function paintBall(num, box) {
    let ball = document.createElement("div");
    ball.textContent = num;
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '100%';
    ball.style.width = '60px';
    ball.style.height = '60px';
    ball.style.textAlign = 'center';
    ball.style.fontSize = '50px';
    ball.style.padding = '30px';
    ball.style.marginRight = '5px';
    let bgColor;
    num <= 10 ? (bgColor = 'red') :
    num <= 20 ? (bgColor = 'orange') :
    num <= 30 ? (bgColor = 'yellow') :
    num <= 40 ? (bgColor = 'green') :
    num <= 50 ? (bgColor = 'skyblue') : (bgColor = 'lihgtgray')
    ball.style.backgroundColor = bgColor;
    box.append(ball);
  }

  for(let i = 0; i < selectedNumber.length; i++) {
    setTimeout(() => {
      paintBall(selectedNumber[i], resultBox);
    }, 500 + 500 * i)
  }
  setTimeout(() => {
    bonusBox.insertAdjacentHTML('beforebegin', '<div style="font-size: 40px; padding: 20px 0; font-weight: 600; color: red;">BONUS</div>')
    paintBall(bonus, bonusBox);
  }, 3500)
  



})