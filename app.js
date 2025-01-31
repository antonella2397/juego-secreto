let numerosecreto = 0;
let intentos = 0;
let listanumerossorteados = [];
let numeromaximo = 10;

console.log(numerosecreto);

function asignartextoelemento(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;   
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numerosecreto) {
        asignartextoelemento('p', `Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
    //El usuario no acerto.
    if (numeroDeUsuario > numerosecreto) {
        asignartextoelemento('p','El numero secreto es menor');
    } else {
        asignartextoelemento('p','El numero secreto es mayor');
    }
    intentos++;
    limpiarcaja();
}
    return;
}

function limpiarcaja() {
    document.querySelector('#valorUsuario').value ='';
    
}
function generarnumerosecreto(){
let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;

console.log(numerogenerado);
console.log(listanumerossorteados);
//si ya sorteamos todos los numeros
if (listanumerossorteados.length == numeromaximo ) {
asignartextoelemento('p','ya se sortearon todos los numeros posibles');
}else {
        //si el numero generado esta incluido en la lista
        if (listanumerossorteados.includes(numerogenerado)){
            return generarnumerosecreto();
        }else {
            listanumerossorteados.push(numerogenerado);
            return numerogenerado;
        }
    
    }
}
function condicionesiniciales() {
    asignartextoelemento('h1','juego del numero secreto');
    asignartextoelemento('p',`indica el numero del 1 al 10 ${numeromaximo}`);
    numerosecreto = generarnumerosecreto();
    intentos = 1;
}

function reiniciarjuego() {
    //limpiar caja
    limpiarcaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
   //inicializar el nuero de intentos
condicionesiniciales();
 //deshabilitar el boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesiniciales();

