'use strict'
//ARREGLO MULTIDIMENSIONAL: Array dentro de otro arrays

//Creamos los arrays que serán englobados dentro del otro arrays

var categorias = ['Accion','Terror','Comedia'];
var peliculas  = ['La verdad duele','La vida es bella','Gran torino'];

//peliculas.sort() //Orden alfabetico ascendente del arreglo
peliculas.reverse()//rden alfabetico descendente del arreglo
//Creamos el array multidimensional
var cine       = [categorias,peliculas];

//Imprimimos valores
console.log(cine);

//Podemos seleccionar que queremos ver en la impresión de valores
console.log(cine[0][1]); //Veremos el arreglo 0, valor 1 (Terror)
console.log(cine[1][2]); //Veremos el arreglo 1, valor 2 (Gran torino)

var elemento = (prompt("Introduce un nombre de película. Para terminar, escribe FIN"));

do{
  elemento = (prompt("Introduce un nombre de película. Para terminar, escribe FIN"));
  peliculas.push(elemento);
}
while(elemento != "fin");
  peliculas.pop(); //Elimina el último elemento de un array. Puede agregarse más veces si se requieren eliminar más elementos
  //peliculas[0] = undefined; //Dejar como undefined el primer elemento del arreglo

//Excluir un elemento en específico del arreglo
var indice = peliculas.indexOf("Gran torino") //Busca el elemento del arreglo que contiene esta descripcion
  if (indice > -1){
    peliculas.splice(indice,1);
  }

//Convertir el arreglo en un string por comas (arreglo,join())
var peliculas_string = peliculas.join();
console.log(peliculas_string);

//Agregar más elementos al arreglo
peliculas.push("Los Simpsons");
console.log(peliculas);

//Convertir string en arreglo (dividido por comas, uso de split)
var cadena        = "texto1, texto2, texto3";
var cadena_string = cadena.split(", ");

console.log(cadena_string);
