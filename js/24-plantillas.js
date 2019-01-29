'use strict'

//Plantillas de texto

var nombre = (prompt('Nombre',''));
var apellido = (prompt('Apellido',''));

//Texto normal
//var texto = "Mi nombre es "+nombre+" y mi apellido es "+apellido;

/*PLANTILLAS:
Se utiliza comilla invertida para iniciar y terminar el párrafo
y las variables se concatenan de la siguiente forma:
${variable}*/

var texto = `<h1>Hola!</h1><br>
Mi nombre es ${nombre}<br>
y mi apellido es ${apellido}`;

document.write(texto);
