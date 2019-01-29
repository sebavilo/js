'use strict'

var edad 	= 18;
var mensaje = "";

switch(edad){
	case 18:
		mensaje = "Acabas de cumplir la mayoría de edad";
	break;

	case 25:
		mensaje = "Ya eres un adulto";
	break;

	case 50:
		mensaje = "Cincuentón";
	break;

	case 75:
		mensaje = "Ya eres un anciano";
	break;

	default:
		mensaje = "Tu edad es de "+edad+" años";
	break;
}

console.log(mensaje);