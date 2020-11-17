
var produto = new Object()
    produto.model = new Array();
    produto.serial = new Array();
    produto.manufacturer = new Array();
    produto.description = new Array();
    produto.stock = new Array();
    produto.minAmount = new Array();


function registerProduct(){

    produto.model.push(document.querySelector('input#model')).value=''
    produto.serial.push(document.querySelector('input#serial'))
    produto.manufacturer.push(document.querySelector('input#manufacturar'))
    produto.description.push(document.querySelector('input#description'))
    produto.stock.push(document.querySelector('input#stock'))
    produto.minAmount.push(document.querySelector('input#minAmount'))
    
    document.querySelector('div#resp').style.display = "block";

}


