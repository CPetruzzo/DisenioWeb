let carrito = [];

function agregarAlCarrito(producto) {
    // Seleccionar los botones "Agregar al carrito"
    var botones = document.querySelectorAll("button");

    // Recorrer los botones y agregar un evento de clic
    botones.forEach(function (boton) {
        boton.addEventListener("click", function (evento) {
            // Evitar que el formulario se envíe
            evento.preventDefault();

            // Obtener el producto que se va a agregar
            var producto = this.parentElement;

            // Agregar el producto al carrito
            agregarAlCarrito(producto);
        });
    });
}

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
    carrito.push(producto);
    actualizarVistaCarrito();
}

function actualizarVistaCarrito() {
    let carritoContainer = document.getElementById("carrito-container");
    carritoContainer.innerHTML = "";

    carrito.forEach((producto) => {
        let productoElement = document.createElement("div");
        productoElement.classList.add("producto");
        productoElement.innerHTML = `
      <div class="producto-nombre">${producto.nombre}</div>
      <div class="producto-precio">$${producto.precio.toFixed(2)}</div>
    `;
        carritoContainer.appendChild(productoElement);
    });

    let totalElement = document.createElement("div");
    totalElement.classList.add("total");
    totalElement.innerHTML = `
    <div class="total-texto">Total:</div>
    <div class="total-precio">$${calcularTotal().toFixed(2)}</div>
  `;
    carritoContainer.appendChild(totalElement);
}

function calcularTotal() {
    let total = 0;
    carrito.forEach((producto) => {
        total += producto.precio;
    });
    return total;
}