'use strict'
//Operadores
var numero1	= 2;
var numero2 = 5;
var suma	= numero1 + numero2;
var resta	= numero1 - numero2;
var multip	= numero1 * numero2;
var division= numero1 / numero2;
var resto	= numero1 % numero2;

alert("Al operar "+numero1+" y "+numero2+" los resultados son:\nSuma= "+suma+"\nResta= "+resta+"\nMultiplicación= "+multip+"\nDivisión= "+division+"\nResto= "+resto);

//Tipos de datos
var int		= 10; 		//Numeros enteros
var string	= "Holi"; 	//Cadenas de texto
var boolean	= true;		//Booleano

//Probando tipos de datos
var numero_falso = "33.4"; //Numero convertido a texto
var numero		 = 20;

console.log(numero_falso+7)				//No hará la suma, ya que 33.4 está como texto. Mostrará 33.47
console.log(Number(numero_falso)+7);	//Transforma texto a numero y realiza sumatoria
console.log(parseInt(numero_falso)+7);	//Realiza sumatoria como numero entero
console.log(parseFloat(numero_falso)+7);//Realiza sumatoria como numero decimal
console.log(String(numero)+7);			//Convierte numero a texto. No sumará. Mostrará 207

//Indica el tipo de dato según variable
console.log(typeof numero_falso);
console.log(typeof numero);