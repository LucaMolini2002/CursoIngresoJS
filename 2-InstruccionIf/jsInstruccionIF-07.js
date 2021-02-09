function mostrar()
{ 
	var edad;
	var estCivil;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estCivil=estadoCivil.value;
	if(edad<18 && estCivil=="Casado" || estCivil=="Divorciado"){
		alert("Es muy pequeño para no ser soltero");
	}

}//FIN DE LA FUNCIÓN