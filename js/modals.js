var imgButton = document.getElementById('selectImage');

var imgModal = document.getElementById('imgModal');
var send = document.getElementById('send');
var inputFile = document.getElementById('chooseImage');
var showImage = document.getElementById('showImage');
var img = document.getElementById('selectedImage')

                     /* Img Modal*/

imgButton.addEventListener('click', OpenImgModal);  /* Abrir Modal */

function OpenImgModal(){
    imgModal.classList.remove('hidden');


}

imgExit.addEventListener('click', CloseImgModal); /* Fechar Modal */
send.addEventListener('click', CloseImgModal);

function CloseImgModal(){
    imgModal.classList.add('hidden');
}

inputFile.addEventListener('change', function(e) { /* Aparecer imagem no box */
    var inputTarget = e.target;
    var file = inputTarget.files[0];

    if(file){
        var reader = new FileReader();

        reader.addEventListener('load', function(e){    
        var readerTarget = e.target;

        showImage.style.backgroundImage = 'url(' + readerTarget.result; + ')';
        var width =

        img.src = readerTarget.result;
        });

        reader.readAsDataURL(file);
        var width = img.width;
        var height = img.height; 
    }

    img.addEventListener('load', function(e){  
        var width = img.width;
        var height = img.height; 
            
        if (width == height) {
            showImage.style.width = '250px'
            showImage.style.height = '250px'

        }
        if (width > height) {
            showImage.style.width = '400px'
            showImage.style.height = '250px'
        }
        if (width < height){
            showImage.style.width = '250px'
            showImage.style.height = '300px'
        }
    });
})



                /* Text Modal */

var textButton = document.getElementById('selectText');
var textModal = document.getElementById('textModal');

textButton.addEventListener('click', OpentextModal);  /* Abrir Modal */

function OpentextModal(){
    textModal.classList.remove('hidden');
    


}

textExit.addEventListener('click', ClosetextModal); /* Fechar Modal */
textSend.addEventListener('click', ClosetextModal);

function ClosetextModal(){
    textModal.classList.add('hidden');
}   


                    /* Comprar Modals  */
                 /* Descrição do produto */
var buyButton = document.getElementById('buyButton');  /* Abrir o Modal da descrição */
var description = document.getElementById('description');

buyButton.addEventListener('click', Opendescmodal);

function Opendescmodal(){
    description.classList.remove('hidden')
}

var descExit = document.getElementById('descExit');  /* Fechar o Modal da descrição*/
var descBack = document.getElementById('descBack');

descExit.addEventListener('click', Closedescmodal);
descBack.addEventListener('click', Closedescmodal);

function Closedescmodal(){
    description.classList.add('hidden')
}
/*  */

var ProdName = document.getElementById('prod-name').innerText;  /* Inserir o Nome do produto no Modal*/
var DescProd = document.getElementById('desc-prod'); 

DescProd.innerText = ProdName;

/*  */
var colorInputs = document.querySelectorAll("input[name='colortype']");  /* Inserir a cor selecionada no modal */ 
var descColor = document.getElementById('descColor');

buyButton.addEventListener('click', findColor); /*Quando clicar no botão comprar ele vai chamar uma função que vai guardar a cor selecionada  */
   
function findColor(){ 
    let selected = document.querySelector("input[name='colortype']:checked");  /* A var "selected"" pega o input selecionada*/
    let selectedLabel = selected.parentNode.children[1]  /* A var "label" acessa o pai do input selecionado e por ele seleciona a label correspondente a cor  */
    descColor.style = selectedLabel.style.cssText  /* Coloca a variável que recebe a cor no span :) */
    descColor.title = selected.id
}
/*  */

var sizeInputs = document.querySelectorAll("input[name='sizetype']");  /* Inserir o tamanho selecionado no modal */ 
var descSize = document.getElementById('descSize');

buyButton.addEventListener('click', findSize);

function findSize(){ 
    let selected = document.querySelector("input[name='sizetype']:checked");  
    let selectedLabel = selected.parentNode.children[1]  
    descSize.innerText = selectedLabel.innerHTML
    descSize.title = selected.id
}

/*  */
var persoInputs = document.querySelectorAll("input[name='selectPerso']");  /* Inserir o tipo de personalização no modal */
var descPerso = document.getElementById("descPerso");

buyButton.addEventListener('click', findPerso);

function findPerso(){ 
    let selected = document.querySelector("input[name='selectPerso']:checked");  
    
    if (selected == null){
        descPerso.innerText ="Não selecionado"}
    if (selected.id == 'selectImg'){
        descPerso.innerText ="Imagem"}
    if (selected.id == 'selectText'){
        descPerso.innerText ="Texto"}
    
}

/*  */ 

var price = document.getElementById('price').innerText;  /* Inserir o preço do produto no modal */
var descPrice = document.getElementById('descPrice');

descPrice.innerText = price

/*  */







var payForm = document.getElementById('payForm');  /* Escolha a forma de pagamento */

payFormButton.addEventListener('click', Openbuymodal); /* Abrir modal*/
payFormButton.addEventListener('click', Closedescmodal) 

function Openbuymodal(){
    payForm.classList.remove('hidden')
}

payBack.addEventListener('click', Closebuymodal); /* Fechar modal */
payExit.addEventListener('click', Closebuymodal);
payBack.addEventListener('click', Opendescmodal);

function Closebuymodal(){
    payForm.classList.add('hidden')
}

pixFormButton.addEventListener('click', Openpixmodal); /* Botão de avançar */

function Openpixmodal(){
    pixForm.classList.remove('hidden')
    payForm.classList.add('hidden')

}

var pixForm = document.getElementById('pixForm');  /* Forma de pagamento de pix  */

pixExit.addEventListener('click', Closepixmodal); /* Botão de fechar */

function Closepixmodal(){   
    pixForm.classList.add('hidden')
}

payFormBack.addEventListener('click', Backpixmodal); /* Botão de voltar */

function Backpixmodal(){   
    pixForm.classList.add('hidden')
    payForm.classList.remove('hidden')
}

var pixBuy = document.getElementById('pixBuy');
pixBuy.addEventListener('click', Openbuyendmodal); /* Botão de comprar */

function Openbuyendmodal(){
    buyEnd.classList.remove('hidden')
    pixForm.classList.add('hidden')

    var endBoxLoading = document.getElementById('endBoxLoading')  /* Animação de loading*/
    endBoxLoading.style.visibility = 'visible'
    endBoxLoading.style.opacity = '1'

    var timeout = setTimeout(function(){
    endBoxLoading.style.visibility = 'hidden'
    endBoxLoading.style.opacity = '0'
    }, 1800)

}



var buyEnd = document.getElementById('buyEnd'); /* Conclusão de compra */

endExit.addEventListener('click', Closeformmodal); /* Botão de exit */

function Closeformmodal(){
    buyEnd.classList.add('hidden');

}








