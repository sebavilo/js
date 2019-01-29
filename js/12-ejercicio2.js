'use strict'
/*
Mostrar media y suma a través de un bucle hasta que se ingrese un número negativo. A partir de ahi, mostrar
resultado.
*/

var suma	= 0;
var contador= 0;

do{
	var numero = parseInt(prompt("Introduce números hasta que ingreses uno en negativo"),0);

		if(isNaN(numero)){
			numero = 0;
		}
		else if (numero >= 0){
			suma = suma + numero;
			contador++;
		}
		console.log(suma);
		console.log(contador);

}
while (numero >= 0){
	alert("La suma de todos los números es "+suma);
	alert("El promedio de todos los números es "+(suma/contador));
}