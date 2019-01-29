'use strict'

/*
Programa que pida ingresar 2 numeros al usuario y una vez ingresados, que diga cual es el mayor, menor o si son iguales.
Si se introducen numeros menores o iguales a cero, debe volver a pedir reingreso.
*/

var numero1 = parseInt(prompt("Ingresa el primer número",0));
var numero2 = parseInt(prompt("Ingresa el segundo número",0));

//Con esto validamos que cuando se ingresen numeros menores o iguales a cero, solicite reingreso.
while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt("Ingresa el primer número",0));
	numero2 = parseInt(prompt("Ingresa el segundo número",0));
}

if (numero1 == numero2){
	alert("Los numeros ingresados son IGUALES");
}
else if (numero1 > numero2){
	alert("El número mayor es: "+numero1);
	alert("El número menor es: "+numero2);
}
else if (numero1 < numero2){
	alert("El número mayor es: "+numero2);
	alert("El número menor es: "+numero1);
}
else{
	alert("Introduce números correctos");
}