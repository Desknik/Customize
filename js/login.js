var button = document.getElementsByClassName("showPass");
var password = document.getElementById("password");
var passwordconfirm = document.getElementById("passwordconfirm");
var loginbutton = document.getElementById("loginbutton");

var labels = document.getElementsByClassName("placeholder");
var inputs = document.getElementsByClassName("input");

console.log(loginbutton);


//animações dos placeholders persoalizados
function placeholder1() {  //emails

    labels[0].classList.add(`focus`);
  
 }
 
 function placeholderout1() {
    if (inputs[0].value.length == "") {
        labels[0].classList.remove(`focus`);}
 }


function placeholder2() {  //senhas

    labels[1].classList.add(`focus`);
    button[0].classList.add(`active`);
  
 }
 
 function placeholderout2() {
    if (inputs[1].value.length == "") {
        labels[1].classList.remove(`focus`);
        button[0].classList.remove(`active`);
}
}

// animação para mostrar/ esconder a senha
function pass(){
   let typeofpass = password.type == "password"

   if (typeofpass == true){
     showpass()
   }else {
    hidepass()
   }
}

function showpass() {   //mostrar
    password.type = 'text';
    button[0].innerHTML = `<i class="fa-regular fa-eye-slash"></i>`
}

function hidepass() {   //esconder
    password.type = 'password';
    button[0].innerHTML = `<i class="fa-regular fa-eye">`
}



 //animação do botão de enviar
function togglebutton() { 
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if (email && password) {
    loginbutton.disabled = false
    return
}
loginbutton.disabled = true
}
