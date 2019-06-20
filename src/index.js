let msjIntrod = document.getElementById("msjIntrod"); //caja de texto en html codificar
const botonCod= document.getElementById("buttonCod");     //boton codificar en html codificar
const offset = document.getElementById("offset");     //en html codificar
let msjCod = document.getElementById("msjCod"); //caja de texto se muestra mensaje codificado en html codificar

let msjCod2= document.getElementById("msjCod2"); //caja de texto donde se introduce mensaje codificado html descodificar
const botonDcod= document.getElementById("buttonDcod"); //boton para descodificar mensaje
let msjDeco = document.getElementById("msjDeco"); //caja de texto se muestra mensaje descodificado html descodificar



botonCod.addEventListener("click", ()=> {
//  alert ('mensaje');
const result = window.cipher.encode(parseInt(offset.value),msjIntrod.value);
// let mostrarMensajeCod = ()=>{
msjCod.value=result
// }
// return mostrarMensajeCod;
});


//Para DESCIFRAR------
botonDcod.addEventListener("click", ()=> {
const result2 = window.cipher.decode(parseInt(offset.value),msjCod2.value);
msjDeco.value=result2

});
