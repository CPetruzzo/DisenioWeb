window.addEventListener('DOMContentLoaded', () => {
    // — Contact form (en index.html) —
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Gracias por contactarte con Beleza Concept. Te responderemos pronto.');
        this.reset();
      });
    }
  
    // — Tienda: renderizar productos y carrito (en tienda.html) —
    const grid = document.getElementById('product-grid');
    if (grid) {
      // Datos de ejemplo
      const products = [
        { id: 1, name: 'Serum Iluminador',    price: 45.00, img: 'background.png?text=Serum' },
        { id: 2, name: 'Crema Hidratante',    price: 30.00, img: 'background.png?text=Crema' },
        { id: 3, name: 'Mascarilla Facial',   price: 25.00, img: 'background.png?text=Mascarilla' },
        { id: 4, name: 'Aceite Nutritivo',    price: 35.00, img: 'background.png?text=Aceite' },
        { id: 5, name: 'Exfoliante Suave',    price: 28.00, img: 'background.png?text=Exfoliante' },
        { id: 6, name: 'Bruma Refrescante',   price: 22.00, img: 'background.png?text=Bruma' },
      ];
  
      // Render productos
      products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${p.img}" alt="${p.name}">
          <h4>${p.name}</h4>
          <p class="price">$${p.price.toFixed(2)}</p>
          <button class="add-to-cart" data-id="${p.id}">Agregar al carrito</button>
        `;
        grid.appendChild(card);
      });
  
      // Carrito
      let cart = {};
      const cartCount = document.querySelector('.cart-count');
      const cartPanel = document.getElementById('cart-panel');
      const cartItems = document.getElementById('cart-items');
      const cartTotal = document.getElementById('cart-total');
  
      function updateCartCount() {
        const count = Object.values(cart).reduce((sum, i) => sum + i.qty, 0);
        cartCount.textContent = count;
      }
  
      function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;
        for (let id in cart) {
          const item = cart[id];
          total += item.price * item.qty;
          const li = document.createElement('li');
          li.textContent = `${item.name} x${item.qty}`;
          const span = document.createElement('span');
          span.textContent = `$${(item.price * item.qty).toFixed(2)}`;
          li.appendChild(span);
          cartItems.appendChild(li);
        }
        cartTotal.textContent = total.toFixed(2);
      }
  
      // Manejadores globales
      document.addEventListener('click', e => {
        if (e.target.matches('.add-to-cart')) {
          const id = e.target.dataset.id;
          const prod = products.find(p => p.id == id);
          if (!cart[id]) cart[id] = { ...prod, qty: 0 };
          cart[id].qty++;
          updateCartCount();
          renderCart();
        }
        if (e.target.matches('.cart-icon')) {
          cartPanel.classList.add('open');
        }
        if (e.target.matches('#close-cart') || e.target.matches('#checkout-btn')) {
          cartPanel.classList.remove('open');
        }
      });
  
      // Inicializar
      updateCartCount();
      renderCart();
    }
  });
  