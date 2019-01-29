'use strict'
/*
Numero par o impar
*/

var numero = parseInt(prompt("Ingresa un numero",0));

while(isNaN(numero)){
	numero = parseInt(prompt("Ingresa un numero",0));
}

if (numero%2 == 0){
	alert("El numero ingresado es par");
}
else{
	alert("El numero ingresado es impar");
}