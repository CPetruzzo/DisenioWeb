// Seleccionar los botones "Agregar al carrito"
var botones = document.querySelectorAll("button");

// Recorrer los botones y agregar un evento de clic
botones.forEach(function(boton) {
  boton.addEventListener("click", function(evento) {
    // Evitar que el formulario se envíe
    evento.preventDefault();

    // Obtener el producto que se va a agregar
    var producto = this.parentElement;

    // Agregar el producto al carrito
    agregarAlCarrito(producto);
  });
});

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  // Crear un elemento "li" para el producto
  var li = document.createElement("li");

  // Obtener el nombre del producto
  var nombre = producto.querySelector("h2").textContent;

  // Obtener el precio del producto
  var precio = producto.querySelector("p:last-of-type").textContent;

  // Agregar el nombre y precio al elemento "li"
  li.textContent = nombre + " - " + precio;

  // Agregar el elemento "li" al carrito
  var carrito = document.querySelector("#carrito ul");
  carrito.appendChild(li);

  // Actualizar el total del carrito
  actualizarTotal(precio);
}

// Función para actualizar el total del carrito
function actualizarTotal(precio) {
  // Obtener el total actual
  var total = document.querySelector("#total span").textContent;

  // Convertir el precio a un número y sumarlo al total
  total = parseFloat(total) + parseFloat(precio.slice(1));

  // Actualizar el total en la página
  document.querySelector("#total span").textContent = "$" + total.toFixed(2);
}


// Array que contiene los elementos de la lista
var lista = [];

// Función para agregar un nuevo item a la lista
function agregarItem() {
    // Obtener el valor ingresado por el usuario
    var nuevoItem = document.getElementById("nuevoItem").value;

    // Agregar el nuevo item al array
    lista.push(nuevoItem);

    // Limpiar el campo de entrada
    document.getElementById("nuevoItem").value = "";

    // Actualizar la lista de items
    actualizarLista();
}

// Función para eliminar un item de la lista
function eliminarItem() {
    // Obtener el índice del item a eliminar
    var indice = document.getElementById("indice").value;

    // Eliminar el item del array
    lista.splice(indice, 1);

    // Limpiar el campo de entrada
    document.getElementById("indice").value = "";

    // Actualizar la lista de items
    actualizarLista();
}

// Función para actualizar la lista de items
function actualizarLista() {
    // Obtener el contenedor de la lista
    var contenedor = document.getElementById("lista");

    // Limpiar la lista actual
    contenedor.innerHTML = "";

    // Agregar cada item de la lista al contenedor
    for (var i = 0; i < lista.length; i++) {
        var elemento = document.createElement("li");
        elemento.appendChild(document.createTextNode(lista[i]));
        contenedor.appendChild(elemento);
    }
}


