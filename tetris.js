var board = [];
var rows = 20;
var cols = 10;
var blockWidth = 20;
var blockHeight = 20;

// Initialize the game board
for (var i = 0; i < rows; i++) {
	board[i] = [];
	for (var j = 0; j < cols; j++) {
		board[i][j] = 0;
	}
}

// Draw the game board
function drawBoard() {
	var html = '';
	for (var i = 0; i < rows; i++) {
		html += '<div class="row">';
		for (var j = 0; j < cols; j++) {
			if (board[i][j] == 0) {
				html += '<div class="square empty"></div>';
			} else {
				html += '<div class="square block"></div>';
			}
		}
		html += '</div>';
	}
	document.getElementById('gameboard').innerHTML = html;
}

// Update the game board
function updateBoard() {
    // Mover la pieza actual hacia abajo
    currentPiece.y++;

    // Verificar si la pieza actual colisiona con otra pieza
    if (checkCollision(currentPiece)) {
        // Si colisiona, revertir el movimiento hacia abajo
        currentPiece.y--;
        // Agregar la pieza actual al tablero de juego
        addPieceToBoard(currentPiece);
        // Generar una nueva pieza aleatoria
        currentPiece = generateRandomPiece();
    }

    // Actualizar el tablero con las piezas existentes
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] !== 0) {
                // Si la celda del tablero no está vacía, dibujar una pieza
                drawBlock(j, i, board[i][j]);
            } else {
                // Si la celda del tablero está vacía, dibujar un cuadrado vacío
                drawEmptyBlock(j, i);
            }
        }
    }

    // Dibujar la pieza actual en el tablero
    drawPiece(currentPiece);
}


// Detectar eventos de teclado
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37) {
        // Mover la pieza a la izquierda
        currentPiece.x--;
        // Verificar si la nueva posición colisiona con otra pieza
        if (checkCollision(currentPiece)) {
            // Si hay colisión, revertir el movimiento
            currentPiece.x++;
        }
    } else if (event.keyCode === 39) {
        // Mover la pieza a la derecha
        currentPiece.x++;
        // Verificar si la nueva posición colisiona con otra pieza
        if (checkCollision(currentPiece)) {
            // Si hay colisión, revertir el movimiento
            currentPiece.x--;
        }
    } else if (event.keyCode === 40) {
        // Mover la pieza hacia abajo
        currentPiece.y++;
        // Verificar si la nueva posición colisiona con otra pieza
        if (checkCollision(currentPiece)) {
            // Si hay colisión, revertir el movimiento
            currentPiece.y--;
            // Agregar la pieza actual al tablero de juego
            addPieceToBoard(currentPiece);
            // Generar una nueva pieza aleatoria
            currentPiece = generateRandomPiece();
        }
    }
});


// Start the game loop
function gameLoop() {
	updateBoard();
	drawBoard();
	setTimeout(gameLoop, 500);
}

// Obtener el botón de inicio por su ID
var startButton = document.getElementById("start-button");

// Agregar un event listener para cuando se haga clic en el botón
startButton.addEventListener("click", function() {
    // Iniciar el bucle principal del juego
    gameLoop();
});
