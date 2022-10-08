let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
let sectionReiniciar = document.getElementById('boton-reiniciar')
let botonMascotaJugador = document.getElementById('boton-personaje')
sectionReiniciar.style.display = 'none'
let botonRoca = document.getElementById('boton-rock')
let botonPapel = document.getElementById('boton-paper')
let botonTijera = document.getElementById('boton-scissors')
let botonLagarto = document.getElementById('boton-lizzard')
let botonSpock = document.getElementById('boton-spock')
let botonReiniciar = document.getElementById('boton-reiniciar')

let sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
let inputSheldon = document.getElementById('sheldon')
let inputLeonard = document.getElementById('leonard')
let inputHoward = document.getElementById('howard')
let inputRaj = document.getElementById('raj')
let spanJugador = document.getElementById('mascota-jugador')

let spanEnemigo = document.getElementById('personaje-enemigo')

let spanVidasJugador = document.getElementById('vidas-jugador')
let spanVidasEnemigo = document.getElementById('vidas-enemigo')

let sectionMensajes = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataque-del-Jugador')
    let ataqueDelEnemigo = document.getElementById('ataque-del-Enemigo')

let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'

    botonMascotaJugador.addEventListener('click' , seleccionarPersonaje)
    botonRoca.addEventListener('click' , ataqueRoca)
    botonPapel.addEventListener('click' , ataquePapel)
    botonTijera.addEventListener('click' , ataqueTijera)
    botonLagarto.addEventListener('click' , ataqueLagarto)
    botonSpock.addEventListener('click' , ataqueSpock)
    
    botonReiniciar.addEventListener('click' , reiniciarJuego)
}

function seleccionarPersonaje(){
    let sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
    sectionSeleccionarPersonaje.style.display = 'none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    if (inputSheldon.checked){
        spanJugador.innerHTML = 'Sheldon'
    }else if (inputLeonard.checked){
        spanJugador.innerHTML = 'Leonard'
    }else if (inputHoward.checked){
        spanJugador.innerHTML = 'Howard'
    }else if (inputRaj.checked) {
        spanJugador.innerHTML = 'Raj' 
    }else{
        alert('Selecciona a una personaje')
    }
    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,4)
    if(mascotaAleatoria ==1){
        spanEnemigo.innerHTML = 'Sheldon'
    }else if (mascotaAleatoria ==2){
        spanEnemigo.innerHTML = 'Leonard'
    }else if (mascotaAleatoria == 3){
        spanEnemigo.innerHTML = 'Howard'
    }else {
        spanEnemigo.innerHTML = 'Raj'
    }
}

function ataqueRoca(){
    ataqueJugador = 'Rock 🪨'
    ataqueAleatorioEnemigo()
}
function ataquePapel(){
    ataqueJugador = 'Paper 📋'
    ataqueAleatorioEnemigo()
}
function ataqueTijera(){
    ataqueJugador = 'Scissors ✂️'
    ataqueAleatorioEnemigo()
}
function ataqueLagarto(){
    ataqueJugador = 'Lizzard 🦎'
    ataqueAleatorioEnemigo()
}
function ataqueSpock(){
    ataqueJugador = 'Spock 🖖'
    ataqueAleatorioEnemigo()
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,5)
    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'Rock 🪨'
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'Paper 📋'
    }else if (ataqueAleatorio== 3){
        ataqueEnemigo = 'Scissors ✂️'
    }else if (ataqueAleatorio == 4){
        ataqueEnemigo = 'Lizzard 🦎'
    }else if(ataqueAleatorio == 5){
        ataqueEnemigo = 'Spock 🖖'
    }
    combate()
    
}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}


function combate(){
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if( ataqueJugador == 'Rock 🪨' && ataqueEnemigo == 'Paper 📋'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador      
    } else if(ataqueJugador == 'Rock 🪨' && ataqueEnemigo == 'Scissors ✂️'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo       
    } else if(ataqueJugador == 'Rock 🪨' && ataqueEnemigo == 'Lizzard 🦎'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    } else if(ataqueJugador == 'Rock 🪨' && ataqueEnemigo == 'Spock 🖖'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'Paper 📋' && ataqueEnemigo == 'Rock 🪨'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'Paper 📋' && ataqueEnemigo == 'Scissors ✂️'){
        crearMensaje("PERDISTE")
    }else if(ataqueJugador == 'Paper 📋' && ataqueEnemigo == 'Lizzard 🦎'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'Paper 📋' && ataqueEnemigo == 'Spock 🖖'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    }else if(ataqueJugador == 'Scissors ✂️' && ataqueEnemigo == 'Paper 📋'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    }else if(ataqueJugador == 'Scissors ✂️' && ataqueEnemigo == 'Lizzard 🦎'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    }else if(ataqueJugador == 'Scissors ✂️' && ataqueEnemigo == 'Rock 🪨'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'Scissors ✂️' && ataqueEnemigo == 'Spock 🖖'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'Lizzard 🦎' && ataqueEnemigo == 'Rock 🪨'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'Lizzard 🦎' && ataqueEnemigo == 'Paper 📋'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'Lizzard 🦎' && ataqueEnemigo == 'Scissors ✂️'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'Lizzard 🦎' && ataqueEnemigo == 'Spock 🖖'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'Spock 🖖' && ataqueEnemigo == 'Paper 📋'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }else if(ataqueJugador == 'Spock 🖖' && ataqueEnemigo == 'Rock 🪨'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    }else if(ataqueJugador == 'Spock 🖖' && ataqueEnemigo == 'Scissors ✂️'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    }else if(ataqueJugador == 'Spock 🖖' && ataqueEnemigo == 'Lizzard 🦎'){
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("GANASTE!")
    }else if (vidasJugador ==0){
        crearMensajeFinal("PERDISTE")
    }
}

function crearMensajeFinal (resultadoFinal){
    sectionMensajes.innerHTML= resultadoFinal   
    
    botonRoca.disabled = true
    
    botonPapel.disabled = true
    
    botonTijera.disabled = true
    
    botonLagarto.disabled = true
    
    botonSpock.disabled = true
 
    sectionReiniciar.style.display = 'block'
}


function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random () * (max - min + 1) + min)
}
window.addEventListener('load' , iniciarJuego)