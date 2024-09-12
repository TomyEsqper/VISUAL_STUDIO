window.addEventListener("keydown",(e)=>{
    if(e.key=="+"){
        incremento(1)
    }
    else if(e.key=="-"){
        decremento(1)
    }
    else if(e.key=="r"){
        resetear(1)
    }
})
let contador1 = 0;
let contador2 = 0;
let cantidad1 = 0;
let cantidad2 = 0;
let totalItems = 0;
let totalAmount = 0;

function incremento(id) {
    if (id === 1) {
        contador1 += 10000;
        cantidad1++;
        document.getElementById('valor1').innerHTML = "$" + contador1.toLocaleString();
        document.getElementById('productos1').innerHTML = cantidad1.toLocaleString();
        totalAmount += 10000;
        totalItems++;
    } else if (id === 2) {
        contador2 += 10000;
        cantidad2++;
        document.getElementById('valor2').innerHTML = "$" + contador2.toLocaleString();
        document.getElementById('productos2').innerHTML = cantidad2.toLocaleString();
        totalAmount += 10000;
        totalItems++;
    }
    actualizarCarrito();
}

function decremento(id) {
    if (id === 1 && contador1 > 0 && cantidad1 > 0) {
        contador1 -= 10000;
        cantidad1--;
        document.getElementById('valor1').innerHTML = "$" + contador1.toLocaleString();
        document.getElementById('productos1').innerHTML = cantidad1.toLocaleString();
        totalAmount -= 10000;
        totalItems--;
    } else if (id === 2 && contador2 > 0 && cantidad2 > 0) {
        contador2 -= 10000;
        cantidad2--;
        document.getElementById('valor2').innerHTML = "$" + contador2.toLocaleString();
        document.getElementById('productos2').innerHTML = cantidad2.toLocaleString();
        totalAmount -= 10000;
        totalItems--;
    }
    actualizarCarrito();
}

function resetear(id) {
    if (id === 1) {
        totalAmount -= contador1;
        totalItems -= cantidad1;
        contador1 = 0;
        cantidad1 = 0;
        document.getElementById('valor1').innerHTML = "$" + contador1.toLocaleString();
        document.getElementById('productos1').innerHTML = cantidad1.toLocaleString();
    } else if (id === 2) {
        totalAmount -= contador2;
        totalItems -= cantidad2;
        contador2 = 0;
        cantidad2 = 0;
        document.getElementById('valor2').innerHTML = "$" + contador2.toLocaleString();
        document.getElementById('productos2').innerHTML = cantidad2.toLocaleString();
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    document.getElementById('totalItems').innerHTML = totalItems.toLocaleString();
    document.getElementById('totalAmount').innerHTML = totalAmount.toLocaleString();
}//let contador=10.000;
//const valor=document.getElementById("valor")

//function incremento(){
    //alert("Incremento")
   // contador+= 10.000 ;
    //localStorage.setItem("contador",contador)
    //valor.innerHTML=contador;
//}
//function decremento(){
    //alert("Incremento")
  //  if(contador>0){
    //    contador-=1;
      //  valor.innerHTML=contador;
    //}else{
    ////    contador=0;
      //  valor.innerHTML=contador;
    //}
    
//}
//function resetear() {
 //       contador=0;
  //      valor.innerHTML=contador;
//}