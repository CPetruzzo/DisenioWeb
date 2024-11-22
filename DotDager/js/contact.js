    // Seleccionar el botón y la sección
    const toggleButton = document.getElementById('toggleButton');
    const socialNetworks = document.getElementById('socialNetworks');

    // Agregar un evento de clic
    toggleButton.addEventListener('click', () => {
        const isActive = socialNetworks.classList.toggle('active');
        toggleButton.textContent = isActive ? "Ocultar" : "¡Contáctate conmigo!";
        toggleButton.setAttribute('aria-expanded', isActive);

    });
