
var botonEncriptar = document.querySelector(".btn-encriptar");
botonEncriptar.onclick = encriptar;
var botonDesencriptar = document.querySelector(".btn-desencriptar");
botonDesencriptar.onclick = desencriptar;
var botonCopiar = document.querySelector(".btn-copiar");
botonCopiar.onclick = copiar;
var imagenMunieco = document.querySelector(".imagen-munieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var botonCopiar = document.querySelector(".btn-copiar")
var resultado = document.querySelector(".contenedor-resultado");

function encriptar() {
    imagenMunieco.style.display = "none"
    contenedor.style.display = "none"
    botonCopiar.style.display = "block"
    resultado.style.display = "block"

    var frase = document.getElementById("caja-texto").value.toLowerCase();

    var cajaTexto = frase.replace(/e/img, "enter");
    var cajaTexto = cajaTexto.replace(/i/img, "imes");
    var cajaTexto = cajaTexto.replace(/a/img, "ai");
    var cajaTexto = cajaTexto.replace(/o/img, "ober");
    var cajaTexto = cajaTexto.replace(/u/img, "ufat");

    document.getElementById("textoResultado").innerHTML = cajaTexto
}

function desencriptar() {
    imagenMunieco.style.display = "none"
    contenedor.style.display = "none"
    botonCopiar.style.display = "block"
    resultado.style.display = "block"

    var frase = document.getElementById("caja-texto").value.toLowerCase();

    var cajaTexto = frase.replace(/enter/img, "e");
    var cajaTexto = cajaTexto.replace(/imes/img, "i");
    var cajaTexto = cajaTexto.replace(/ai/img, "a");
    var cajaTexto = cajaTexto.replace(/ober/img, "o");
    var cajaTexto = cajaTexto.replace(/ufat/img, "u");

    document.getElementById("textoResultado").innerHTML = cajaTexto
}

function copiar() {
    var contenido = document.querySelector("#textoResultado");
    contenido.select();
    document.execCommand("copy");
}