

var playerX = { gamePiece: 'X'},
	playerO = { gamePiece: 'O' },
	currentPlayer,
	count = 0,
	boxes = [],
	board_history = [],
	valBoard = [['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
				];


function createBoard() {
	newGame();
	var board = document.createElement('table'), row, box;
		

	for (var i = 0; i < 20; i++) {
		row = document.createElement('tr');
		board.appendChild(row);
		for (var k = 0; k < 20; k++) {
			box = document.createElement('td');
			box.id = i*20+k;
			box.onclick = recordmove;
			boxes.push(box);
			row.appendChild(box);
		}
	};
	document.getElementById('caroBoard').appendChild(board);
};


function recordmove() {
	if (this.textContent !== '') return;
	switchPlayer(currentPlayer, this.id);
	this.textContent = currentPlayer.gamePiece;
};


function switchPlayer(player, id){
	if (count%2!==0){
		currentPlayer = playerO
		document.getElementsByTagName('td')[id].style.color = 'green';
	} else {
		currentPlayer = playerX
		document.getElementsByTagName('td')[id].style.color = 'red';
	}
	count+=1;
	board_history.push(id);
};


function newGame() {
	count = 0;
	currentPlayer = playerX;
	for (var i = 0; i < boxes.length; i++) {
		document.getElementsByTagName('td')[i].textContent = '';
	}
};


function undo(){
	if(board_history.length > 1){
		id = board_history.pop();
		count -= 1;
		// console.log(id);
		document.getElementsByTagName('td')[id].textContent = '';
	}
};


window.onload = function () {
	createBoard();
}