/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var numero=10;
	var acumulador=0;
	var contador=0;
	while(contador>0){
		acumulador=contador+numero;
		contador=contador-1;
		alert(acumulador);
	}
}//FIN DE LA FUNCIÓN