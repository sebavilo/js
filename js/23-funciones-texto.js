'use strict'

//Transformación de textos
var numero = 1313;
var texto1 = "Clase de JavaScript";
var texto2 = "Se aprende caleta";

var dato  = numero.toString(); //Aquí transformamos el numero en string
    dato  = texto1.toLowerCase();
    dato  = texto2.toUpperCase();

console.log(typeof dato);
console.log(dato);

//Calcular longitud
var nombre = "Sebastian Vilo"
console.log(nombre.length);

//Concatenar
var textoTotal = texto1 + " " + texto2;
var textoTotal2= texto1.concat(" "+texto2);

console.log(textoTotal);
console.log(textoTotal2);

//Búsquedas
var busqueda = texto1.indexOf("de");
console.log(busqueda);

//Búsquedas vía array
var busqueda2 = texto1.match(/de/gi);
console.log(busqueda2);

//Búsquedas vía substring
var busqueda3 = texto1.substr(7,3);
console.log(busqueda3);

//Mostrar un caracter ubicado en una posición específica del string
var busqueda4 = texto2.charAt(9);
console.log(busqueda4);

//Buscar al inicio del string: Devuelve true o false
var busqueda5 = nombre.startsWith("Seba");
console.log(busqueda5);

//Buscar al final del string: Devuelve true o false
var busqueda6 = nombre.endsWith("Vilos");
console.log(busqueda6);

//Buscar dentro del string. Debe ser identico en mayúsculas y minúsculas
var busqueda7 = nombre.includes("stian");
console.log(busqueda7);

//FUNCIONES DE REEMPLAZO

//Reemplazar una palabra
var busqueda8 = nombre.replace("Sebastian","Nicolas");
console.log(busqueda8);

//Recortar string
var busqueda9 = nombre.slice(5,10);
console.log(busqueda9);

//Separar palabras por array
var busqueda10 = texto1.split(" ");
//Al señalar espacio indicamos que los elementos del array deben ser separados cuando encuentre un espacio en el string
console.log(busqueda10);

//Eliminar espacios iniciales y finales
var busqueda11 = texto1.trim();
console.log(busqueda11);
