


const inputText = document.querySelector('#validation-input');
const lengthElement = Number(inputText.dataset.length);

inputText.addEventListener('blur', checkLength)

function checkLength() { 
  
    if (inputText.value.length === lengthElement) {
        inputText.classList.remove('invalid');
        return inputText.classList.add('valid');
    } else { 
        inputText.classList.remove('valid');
        return inputText.classList.add('invalid');
    }

}