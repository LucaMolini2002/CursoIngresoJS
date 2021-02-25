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
	var cantCeros=0;
	var cantNumPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPyN;
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
			if(numero==0){
				cantCeros=cantCeros+1;
			}
			else if(numero<0){
				sumaNegativos=sumaNegativos+numero;
				promedioNegativos=sumaNegativos/numero;
			}
			else if(numero>0){
				sumaPositivos=sumaPositivos+numero;
				promedioPositivos=sumaPositivos/numero;
			}
			else{
				cantNumPares=(sumaPositivos+sumaNegativos)%2;
			}
			
		}
		respuesta=confirm("Continue ingresando numeros: ");
	}
	while(respuesta==true);
	
	respuesta=prompt("desea continuar?");
	
	document.write("La suma de negativos es :"+sumaNegativos+"<br>");
	document.write("La suma de los positvos es: "+sumaPositivos+"<br>");
	document.write("La cantidad de negativos es: "+cantNegativos+"<br>");
	document.write("La cantidad de positvos es: "+cantPositivos+"<br>");
	document.write("La cantidad de ceros es: "+cantCeros+"<br>");
	document.write("El promedio de negativos es: "+promedioNegativos+"<br>");
	document.write("El promedio de positivos es: "+promedioPositivos+"<br>");
	document.write("La cantidad de numeros pares es: "+cantNumPares+"<br>");
}//FIN DE LA FUNCIÓN