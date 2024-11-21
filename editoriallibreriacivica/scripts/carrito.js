let carrito = [];

function agregarAlCarrito(libro) {
    carrito.push(libro);
    actualizarCarrito();
}

function actualizarCarrito() {
    let carritoHTML = '';
    carrito.forEach(libro => {
        carritoHTML += `<p>${libro.titulo} - $${libro.precio}</p>`;
    });
    document.getElementById('carrito').innerHTML = carritoHTML;
}

function checkout() {
    // Lógica para procesar el checkout
    alert('Compra realizada con éxito');
}
