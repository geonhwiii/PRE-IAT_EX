function print() {
  const ul = document.querySelector('ul');
  const list = document.querySelectorAll('li');

  let list_arr = Array.from(list);
  let containtE_arr = list_arr.filter(li => (li.innerText.includes('e')));
  ul.innerHTML = containtE_arr.map(li => `
    <li>${li.textContent}</li>
    `)
}

print();

// 질문하기