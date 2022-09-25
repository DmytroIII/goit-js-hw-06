


const insertInput = document.querySelector("#name-input");
const insertOutput= document.querySelector("#name-output");

insertInput.addEventListener("input", (event) => {
  insertOutput.textContent = "Anonymous";
  if (event.currentTarget.value !== "") {
    insertOutput.textContent = event.currentTarget.value;
  }
});