'use strict'
/*
Funciones: Conjunto de reglas, órdenes, cosas a ejecutar para un fin determinado
Se puede reutilizar tantas veces como sea necesario
*/

function porConsola(numero1,numero2){
	console.log("Suma:"+ (numero1+numero2));
	console.log("Resta:"+ (numero1-numero2));
	console.log("Multiplicación:"+ (numero1*numero2));
	console.log("División:"+ (numero1/numero2));
	console.log("********************************");
}

function porPantalla(numero1,numero2){
	document.write("Suma:"+ (numero1+numero2)+"<br>");
	document.write("Resta:"+ (numero1-numero2)+"<br>");
	document.write("Multiplicación:"+ (numero1*numero2)+"<br>");
	document.write("División:"+ (numero1/numero2)+"<br>");
	document.write("********************************");
}


function calculadora(numero1,numero2, mostrar = false){ //Tambien se le pueden dar valores predefinidos a las variables. Estas se conocen como "variables opcionales"
	//Instrucciones a ejecutar

	if(mostrar == false){
		porConsola(numero1,numero2);
	}
	else{
		porPantalla(numero1,numero2);
	}
	return true;
	//return "Hola soy la calculadora"; //return siempre devuelve algo
}

calculadora(12,8); //Invocar la funcion
calculadora(2,5,true); //Invocar la funcion


//Si queremos que calcule automaticamente las operatorias con los numeros del 1 al 10 (numero1) con 8 (numero2)
for (var i = 1; i <= 10; i++) {
	console.log(i);
	calculadora(i,8);
}