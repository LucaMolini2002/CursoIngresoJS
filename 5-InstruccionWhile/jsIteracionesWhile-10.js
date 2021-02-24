/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{ 
	var respuesta;
	var numero;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantNegativos;
	var cantPositivos;
	var cantCeros;
	var cantNumPares;
	var promedioPositivos;
	var promedioNegativos
	var flag=0;

	respuesta=true;
	do{
		numero=parseInt(prompt("Ingrese un numero"));
		if(flag==0){
			cantPositivos=numero;
			cantNegativos=numero;
			cantCeros=numero;
			flag=1;
		}
		else{
			if(numero<0){
				sumaNegativos=sumaNegativos+numero;
			}
			else if(numero>0){
				sumaPositivos=sumaPositivos+numero;
			}
		}
		respuesta=confirm("Continue ingresando numeros: ");
	}
	while(respuesta==true);
	
		respuesta=prompt("desea continuar?");
	

	document.write("la suma de negativos es :" + sumaNegativos + 
	"La suma de positivos es: "+sumaPositivos);        
	
}//FIN DE LA FUNCIÓN