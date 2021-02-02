/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//tomar notas
	//=prompt
	//importeIngresado=txtIdImporte.value; 
	//importeIngresado=document.getElementById('txtIdImporte').value;

	//salida
	//alert()
	//txtIdResultado.value="el importe es:" +importeIngresado;
	//document.getElementById('txtIdResultado').value="otro importe es:" +importeIngresado;


	//IDS txtIdImporte txtIdResultado
	var importeIngresado;
	var suma;
	var numeroUno;
	var numeroDos;
	var testeo;

	numeroUno="5";
	numeroDos=6;
	suma=5+6;
	suma=numeroUno+numeroDos;

	importeIngresado=txtIdImporte.value; 
	importeIngresado=parseInt(importeIngresado);

	suma=importeIngresado+importeIngresado;

	testeo=parseInt(4);
	testeo=parseInt("5");
	testeo=parseInt("lalala");
	testeo=parseInt("6lalala");
	testeo=parseInt("lalala6");
	testeo=parseInt("");
	testeo=parseInt(" ");
	testeo=parseInt(variableNoExiste);

	importeIngresado=document.getElementById('txtIdImporte').value;

	alert(importeIngresado);

	txtIdResultado.value="el importe es:" +importeIngresado;
	document.getElementById('txtIdResultado').value="otro importe es:" +importeIngresado;
/*
	var nombre;
	alert(dato);
	nombre=prompt("ingrese su nombre");

	alert(nombre);
	nombre="maria";
	nombre="jose";
	alert("literal");
	alert("su nombre es:" + nombre);
	alert("nombre");
*/	
}
