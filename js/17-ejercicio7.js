'use strict'
//Tablas de multiplicar segun numeros ingresados

var numero = parseInt(prompt('¿De qué número quieres la tabla?',1));

//Multiplicaremos el numero del 1 al 10
document.write('<h1>Tabla del '+numero+'</h1>')

for (var i = 1; i <= 10; i++) {
	document.write(numero+' x '+i+' = '+(i*numero)+'<br>');
}

//Todas las tablas de multiplicar

for (var m = 1; m <= 10; m++) {
	document.write('<h1>Tabla del '+m+'</h1>')
	for (var i = 1; i <= 10; i++) {
	document.write(m+' x '+i+' = '+(i*m)+'<br>');
	}
}