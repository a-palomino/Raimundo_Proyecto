//import { jsPDF } from "jspdf";

window.addEventListener("DOMContentLoaded", (event)=>{
    document.getElementById("btnEnviar").addEventListener("click", function(e){
        e.preventDefault();
        
        let tipo = document.getElementById("tipoDoc").value;
        let numFactura = document.getElementById("numFactura").value;
        let fecha = document.getElementById("fecha").value;
        let cliente = document.getElementById("cliente").value;
        let dirCliente = document.getElementById("direccion").value;
        let localidadCliente = document.getElementById("localidad").value;
        let conceptos = "1";

        //Hacer función para obtener los datos de los conceptos creados
        generarPDF(tipo,numFactura,fecha,cliente,dirCliente,localidadCliente,conceptos);
    });
});


const {jsPDF} = window.jspdf;
const doc = new jsPDF();

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
function generarPDF(tipo, numFactura, fecha,cliente,direccionCliente,localidadCliente, conceptos){
    
    let dni = "80081036G";
    let dirEmpresa = "Dirección 06140 TALAVERA LA REAL (BADAJOZ)";
    let posX = 0;
    let posY = 0;

    //Encabezado Doc
    doc.setFontSize(30);
    doc.text(tipo,19,20);
    doc.setDrawColor(255, 0, 0);
    doc.text("[" + numFactura + "]",80,20);

    doc.setFontSize(25);
    doc.text("RAIMUNDO SANTIAGO FERRERA",20,40);
    doc.setDrawColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(dni,20,50);
    doc.text(dirEmpresa,20,60);

    doc.addImage("../media/logo.jpeg", "JPEG",70,20);
    doc.line(19,70,200,70);




    let namePDF = tipo + numFactura;
    doc.save(namePDF+ ".pdf");


}