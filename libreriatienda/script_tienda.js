// document.addEventListener('DOMContentLoaded', () => {
//     const searchInput = document.getElementById('search');
//     const productList = document.getElementById('product-list');
//     const products = productList.getElementsByClassName('product');
//     const cartItems = document.getElementById('cart-items');
//     const cartTotal = document.getElementById('cart-total');
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');

//     // Función para actualizar el carrito
//     function updateCart() {
//         let total = 0;
//         const itemQuantities = {};

//         // Contar las cantidades de cada producto seleccionado
//         checkboxes.forEach(checkbox => {
//             if (checkbox.checked) {
//                 const productName = checkbox.id;
//                 const productValue = checkbox.value.split(' - $');
//                 const productPrice = parseFloat(productValue[1]);

//                 if (!itemQuantities[productName]) {
//                     itemQuantities[productName] = { name: productValue[0], price: productPrice, quantity: 0 };
//                 }
//                 itemQuantities[productName].quantity += 1;
//             }
//         });

//         console.log('itemQuantities', itemQuantities); // Verificar el contenido de itemQuantities

//         cartItems.innerHTML = ''; // Limpiar el carrito antes de agregar ítems

//         // Crear y agregar los ítems al carrito
//         Object.keys(itemQuantities).forEach(productName => {
//             const item = itemQuantities[productName];
//             const listItem = document.createElement('li');
//             listItem.classList.add('cart-item');
//             listItem.dataset.productName = productName;
//             listItem.innerHTML = `
//                 <span class="item-name">${item.name}</span>
//                 <span class="item-price">$${item.price.toFixed(2)}</span>
//                 <span class="item-quantity">
//                     <button class="btn btn-secondary btn-sm adjust-quantity" data-action="decrease">-</button>
//                     <span class="quantity">${item.quantity}</span>
//                     <button class="btn btn-secondary btn-sm adjust-quantity" data-action="increase">+</button>
//                 </span>
//                 <button class="btn btn-danger btn-sm remove-item" type="button">Eliminar</button>
//             `;
//             cartItems.appendChild(listItem);

//             total += item.price * item.quantity; // Sumar el precio total
//         });

//         cartTotal.textContent = `$${total.toFixed(2)}`;
//     }

//     // Actualizar el carrito cuando cambian los checkboxes
//     checkboxes.forEach(checkbox => {
//         checkbox.addEventListener('change', updateCart);
//     });

//     // Función para ajustar la cantidad de un ítem en el carrito
//     cartItems.addEventListener('click', (event) => {
//         const target = event.target;

//         if (target.classList.contains('remove-item')) {
//             const item = target.closest('li');
//             const productName = item.dataset.productName;

//             // Desmarcar el checkbox correspondiente
//             const checkbox = Array.from(checkboxes).find(cb => cb.id === productName);
//             if (checkbox) {
//                 checkbox.checked = false;
//             }

//             item.remove(); // Eliminar el ítem del carrito
//             updateCart(); // Actualizar el carrito para recalcular el total
//         } else if (target.classList.contains('adjust-quantity')) {
//             const action = target.dataset.action;
//             const item = target.closest('li');
//             const productName = item.dataset.productName;

//             // Ajustar la cantidad del ítem
//             const quantityElem = item.querySelector('.quantity');
//             let quantity = parseInt(quantityElem.textContent);

//             const checkbox = Array.from(checkboxes).find(cb => cb.id === productName);

//             if (action === 'increase') {
//                 quantity += 1;
//                 if (!checkbox.checked) {
//                     checkbox.checked = true;
//                 }
//             } else if (action === 'decrease') {
//                 quantity -= 1;
//                 if (quantity <= 0) {
//                     quantity = 0;
//                     checkbox.checked = false;
//                     item.remove(); // Eliminar el ítem si la cantidad es 0
//                 }
//             }

//             quantityElem.textContent = quantity;
//             updateCart(); // Actualizar el carrito para recalcular el total
//         }
//     });

//     // Filtro de productos
//     searchInput.addEventListener('input', function () {
//         const filter = searchInput.value.toLowerCase().split(" ");
//         Array.from(products).forEach(function (product) {
//             const productName = product.getAttribute('data-product-name').toLowerCase();
//             const productAuthor = product.getAttribute('data-product-author').toLowerCase();

//             // Comprobar si todas las palabras clave se encuentran en el nombre o autor
//             const matches = filter.every(term => productName.includes(term) || productAuthor.includes(term));

//             if (matches) {
//                 product.style.display = '';
//             } else {
//                 product.style.display = 'none';
//             }
//         });
//     });

//     // Actualizar el carrito al cargar la página
//     updateCart();
// });


document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const productList = document.getElementById('product-list');
    const products = productList.getElementsByClassName('product');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Filtro de productos
    searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toLowerCase();

        Array.from(products).forEach(function (product) {
            const productName = product.getAttribute('data-product-name').toLowerCase();

            product.style.display = productName.includes(filter) ? '' : 'none';
        });
    });

    // Manejo del clic en productos
    productList.addEventListener('click', function (e) {
        if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
            const checkbox = e.target;
            const productContent = checkbox.closest('.product-content');
            const productName = productContent.querySelector('h3').textContent;
            const productPrice = parseFloat(productContent.querySelector('p').textContent.match(/\$([\d.]+)/)[1]);

            checkbox.checked ? addProductToCart(productName, productPrice) : removeProductFromCart(productName);
        }
    });

    // Función para añadir producto al carrito
    function addProductToCart(name, price) {
        let existingItem = cartItems.querySelector(`li[data-product-name="${name}"]`);
        if (existingItem) {
            let quantityInput = existingItem.querySelector('.quantity');
            quantityInput.value = parseInt(quantityInput.value) + 1;
        } else {
            const newItem = document.createElement('li');
            newItem.setAttribute('data-product-name', name);
            newItem.innerHTML = `
                ${name} - $${price.toFixed(2)} 
                <input type="number" class="quantity" name="quantity_${name}" value="1" min="1">
                <button class="remove-item">Eliminar</button>
            `;
            cartItems.appendChild(newItem);
        }
        updateTotal();
    }
    

    // Función para eliminar producto del carrito
    function removeProductFromCart(name) {
        let existingItem = cartItems.querySelector(`li[data-product-name="${name}"]`);
        if (existingItem) {
            cartItems.removeChild(existingItem);
        }
        updateTotal();
    }

    // Actualizar el total
    function updateTotal() {
        let total = 0;
        cartItems.querySelectorAll('li').forEach(item => {
            const price = parseFloat(item.textContent.match(/\$([\d.]+)/)[1]);
            const quantity = item.querySelector('.quantity').value;
            total += price * quantity;
        });
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Manejo del clic en el botón "Eliminar"
    cartItems.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-item')) {
            const item = e.target.closest('li');
            const productName = item.getAttribute('data-product-name');
            removeProductFromCart(productName);
        }
    });

    // Manejo de cambio en la cantidad de productos
    cartItems.addEventListener('input', function (e) {
        if (e.target.classList.contains('quantity')) {
            updateTotal();
        }
    });
});
