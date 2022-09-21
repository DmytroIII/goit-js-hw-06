


const InsertInput = document.querySelector('#name-input');
const InsertOutput = document.querySelector('#name-output');

InsertInput.addEventListener('input', onInputChange);

function onInputChange(event) { 
   console.log(event.currentTarget.value);
   InsertOutput.textContent = event.currentTarget.value;
}
