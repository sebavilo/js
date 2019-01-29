'use strict'

//Parámetros REST / SPREAD (Se llaman a través de punto suspensivo)


//REST: Nombra el resto de los parámetros antes de llamarlas

function listadoFrutas(fruta1,fruta2,...resto_de_frutas){ // --> Al agregar los 3 puntos al principio de la variable, ingresa todos el resto de los parámetros a través de un array
	console.log("Fruta 1: "+fruta1);
	console.log("Fruta 2: "+fruta2);
	console.log(resto_de_frutas);
}

listadoFrutas("Naranja","Manzana","Sandia","Melon","Pepino","Durazno");


//SPREAD: Nombra el resto de los parámetros después de llamarlos
var frutas = ["Naranja","Manzana"];
listadoFrutas(...frutas,"Sandía","Pera","Melón","Coco");