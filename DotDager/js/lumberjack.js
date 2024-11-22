function adjustForDevice() {
    const iframe = document.getElementById('gameFrame');
    const width = window.innerWidth;

    // Detectamos si es un dispositivo móvil
    if (width < 768) {
        document.body.classList.add('mobile');
        document.body.classList.remove('desktop');
        adjustMobileGameSettings();
    } else {
        document.body.classList.add('desktop');
        document.body.classList.remove('mobile');
        adjustDesktopGameSettings();
    }
}

function adjustMobileGameSettings() {
    console.log("Ajustando para móvil...");
    // Aquí irían ajustes para la jugabilidad en móvil
}

function adjustDesktopGameSettings() {
    console.log("Ajustando para PC...");

    // Detectar las teclas presionadas: flechas izquierda (ArrowLeft) o tecla "A"
    // y flechas derecha (ArrowRight) o tecla "D"
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft" || event.key === "a") {
            console.log("Presionada flecha izquierda o tecla A, simulando clic izquierdo...");
            simulateClick("left");  // Simulamos clic izquierdo en el juego
        } else if (event.key === "ArrowRight" || event.key === "d") {
            console.log("Presionada flecha derecha o tecla D, simulando clic derecho...");
            simulateClick("right");  // Simulamos clic derecho en el juego
        } else if (event.key === "Enter") {
            console.log("Presionada tecla Enter, simulando clic en el botón de Play o Reset...");
            simulateClick("playOrReset");  // Simulamos clic en el botón de Play o Reset
        }
    });
}

function simulateClick(direction) {
    const gameFrame = document.getElementById("gameFrame");
    const frameDoc = gameFrame.contentDocument || gameFrame.contentWindow.document;

    if (direction === "left") {
        // Supón que el botón izquierdo en el juego tiene un id "left-button"
        const leftButton = frameDoc.querySelector("#left-button");
        if (leftButton) {
            leftButton.click(); // Simula un clic en el botón izquierdo
        }
    } else if (direction === "right") {
        // Supón que el botón derecho en el juego tiene un id "right-button"
        const rightButton = frameDoc.querySelector("#right-button");
        if (rightButton) {
            rightButton.click(); // Simula un clic en el botón derecho
        }
    } else if (direction === "playOrReset") {
        // Supón que el botón de play o reset tiene los ids "play-button" o "reset-button"
        const playButton = frameDoc.querySelector("#left-button");
        const resetButton = frameDoc.querySelector("#left-button");
        if (playButton) {
            playButton.click(); // Simula clic en el botón de Play
        } else if (resetButton) {
            resetButton.click(); // Si no hay play, simula clic en el botón de Reset
        }
    }
}

adjustForDevice();
window.onresize = adjustForDevice;