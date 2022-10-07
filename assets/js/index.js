const password = document.getElementById("password"), confirm_password = document.getElementById("confirm_password");
const buttom = document.getElementById("submit");


function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("As senhas não coincidem");
  } else {
    confirm_password.setCustomValidity('');
  }
}
buttom.addEventListener('click',(e)=>{
    alert('cadastrado')
})

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


