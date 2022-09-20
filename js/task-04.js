
let counterValue = 0;

const buttonDecrementEl = document.querySelector('#counter button[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('#counter button[data-action="increment"]');

const valueEl = document.querySelector('#value');

buttonDecrementEl.addEventListener('click', () => {
   valueEl.textContent = counterValue -= 1
});

buttonIncrementEl.addEventListener('click', () => {
  valueEl.textContent = counterValue += 1
});
