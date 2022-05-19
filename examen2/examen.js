let item = 0;


function test() {


    item++;
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");





    var categoria = document.getElementById('categoria').value;
    var categoria = "";
    if (categoria == 1) {
        categoria = "categoria";

    } else if (categoria == 2) { categoria= "Alimentos"; } 
    else if (categoria == 3) { categoria = "Lacteos"; } 
    else if (categoria== 4) { categoria = "Lipidos"; } 
    else if (categoria == 5) { categoria = "Detergentes"; } 
    else { categoria = "nada" }



 

    var fil = document.createElement("tr");
    var celda_almacen = document.createElement("td")
    var celda_producto= document.createElement("td");
    var celda_precio = document.createElement("td");
    var celda_cantidad = document.createElement("td");
    var celda_accion = document.createElement("td");
    celda_categoria.innerHTML = categoria;
    celda_producto.innerHTML = producto;
    celda_precio.innerHTML = precio;
    celda_cantidad.innerHTML = cantidad;
    celda_accion.innerHTML="<a href='#' class='icono2' onclick='editar(this)'><i class='fa-solid fa-pencil'></i> </a>"
    +"<a href='#' class='icono1' onclick='eliminar(this)'><i class='fa-solid fa-ban'></i></a>";

    fil.appendChild(celda_almacen);
    fil.appendChild(celda_categoria);
    fil.appendChild(celda_producto);
    fil.appendChild(celda_precio);
    fil.appendChild(celda_cantidad);
    fil.appendChild(celda_accion);
    tbody.appendChild(fil);
    table.appendChild(tbody);
    limpiar();

}
function limpiar(){
    nombre.value = "";
    nombre.focus();
}
function eliminar(row){
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
}
function editar(row){
    fila = row.parentNode.parentNode;
    nombre.value = fila.cells[1].innerHTML;
    
}