
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }

const buttonAction = document.querySelector('.change-color');
const bodyColor = document.querySelector("body");
const spanText = document.querySelector(".color");

buttonAction.addEventListener('click', () => { 
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanText.textContent = getRandomHexColor();
}
)

