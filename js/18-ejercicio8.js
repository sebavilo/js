'use strict'
/*
Calculadora que:
-Pida 2 numeros x pantalla
-Si se ingresa mal un numero que pida reingreso
-Que imprima resultado de suma, resta, multiplicacion, division por console y alert
*/

var numero1 = parseInt(prompt('Ingresa un numero',0));
var numero2 = parseInt(prompt('Ingresa otro numero',0));

/*
Si ingresa mal un numero
*/
while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
	numero1 = parseInt(prompt('Ingresa un numero',0));
	numero2 = parseInt(prompt('Ingresa otro numero',0));
}

//Resultado
var resultado = "La suma es "+(numero1+numero2)+"<br>"+
				"La resta es "+(numero1-numero2)+"<br>"+
				"La multiplicacion es "+(numero1*numero2)+"<br>"+
				"La división es "+(numero1/numero2)

document.write(resultado);