function sumar(n1,n2){
    var resultado=n1+n2;
    var res=document.getElementById("resultado")
    alert(resultado)
}

function restar(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1-n2;
    alert("el valor de la resta es "+resultado)
}
function multiplicar(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1*n2;
    alert("el valor de la multiplicacion es "+resultado)
}
function dividir(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1/n2;
    alert("el valor de la division es "+resultado)
}
function potencia(){
    let n1=parseInt(document.getElementById("n1").value)
    resultado=n1*n1;
    alert("el valor de la potencia es "+resultado)
}
// el evento click llama a la funcion mostrar
function mostrar(){
    
//captura los datos de los inputs
let n1=parseInt(document.getElementById("n1").value)
let n2=parseInt(document.getElementById("n2").value)
let opc=parseInt(document.getElementById("opc").value)
switch(opc){
    case 1:
        sumar(n1,n2)
        break;
    case 2:
        restar()
        break;
    case 3:
        multiplicar()
        break; 
    case 4:
        dividir()
        break;
    case 5:
        potencia()
        break;             
    default: 
        alert("la opcion no es valida")   
    }
}