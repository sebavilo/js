'use strict'

//WHILE: Ciclo que se ejecuta con un numero de veces INDEFINIDO. Para ejecutarse debe existir previamente la condición

var year = 2018;

while (year <= 2031){
	console.log("Estamos en el año "+year);
	year++; //Con esto detenemos lo indefinido del bucle
	//year-- (En caso de que queramos ir hacia atrás)

	if (year == 2022){
		break; //detiene el bucle
	}
}

//DO WHILE: Para ejecutarse, primero ejecuta el ciclo y luego comprueba si existe la condición para ver si ejecuta nuevamente el ciclo.

var years = 30;

do{
	alert("Solo cuando sea diferente a 20");
	years--;
}
	while (years >= 25)