function mostrar()
{
	var numero=parseInt(prompt("Ingrese un numero: "));
	var i;
	for(i=2;i<=numero;i++){
		if(numero%i==0){
			document.write("<br>"+"El numero es primo.");
			break;
		}
		else{
			document.write("<br>"+"El numero no es primo.");
		}
	}

}//FIN DE LA FUNCIÓN