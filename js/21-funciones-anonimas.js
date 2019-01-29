'use strict'
//FUNCIONES ANONIMAS: Funciones sin nombre que se pueden guardar dentro de una variable

/*var pelicula = function(nombre){
	return "La pelicula es "+nombre;
}*/


function suma(numero1,numero2,sumaYmuestra,sumaPor2){
	var sumando = numero1 + numero2;

	sumaYmuestra(sumando);
	sumaPor2(sumando);
	return sumando;
}


//Funcion tipo "Callback": Funcion que se pasa a otra función como argumento. Luego se invoca desde la función externa para su funcionamiento.
	suma(5,7,function(dato){
		console.log("La suma es: "+dato);
	},function(dato){
		console.log("La suma x 2 es: "+(dato*2));
	});

//Tambien se puede llamar el Callback como dato => {...} Esto se conoce como "Función flecha"