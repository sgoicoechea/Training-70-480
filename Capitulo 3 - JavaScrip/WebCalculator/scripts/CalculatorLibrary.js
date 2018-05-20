/*Pruebas del módulo 1*/
/*
function prueba(){
    a = 'Hola';
    var b = 'soy';
    var c = 'Sara';
    alert(a + ', ' + b + ' ' + (c || 'Alguien'));
}
prueba();
alert(a);
*/
var txtInput;
var txtResult;
function initialize() {

        for (var i=0;i<10;i++){
        var btn = document.getElementById('btn'+ i);    
        btn.addEventListener('click', numberClick, false);
    }
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById("txtResult");
    document.getElementById("btnPlus").addEventListener("click",plusClick,false);
    document.getElementById("btnMinus").addEventListener("click",minusClick,false);
    document.getElementById("btnClearEntry").addEventListener("click",clearEntry,false);
    document.getElementById("btnClear").addEventListener("click",clear,false);
    clear();
}

function numberClick() {
    txtInput.value = txtInput.value =='0' ? 
    this.innerText : txtInput.value + this.innerText;
}
function plusClick(){
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
    clearEntry();
}
function minusClick(){
    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
    clearEntry();
}
function clearEntry(){
    txtInput.value = "0";
}
function clear(){
    txtInput.value = "0";
    txtResult.value = "0";
}