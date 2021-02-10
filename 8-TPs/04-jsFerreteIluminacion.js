/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	//punto A
    var lamparas;
    var precio;
    var precioTotal;
    var precioConDescuento;
    var descuento;
    var marcaLamparas;
    marcaLamparas=Marca.value;
    lamparas=txtIdCantidad.value;
    lamparas=parseInt(lamparas);
    precio=35;
    precioTotal=lamparas*precio;
    descuento=precioTotal*(50/100);
    precioConDescuento=precioTotal-(descuento);
    if(lamparas>5){
        txtIdprecioDescuento.value=precioConDescuento; 
    }

    //punto B
    var descuentoArgentinaLuz;
    var descuentoOtrasMarcas;
    var precioDescArgLuz;
    var precioOtrasMarcas;
    descuentoArgentinaLuz=precioTotal*(40/100);
    precioDescArgLuz=precioTotal-descuentoArgentinaLuz;
    descuentoOtrasMarcas=precioTotal*(30/100);
    precioOtrasMarcas=precioTotal-descuentoOtrasMarcas;
    if(lamparas==5&&marcaLamparas=="ArgentinaLuz"){
        txtIdprecioDescuento.value=precioDescArgLuz;
    }
    else{
        txtIdprecioDescuento.value=precioOtrasMarcas;
    }
    //punto C
    var descuentoArgLuzOFelipe;
    var descuentoOtraMarca;
    var precioDescArgOFelipe;
    var precioOtraMarca;
    descuentoArgLuzOFelipe=precioTotal*(25/100);
    precioDescArgOFelipe=precioTotal-descuentoArgLuzOFelipe;
    descuentoOtraMarca=precioTotal*(20/100);
    precioOtraMarca=precioTotal-descuentoOtraMarca;
    if(lamparas==4&&marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas"){
        txtIdprecioDescuento.value=precioDescArgOFelipe;
    }
    else{
        txtIdprecioDescuento.value=precioOtraMarca;
    }
    //punto D
    var descArgluz;
    var descFelipe;
    var descOtraMarca;
    var precioDescArgluz;
    var precioDescFelipe;
    var precioDescOtra;
    descArgluz=precioTotal*(15/100);
    precioDescArgluz=precioTotal-descArgluz;
    descFelipe=precioTotal*(10/100);
    precioDescFelipe=precioTotal-descFelipe;
    descOtraMarca=precioTotal*(5/100);
    precioDescOtra=precioTotal-descOtraMarca;
    if(lamparas==3&&marcaLamparas=="ArgentinaLuz"){
        txtIdprecioDescuento.value=precioDescArgluz;
    }
    else if(lamparas==3&&marcaLamparas=="FelipeLamparas"){
        txtIdprecioDescuento.value=precioDescFelipe;
    }
    else{
        txtIdprecioDescuento.value=precioDescOtra;
    }
    //punto E
    var ingresoBruto;
    var porcentaje;
    var precioDescuento;
    precioDescuento=txtIdprecioDescuento.value;
    precioDescuento=parseInt(precioDescuento);
    porcentaje=precioDescuento*(10/100);
    ingresoBruto=porcentaje+precioDescuento;
    if(txtIdprecioDescuento.value>120){
        alert("Usted pago $"+precioDescuento+" siendo $"+porcentaje+" el impuesto que se pagó.");
        txtIdprecioDescuento.value=ingresoBruto;
    }

}
