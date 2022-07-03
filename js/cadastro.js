var button = document.getElementsByClassName("showPass");
var password = document.getElementById("password");
var passwordconfirm = document.getElementById("passwordconfirm");
var loginbutton = document.getElementById("loginbutton");

var labels = document.getElementsByClassName("placeholder");
var inputs = document.getElementsByClassName("input");

console.log(loginbutton);


//animações dos placeholders persoalizados
function placeholder1() { 

    labels[0].classList.add(`focus`); //usuarios
  
 }
 
 function placeholderout1() {
    if (inputs[0].value.length == "") { 
        labels[0].classList.remove(`focus`);}
 }


function placeholder2() {

    labels[1].classList.add(`focus`); //emails
  
 }
 
 function placeholderout2() {
    if (inputs[1].value.length == "") {
        labels[1].classList.remove(`focus`);
}
}

function placeholder3() {

    labels[2].classList.add(`focus`);  //senhas
    button[0].classList.add(`active`);
  
 }
 
 function placeholderout3() {
    if (inputs[2].value.length == "") {
    labels[2].classList.remove(`focus`);
    button[0].classList.remove(`active`);}
}


function placeholder4() {

    labels[3].classList.add(`focus`); //confirme a senha
    button[1].classList.add(`active`);
 
  
 }
 
 function placeholderout4() {
    if (inputs[3].value.length == "") {
    labels[3].classList.remove(`focus`);
    button[1].classList.remove(`active`);}

}


// animação para mostrar a senha
function pass(){
   let typeofpass = password.type == "password"

   if (typeofpass == true){
     showpass()
   }else {
    hidepass()
   }
}

function showpass() {
    password.type = 'text';
    button[0].innerHTML = `<i class="fa-regular fa-eye-slash"></i>`
}

function hidepass() { 
    password.type = 'password';
    button[0].innerHTML = `<i class="fa-regular fa-eye">`
}


// animação para mostrar a senha na confirmação
function passconfirm(){
    let typeofpassconfirm = passwordconfirm.type == "password"
 
    if (typeofpassconfirm == true){
      showpassconfirm()
    }else {
     hidepassconfirm()
    }
 }

 function showpassconfirm() {  //mostrar
     passwordconfirm.type = 'text';
     button[1].innerHTML = `<i class="fa-regular fa-eye-slash"></i>`
 }
 
 function hidepassconfirm() {   //esconder
     passwordconfirm.type = 'password';
     button[1].innerHTML = `<i class="fa-regular fa-eye">`
 }

 

 //animação do botão de enviar
function togglebuttoncad(){
    const usuariocad = document.getElementById('username').value;
    const emailcad = document.getElementById('email').value;
    const senhacad = document.getElementById('password').value;
    const senhaconfirm = document.getElementById('passwordconfirm').value;
    var senhalog
 
    if (usuariocad && emailcad && senhacad && senhaconfirm) {
        loginbutton.disabled = false
        return
    }
    loginbutton.disabled = true
}

var senhacad = document.getElementById('password').value;
var senhaconfirm = document.getElementById('passwordconfirm').value;

if (senhacad === senhaconfirm) {
    senhalog = senhacad
    console.log (senhalog)
}

