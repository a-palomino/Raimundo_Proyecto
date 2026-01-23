//import { jsPDF } from "jspdf";

window.addEventListener("DOMContentLoaded", (event)=>{
    document.getElementById("btnEnviar").addEventListener("click", function(e){
        e.preventDefault();
        
        let tipo = document.getElementById("tipoDoc").value;
        console.log(tipo);
        let numFactura = document.getElementById("numFactura").value;
        console.log(numFactura);
        let fecha = document.getElementById("fecha").value;
        let cliente = document.getElementById("cliente").value;
        let dirCliente = document.getElementById("direccion").value;
        let localidadCliente = document.getElementById("localidad").value;
        let conceptos = datosConceptos();
        let imagenLogo = document.getElementById("imgLogo");

        //Hacer función para obtener los datos de los conceptos creados
        generarPDF(tipo,numFactura,fecha,cliente,dirCliente,localidadCliente,conceptos,imagenLogo);
    });
});


const {jsPDF} = window.jspdf;
const doc = new jsPDF();
let precioTotal = 0;

/**
 * 
 * @param {String} tipo 
 * @param {String} numFactura
 * @param {String} fecha 
 * @param {String} cliente 
 * @param {String} direccionCliente 
 * @param {String} localidadCliente 
 * @param {Array} conceptos 
 */
function generarPDF(tipo, numFactura, fecha,cliente,direccionCliente,localidadCliente, conceptos, imagenLogo){
    
    let dni = "80081036G";
    let dirEmpresa = "Dirección 06140 TALAVERA LA REAL (BADAJOZ)";
    let posX = 0;
    let posY = 0;

    //Encabezado Doc
    doc.setFontSize(30);
    doc.text(tipo,19,20);
    doc.setTextColor(255, 0, 0);
    doc.text("[" + numFactura + "]",80,20);

    doc.setFontSize(15);
    doc.text("RAIMUNDO SANTIAGO FERRERA",20,40);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(dni,20,50);
    doc.text(dirEmpresa,20,60);

    doc.addImage(imagenLogo, "JPEG",125,30, 30,30);
    doc.setDrawColor(255, 0, 0);
    doc.line(19,70,200,70);

    //FECHA
    doc.setTextColor(255, 0, 0);
    doc.text("Fecha", 20,80);
    doc.setTextColor(0, 0, 0);
    doc.text(fecha,20,85);
    //CLIENTE
    doc.setTextColor(255, 0, 0);
    doc.text("Para", 70,80);
    doc.setTextColor(0, 0, 0);
    doc.text(cliente,70,85);
    doc.text(direccionCliente,70,90);
    doc.text(localidadCliente,70,95);

    doc.line(19,105,200,105);

    
    const headers = ["Descripción", "Cantidad","Precio Unidad","Total"];
    
    doc.autoTable(headers,conceptos,{
    startY: 115,
    headStyles: {fillColor: [255,0,0]} 
});
    posY = doc.lastAutoTable.finalY;
    doc.text("TOTAL",100,posY+10);
    doc.text(precioTotal.toString(),150,posY+10);

    let namePDF = tipo + numFactura;
    doc.save(namePDF+ ".pdf");


}

/**
 * Devuelve un array con los valores de los conceptos
 * 0: Descripción; 1: Cantidad; 2:Precio
 */
function datosConceptos(){
    let nodeConceptos = document.getElementById("conceptos");
    let divsConceptos = nodeConceptos.querySelectorAll("div");
    let numConceptos = divsConceptos.length;

    let conceptos = [];
    let subtotal = 0;
    //let conceptoIterator = 1;
    for(let i = 1; i <= numConceptos; i++){
        
        let auxDes = "descripcion"+i;
        let auxCan = "cantidad"+i;
        let auxPre = "precioUnidad"+i;
        let desc = document.getElementById(auxDes).value;
        let cantidad = document.getElementById(auxCan).value;
        let precio = document.getElementById(auxPre).value;
        let total = parseFloat(cantidad) * parseFloat(precio);
        total = total.toFixed(2);
        subtotal += total;
        console
        let auxConcepto = [desc,cantidad,precio,total];
        conceptos.push(auxConcepto);
    }   
    
    let iva = (21 * subtotal) / 100;
    precioTotal = subtotal + iva;
    precioTotal = precioTotal.toFixed(2);
    let auxSubtotal = ["","","Subtotal",subtotal.toFixed(2)];
    let auxIva = ["","","Iva 21%",iva.toFixed(2)];
    
    conceptos.push(auxSubtotal);
    conceptos.push(auxIva);
    return conceptos;
}


