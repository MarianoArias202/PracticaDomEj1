let numerAleatorio = 0;

function crearnumeroaleatorio(){
 
    numerAleatorio = Math.floor(Math.random() * 100) + 1;
   
}


function adivinarnumero(){

    let numeroIngresado = parseInt(document.getElementById('numeroIngresado').value);
    console.log(numeroIngresado)
    console.log( numerAleatorio)
     if(numeroIngresado ===  numerAleatorio ){

       const parrafoNuevo = document.createElement('p') // <p></p>
       parrafoNuevo.innerHTML = `Felicidades Adivinaste el numero`;
       parrafoNuevo.className = 'lead'
       const seccionInformacionExtra = document.getElementsByClassName('my-5');
      
       seccionInformacionExtra[1].appendChild(parrafoNuevo) 

     }else if(numeroIngresado >  numerAleatorio){
        const parrafoNuevo = document.createElement('p') // <p></p>
        parrafoNuevo.innerHTML = `El numero ingresado es mayor al numero magico`;
        parrafoNuevo.className = 'lead'
        const seccionInformacionExtra = document.getElementsByClassName('my-5') ;
     
        seccionInformacionExtra[1].appendChild(parrafoNuevo) 
    
     }else{
        const parrafoNuevo = document.createElement('p') // <p></p>
       parrafoNuevo.innerHTML = `El numero ingresado es menor al numero magico`;
       parrafoNuevo.className = 'lead'
       const seccionInformacionExtra = document.getElementsByClassName('my-5');
   
       seccionInformacionExtra[1].appendChild(parrafoNuevo) 
      
     }
}