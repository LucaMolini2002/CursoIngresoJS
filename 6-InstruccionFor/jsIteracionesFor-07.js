function mostrar()
{
	var numero=parseInt(prompt("Ingrese un numero: "));
	var i=0;
	for(i=2;i<numero/2;i++){
		if(numero%i==0){
			document.write("<br>"=i);
		}
	}
	
}