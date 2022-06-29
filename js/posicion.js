
var divv = document.querySelector(".letras-ocultas");
var divError = document.querySelector(".letras-erroneas");
var parafo =  document.querySelector(".exito");
var palabras = ['ASUS','PELOTA','ALURA','MUNDO','PYTHON','FRONTEND'];
var posicion = [];
var letra_error="";
var error_mono = 0;

var palabra = palabras[seleccionaPalabra(palabras)];
var arr_palabra = Array.from(palabra);


function inicializar(){
    var div_agrega_palabra = document.querySelector(".DivArgregaPalabra");
    var div_juego = document.querySelector(".juego");

    div_agrega_palabra.classList.add("Nomostrar")
    div_juego.classList.add("Nomostrar")
    carga_inicial(palabra);
}

function carga_inicial(texto) {
    for (var x = 0; x < texto.length; x++) {
        divv.appendChild(construirSpan(texto[x], x))
    }
    parafo.classList.add("Nomostrar");
}

function construirSpan(dato, id) {
    var td =  document.createElement("span");
    td.classList.add("letras");
    td.id = "span"+id;
    td.style.color= "white"
    td.textContent = "!";
    return td
}


function myFunction(evento){
    console.log(evento.key);
    const pattern = new RegExp('^[A-Z]+$');

    if (palabra.length != cuantos())  {
        if (!pattern.test(evento.key)) {
            alert("No es una letra Mayuscula");
        }
        else{
            if (error_mono < 10) {
                posicion = validaLetra(evento.key);
                if (posicion.length > 0) {
                    for (var x = 0; x < posicion.length; x++) {
                        var nomid = "span"+posicion[x];
                        var letra = document.getElementById(nomid);
                        letra.style.color = "blue";
                        letra.innerHTML=evento.key;
                    }
                    if (palabra.length == cuantos()) {
                        parafo.classList.remove("Nomostrar");
                    }
                }
            }
            else {
                parafo.innerHTML = "Fin del juego!";
                parafo.classList.remove("Nomostrar");
            }
        }
    }
}

function seleccionaPalabra(arreglo){
    var pos = Math.round(Math.random() * (arreglo.length-1 ));
    return pos;
}

function validaLetra(letra){
    var array = [];
    for (var x = 0; x < arr_palabra.length; x++) {
        if (letra == arr_palabra[x]) {
                array.push(x); 
                arr_palabra[x] = '@';                    
        }
    }
    if (palabra.search(letra) == -1) {
        cargaLetraError(letra);
    }
    return array;
}

function cuantos(){
    var cantidad = 0;
    for (var x = 0; x < arr_palabra.length; x++) {
        if ('@' == arr_palabra[x]){
            cantidad++;
        }
    }
    return cantidad;
}

function cargaLetraError(letra){
    if ((letra_error.search(letra) == -1) && (error_mono < 10)){ 
        letra_error = letra_error + letra;
        divError.appendChild(SpanError(letra, letra_error.length)) 
        dibuja();
        if (error_mono == 10) {
            parafo.innerHTML = "Fin del juego!";
            parafo.color = "red";
            parafo.classList.remove("Nomostrar");
        }
    }
}

function SpanError(dato, id) {
    var sp =  document.createElement("span");
    sp.classList.add("letras-error");
    sp.style.color= "black";
    sp.id = "spanErr"+id;
    sp.textContent = dato;
    return sp
}


function Btn_NuevaPalabra(event){
    var div_agrega_palabra = document.querySelector(".DivArgregaPalabra");
    var div_inicio =  document.querySelector(".inicio");
    div_inicio.classList.add("Nomostrar");
    div_agrega_palabra.classList.remove("Nomostrar");
}

function AgregarNueva_palabra() {   
    var nuevaPalabra = document.getElementById('input_nueva_palabra');
        palabras.push(nuevaPalabra.value.toUpperCase());
        alert('La palabra fue guardada');
        nuevaPalabra.value = "";
        Btn_iniciajuego();
    }


function Cancelar_Nueva_palabra() {
    var div_agrega_palabra = document.querySelector(".DivArgregaPalabra");
    var div_inicio =  document.querySelector(".inicio");
    div_agrega_palabra.classList.add("Nomostrar");
    div_inicio.classList.remove("Nomostrar");
}

function Btn_iniciajuego() {
    var tecla = document.addEventListener("keypress", myFunction);
    var div_inicio =  document.querySelector(".inicio");
    var div_palabra = document.querySelector(".DivArgregaPalabra");
    var div_juego = document.querySelector(".juego");
    div_inicio.classList.add("Nomostrar");
    div_palabra.classList.add("Nomostrar");
    div_juego.classList.remove("Nomostrar");
}

function reiniciarjuego(){
    for (var x = 0; x < palabra.length; x++) {
        var nomspan =  "span"+x;
        var span =  document.getElementById(nomspan);
        span.parentNode.removeChild(span); 
    }

    for (var x = 1; x <= letra_error.length; x++) {
        var nomspan =  "spanErr"+x;
        var span =  document.getElementById(nomspan);
        span.parentNode.removeChild(span); 
    }

    pincel.clearRect(500,20,200,300);
    limpia_variables();
}

function limpia_variables(){
    posicion = [];
    letra_error="";
    error_mono = 0;
    palabra = palabras[seleccionaPalabra(palabras)];
    arr_palabra = Array.from(palabra);
    carga_inicial(palabra); 
}

function volver_inicio(){
    pincel.clearRect(500,20,200,300);
    history.go(0);
}