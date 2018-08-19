const view1 = document.querySelector('#view1')
const view2 = document.querySelector('#view2')
const appButtons = view2.querySelectorAll('button')
const resultNode = document.querySelector('#result')

const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const mul = document.querySelector('#mul');
const div = document.querySelector('#div');

let nr1 = 0;
let nr2 = 0;
let operation;

add.addEventListener('click', () => {
  operation = '+';
  goStep2()
});

sub.addEventListener('click', () => {
  operation = '-';
  goStep2()
});

mul.addEventListener('click', () => {
  operation = '*';
  goStep2()
});

div.addEventListener('click', () => {
  operation = '/';
  goStep2()
});

const goStep2 = () => {
  view1.style.display = 'none';
  view2.style.display = 'block';
  setBtns1()
}

const setBtns1 = () => {
  for (let btn of appButtons) {
    btn.addEventListener('click', setClick1)
  }
}

const removeBtns1 = () => {
  for (let btn of appButtons) {
    btn.removeEventListener('click', setClick1)
  }
  for (let btn of appButtons) {
    btn.addEventListener('click', setClick2)
  }
}

const setClick1 = function() {
  const value = this.innerText;
  nr1 = parseInt(value)
  removeBtns1()
}

const setClick2 = function() {
  const value = this.innerText;
  nr2 = parseInt(value)
  count();
}

const count = () => {
  let ans = 0;
  if (operation === '+') ans = nr1 + nr2
  if (operation === '-') ans = nr1 - nr2
  if (operation === '/') ans = nr1 / nr2
  if (operation === '*') ans = nr1 * nr2
  view2.style.display = 'none';
  resultNode.innerText = ans
}