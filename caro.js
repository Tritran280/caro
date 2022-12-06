

(function () {
 
	var 
		playerX = { gamePiece: 'X'},
	  	playerO = { gamePiece: 'O' },
	  	currentPlayer,
	  	boxes = []
   
	createBoard = function () {
		newGame();
		var board = document.createElement('table'),
			row, box;
   
		for (var i = 0; i < 20; i++) {
			row = document.createElement('tr');
			board.appendChild(row);
			for (var k = 0; k < 20; k++) {
			  	box = document.createElement('td');
				box.onclick = recordMove;
				boxes.push(box);
				row.appendChild(box);
			}
		}
		document.getElementById('caroBoard').appendChild(board);
	}
   
   
	recordMove = function () {
		if (this.textContent !== '') return;
		this.textContent = currentPlayer.gamePiece;
		switchPlayer(currentPlayer);
	}
   
   
	switchPlayer = function (player) {
		currentPlayer = (player === playerX) ? playerO : playerX;
	}
   
	  // Reset the game board
	newGame = function () {
		currentPlayer = playerX;
		for (var i = 0; i < boxes.length; i++) {
			document.getElementsByTagName('TD')[i].textContent = '';
		}
	}
   
	window.onload = function () {
	  	createBoard();
	}
	
})();
