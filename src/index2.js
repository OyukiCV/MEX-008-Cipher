
let msjCod2= document.getElementById("msjCod2"); //caja de texto donde se introduce mensaje codificado html descodificar
const botonDcod= document.getElementById("buttonDcod"); //boton para descodificar mensaje
let msjDeco = document.getElementById("msjDeco"); //caja de texto se muestra mensaje descodificado html descodificar



//Para DESCIFRAR------
botonDcod.addEventListener("click", ()=> {
const result2 = window.cipher.decode(parseInt(offset.value),msjCod2.value);
msjDeco.value=result2

});