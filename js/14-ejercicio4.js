'use strict'
/*
Mostrar todos los numeros impares que hay entre 2 numeros ingresados
*/

var numero1= prompt("Ingresa un numero",0);
var numero2= prompt("Ingresa otro numero",0);

while(numero1 < numero2){
	numero1++;

	if (numero1%2 != 0){
		console.log("El "+numero1+" es impar");
	}
}