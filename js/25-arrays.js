'use strict'

//Arrays, arreglos, matrices
//Un array es una variable con varios datos, independiente del tipo, por ejemplo:

var amigos = ["Ariel Contreras","Gabriel Oyarce","David Perez"];

//Tambien se puede crear un array en forma de objeto, con la siguiente sintaxis
var familia = new Array("Paula Vilo","Alejandra Salinas","Alejandro Vilo");

console.log(amigos);
console.log(familia);

//Para desplegar un elemento especifico del arreglo
console.log(amigos[0]);
console.log(familia[1]);

//Para saber de cuantos elementos se compone el arreglo, se emplea propiedad "length"
console.log(amigos.length);
console.log(familia.length);

//Crear un "juego" que al ingresar un numero despliegue el valor del elemento
/*
var elemento = parseInt(prompt('Qué personaje quieres seleccionar? Ingresa un numero del 0 al 2',0));
  if(elemento > amigos.length){
    alert("El personaje elegido no existe. Debes ingresar un numero menor a "+amigos.length);
  }
  else{
    alert("El personaje elegido es "+(amigos[elemento]));
  }

var elemento2 = parseInt(prompt('Qué familiar quieres seleccionar? Ingresa un numero del 0 al 2',0));
  if(elemento2 > familia.length){
    alert("El familiar elegido no existe. Debes ingresar un numero menor a "+familia.length);
  }
  else{
    alert("El familiar elegido es "+(familia[elemento2]));
  }
*/

//Mostrar todos los datos contenidos en el arreglo
document.write("<h1>Los mejores amigos del Seba:<br></h1>");
document.write("<ol>");
  /*for(var i=0;i<amigos.length;i++){
    document.write("<li>"+amigos[i]+"</li>");
  }*/

  /*
  Otra forma: forEach. Método que trabaja con callback y este último trabaja con un máximo de 3 elementos:
    * Valor del elemento
    * Índice del elemento
    * Arreglo que se está recorriendo

  En este caso, para mantener el arreglo creado anteriormente, solo usaremos el valor del elemento
  */
  /*amigos.forEach((elemento)=>{
    document.write("<li>"+elemento+"</li>");
  });
document.write("</ol>");*/

//Otra forma de recorrer arreglos
  for (let amigo in amigos){
    document.write("<li>"+amigos [amigo]+"</li>");
  }
  document.write("</ol>");

  //Busquedas en arrays: Si lo encuentra mostrará el valor, de lo contrario mostrará undefined

    var precios=['100,200,300,500,1000'];
    var busqueda = precios.some(precio => precio >= 80); //some busca varios valores que contengan la referencia indicada. Devuelve true o false
    
  //var busqueda = amigos.findIndex(amigo => amigo == "Gabriel Oyarce"); //find busca la palabra ingresada - findIndex busca el indice en el que se encuentra la palabra ingresada

  console.log(busqueda);
