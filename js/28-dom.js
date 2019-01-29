'use strict'
//DOM (Document Object Model)

function cambiaColor(color){
  hola.style.background  = color;
}

//Conseguir elementos con un ID

//var hola = document.getElementById("holi"); //si se agrega .innerHTML solo veremos el texto que contiene la variable
var hola = document.querySelector("#holi"); //Otra forma de llamar el objeto

hola.innerHTML = "Como estas"; //Con esto modificamos el contenido de la variable

//Podemos agregarle estilos CSS
hola.style.background = "blue";
hola.style.color      = "white";
hola.style.padding    = "20px";
hola.className        = "hola"

//Conseguir elementos por etiqueta
var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");


var valor;

for (valor in todosLosDivs){
  if(typeof todosLosDivs[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miSeccion").append(parrafo);
  }
}
seccion.append(hr);

var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Este es el div numero 2"; //innerHTML permite cambiar el valor de la variable impresa en la pagina/funcion

console.log(todosLosDivs);
console.log(contenidoEnTexto);

//Conseguir los elementos por su clase CSS
var divsRojos = document.getElementsByClassName('rojo');
var divsVerdes = document.getElementsByClassName('verde');
divsVerdes[0].style.background = 'green';

var div;
for(div in divsRojos){
  if(divsRojos[div].className == 'rojo'){
    divsRojos[div].style.background = 'red';
  }
}
console.log(divsRojos);

console.log(holi);

//Query Selector
var id = document.querySelector("#titulo");
console.log(id);
