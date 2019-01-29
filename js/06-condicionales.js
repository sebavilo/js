'use strict'

var edad1= 26;
var edad2= 22;

//Condicional IF
if (edad1 > edad2) {
	console.log("La Edad 1 es mayor que la Edad 2");
}
else{
	console.log("La Edad 2 es mayor que la Edad 1");
}

/*Operadores lógicos

Y 					= &&
O 					= ||
Negación/Distinto 	= !
*/

//Ejercicio de Negación
var year=2018;

if (year != 2016) {
	console.log("El año no es el 2016, porque estamos en el "+year);
}

//Ejercicio con AND (Y)
if (year >=2000 && year <=2018) {
	console.log("Estamos en la era actual");
}
else{
	console.log("No estamos en la era actual");
}

//Ejercicio con OR (O)
if (year == 2008 || year == 2018) {
	console.log("El año termina en 8");
}