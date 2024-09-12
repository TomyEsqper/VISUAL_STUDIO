function sumar(n1,n2){
    var resultado=n1+n2;
    var res=document.getElementById("resultado")
    {
        respuesta.style.display="block";
        res.innerHTML = 'Total: '+ resultado;
        res.style.color="black";
    }
   

 }


function restar(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1-n2;
    var res=document.getElementById("resultado")
    {
        respuesta.style.display="block";
        res.innerHTML = 'Total: '+ resultado;
        res.style.color="black";
    }
    
}
function multiplicar(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1*n2;
    var res=document.getElementById("resultado")
    {
        respuesta.style.display="block";
        res.innerHTML = 'Total: '+ resultado;
        res.style.color="black";
    }
}
function dividir(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1/n2;
    var res=document.getElementById("resultado")
    if(n1>0 && n2>0){
        respuesta.style.display="block";
        res.innerHTML = 'Total: '+ resultado;
        res.style.color="black";
    }else if (n1<=0 && n2<=0){
        respuesta.style.display="block";
        res.innerHTML = "verifique sus datos";
        res.style.color="red";
    }
}
function potencia() {
    // Obtener los valores de los campos de entrada
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value); // Asegúrate de tener un campo para n2
    
    // Calcular la potencia
    let resultado = Math.pow(n1, n2);
    
    // Obtener el elemento donde mostrar el resultado
    let res = document.getElementById("resultado");
    
    // Mostrar el resultado
    res.style.display = "block";
    res.innerHTML = 'Total: ' + resultado;
    res.style.color = "black";
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