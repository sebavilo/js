'use strict'
/*
Mostrar todos los numeros que hay entre 2 numeros ingresados por el usuario
*/
var numero1 = prompt("Ingresa un numero",0);
var numero2 = prompt("Ingresa otro numero",0);

document.write("<h1>Del "+numero1+" al "+numero2+" están estos números: <br></h1>");

for(var i = numero1; i <= numero2; i++){
	document.write(i+"<br>");
}