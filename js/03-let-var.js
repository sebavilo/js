//Pruebas con Let y Var
'use strict'


//Var
var numero = 40;
console.log(numero); //40

if(true){
	var numero = 50;
	console.log(numero); //50
}

console.log(numero); //50


/*Let: Este tipo de variable actua EN BLOQUE.Qué quiere decir esto: La variable cambia su valor solo si este es asignado dentro de alguna condición. Si se sale de esta, la variable volverá a su valor inicial.
Tenemos*/
let texto	= "Hola Mundo";
console.log(texto);

if(true){
	let texto	= "Feliz 18 de septiembre";
	console.log(texto);
}

console.log(texto);
//Resultados serán visibles al momento de ejecutar la página