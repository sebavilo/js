'use strict'

function holaMundo(texto){
	var hola_mundo = "Texto dentro de una función" //Por ser que esta variable está dentro de la función, solo puedo llamarla dentro de la función. Si la llamo afuera no pescará y dará error. Para hacerla funcionar en cualquier otro sector del código, debe ser llamada en conjunto con la función.

	console.log(texto);
	console.log(numero.toString()); //toString convierte un numero en un texto
	console.log(hola_mundo);
}

//Variables Globales: Declaradas fuera de una funcion. Pueden ser llamadas dentro o fuera de una función.
	var texto = "Hola, soy una variable global";
	var numero = 15;
	holaMundo(texto);