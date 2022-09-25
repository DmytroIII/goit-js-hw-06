



const loginForm = document.querySelector('.login-form').reset();
loginForm.addEventListener('submit', OnSubmit)
function OnSubmit(evt) {
    evt.preventDefault()
    console.dir(evt.currentTarget)
     const {email, password} = evt.currentTarget.elements;
     const data = {
        email: email.value,
        password: password.value
     }
    
    if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Вы заполнили не все поля формы!");
  }
   HTMLFormElement.reset();
     console.log(data);
}