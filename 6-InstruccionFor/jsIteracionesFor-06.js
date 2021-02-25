function mostrar()
{
	var numero=parseInt(prompt("Ingrese un numero: "));
	var i=0;
	for(i=0;i<=numero;i++){
		if(i%2==0){
			document.write("<br>"+i);
		}
	}


}//FIN DE LA FUNCIÓN