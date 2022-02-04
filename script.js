
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var textoEscrito       = document.querySelector(".text-input");
var botonEncrypto      = document.querySelector("#btn-encriptar");
var botonDesencrypto   = document.querySelector("#btn-desencriptar");
var mensajeEncryptado  = document.querySelector("#msg");
var botonCopiar        = document.querySelector("#btn-copy");

botonEncrypto.addEventListener("click",function(event){
    event.preventDefault();
    texto = textoEscrito.value;
    textoEncryptado = texto.replaceAll("e", "enter");
    textoEncryptado = textoEncryptado.replaceAll("i", "imes");
    textoEncryptado = textoEncryptado.replaceAll("a", "ai");
    textoEncryptado = textoEncryptado.replaceAll("o", "ober");
    textoEncryptado = textoEncryptado.replaceAll("u", "ufat");
    
    mensajeEncryptado.value = textoEncryptado;
    textoEscrito.value = "";
    
});
botonDesencrypto.addEventListener("click",function(event){
    event.preventDefault();
    texto = textoEscrito.value;
    textoDesencryptado = texto.replaceAll("enter", "e");
    textoDesencryptado = textoDesencryptado.replaceAll("imes", "i");
    textoDesencryptado = textoDesencryptado.replaceAll("ai", "a");
    textoDesencryptado = textoDesencryptado.replaceAll("ober", "o");
    textoDesencryptado = textoDesencryptado.replaceAll("ufat", "u");

   
    mensajeEncryptado.value = textoDesencryptado;
    textoEscrito.value = "";

});
botonCopiar.addEventListener("click",function(event){
    navigator.clipboard.writeText(mensajeEncryptado.value);
    mensajeEncryptado.value = "";
    textoEscrito.focus();
    
});

