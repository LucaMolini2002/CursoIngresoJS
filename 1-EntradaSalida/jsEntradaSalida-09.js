/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	sueldo=txtIdSueldo.value;
	sueldoParseado=parseInt(sueldo);
	mostrarAumento=sueldoParseado+10%;
	txtIdResultado.value=mostrarAumento;
	
}
