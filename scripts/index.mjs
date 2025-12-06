//Event listener botones

window.addEventListener("DOMContentLoaded", (event)=>{
    document.getElementById("btnAnadir").addEventListener("click", function(e){
        e.preventDefault();
        anadirConcepto();
    });

});













//Funciones form

/**
 * Crea un componente nuevo de concepto y lo devuelve 
 * @returns Node, Nuevo concepto dentro de un div
 */
function crearNodoConcepto(){
    let nodeConceptos = document.getElementById("conceptos");
    let divsConceptos = nodeConceptos.querySelectorAll("div");
    let numConceptos = divsConceptos.length;

    //names and id nodo
    let descripcionNodo = "descripcion" + (numConceptos+1);
    let cantidadNodo = "cantidad" + (numConceptos+1);
    let precioNodo = "precioUnidad" + (numConceptos+1);
    let btnID = "eliminar" + (numConceptos+1);
    let nodoID = "nodo" + (numConceptos+1);

    //Creamos un nodo

    //Descripción
    let labelDescripcion = document.createElement("label");
    labelDescripcion.setAttribute("for",descripcionNodo);
    let labelDescripcionText = document.createTextNode("Descripción");
    labelDescripcion.appendChild(labelDescripcionText);

    let inputDescripcion = document.createElement("input");
    inputDescripcion.setAttribute("type", "text");
    inputDescripcion.setAttribute("name", descripcionNodo);
    inputDescripcion.setAttribute("id", descripcionNodo);

    //Cantidad
    let labelCantidad = document.createElement("label");
    labelCantidad.setAttribute("for",cantidadNodo);
    let labelCantidadText = document.createTextNode("Cantidad");
    labelCantidad.appendChild(labelCantidadText);

    let inputCantidad = document.createElement("input");
    inputCantidad.setAttribute("type", "number");
    inputCantidad.setAttribute("name", cantidadNodo);
    inputCantidad.setAttribute("id", cantidadNodo);
    inputCantidad.setAttribute("value", 1);
    inputCantidad.setAttribute("min", 1);

    //Precio unidad
    let labelPrecio = document.createElement("label");
    labelPrecio.setAttribute("for",precioNodo);
    let labelPrecioText = document.createTextNode("Precio por unidad");
    labelPrecio.appendChild(labelPrecioText);

    let inputPrecio = document.createElement("input");
    inputPrecio.setAttribute("type", "number");
    inputPrecio.setAttribute("name", precioNodo);
    inputPrecio.setAttribute("id", precioNodo);
    inputPrecio.setAttribute("value", 0);
    inputPrecio.setAttribute("min", 0);

    //Btn remove
    let btnEliminar = document.createElement("button");
    let btnTexto = document.createTextNode("Eliminar");
    btnEliminar.setAttribute("class","btn btn-danger");
    btnEliminar.setAttribute("id", btnID);
    btnEliminar.appendChild(btnTexto);
    btnEliminar.addEventListener("click", function(e){
        let parentDiv = document.getElementById(nodoID);
        parentDiv.remove();
    });
    //Div
    let divNodo = document.createElement("div");
    divNodo.setAttribute("class", "mb-3");
    divNodo.setAttribute("id", nodoID);

    divNodo.appendChild(labelDescripcion);
    divNodo.appendChild(inputDescripcion);
    divNodo.appendChild(labelCantidad);
    divNodo.appendChild(inputCantidad);
    divNodo.appendChild(labelPrecio);
    divNodo.appendChild(inputPrecio);
    divNodo.appendChild(btnEliminar);


    return divNodo;
}


function anadirConcepto(){
    

    

    let nodeConceptos = document.getElementById("conceptos");
    let btnAnadir = document.getElementById("btnAnadir");
    let nuevoConcepto = crearNodoConcepto();

    nodeConceptos.insertBefore(nuevoConcepto,btnAnadir);
    //nodeConceptos.appendChild(nuevoConcepto);

    
}