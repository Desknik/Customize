var imagem = document.getElementById('atual');
var voltar = document.getElementById('voltar');
var proximo = document.getElementById('proximo');
var quant = document.querySelectorAll('.content .imagens');
var balls = document.querySelector('.balls');
var atual = 0
var imgAtual = document.getElementsByClassName("imgAtual")
var rolar = true

var mobileImg = document.getElementById('mobileAtual');

for (let i = 0; i < quant.length; i++) {
  var div = document.createElement('div');
  div.id = i
  balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.balls div')

for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', ()=>{
        atual = pos[i].id
        console.log(atual)
        rolar = false
        slide()
    })
  }

voltar.addEventListener('click', ()=>{
    atual--
    rolar = false
    slide()
})

proximo.addEventListener('click', ()=>{
    atual++
    rolar = false
    slide()
})

function slide(){
    if (atual >= quant.length){
    atual = 0
    }else if(atual < 0){
        atual = quant.length-1 
    }
    var tamanho = document.querySelector('.imagens img').width;
    var tamanhoMob = mobileImg.offsetWidth;

    document.querySelector('.imgAtual').classList.remove('imgAtual')
    document.getElementById(atual).classList.add('imgAtual')
    imagem.style.marginLeft = -tamanho*atual+'px'

    mobileImg.style.marginLeft = -tamanhoMob*atual+'px'
}

setInterval(() => {
   if (rolar){
    atual++
    slide()
   }else{
    rolar = true
   }
}, 4000);