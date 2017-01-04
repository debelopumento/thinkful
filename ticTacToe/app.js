var rowLength = 3;
var columnLength = rowLength;
	
$(function(){
	renderBoard();
});


function renderBoard(){
	console.log("3");
	var boardHtml = '';
	for (i=1; i <= rowLength; i++) {
		boardHtml += '<div class="boardRow">';
		for (j=1; j <= columnLength; j++) {
			boardHtml += '<span class="unit empty js-unit">' + i + ', ' + j + '</span>';
		}
		boardHtml += '</div>';
	}
	$('.js-board').html(boardHtml);
	console.log(4);
	playGame();
}

function playGame() {
	
	var row = [];
	for (i=1; i <= rowLength; i++) {
		row[i] = [];
		for (j=1; j <= columnLength; j++) {
			var currentUnit = "unknown";
			row[i][j] = currentUnit;
			console.log("2");
		}
	}
	
	var XsTurn = true;
	
	$('.js-unit').click(function(event){
		console.log(this);
		var coordinate = $(this).text();
		var currentRow = coordinate[0];
		var currentColumn = coordinate[3];
		if (XsTurn===true) {
			$(event.currentTarget).toggleClass('X');
			row[currentRow][currentColumn] = "X";
		}
		else {
			$(event.currentTarget).toggleClass('O');
			row[currentRow][currentColumn] = "O";
		}
		console.log("currentRow", currentRow, "currentColumn", currentColumn);
		
		//check if game is finished
		var gameOver = true;
		//check row
		for (j=1; j <=3; j++) {
			if (row[currentRow][currentColumn] != row[currentRow][j]) {gameOver = false;}
		}
		if (gameOver===true) {alertFinish();}
		//check column
		for (i=1; i <=3; i++) {
			if (row[currentRow][currentColumn] != row[i][currentColumn]) {gameOver = false;}
		}
		if (gameOver===true) {alertFinish();}
		//check diagonal
		if (row[1,1]===row[currentRow][currentColumn] && row[2,2]===row[currentRow][currentColumn] && row[3,3]===row[currentRow][currentColumn]) {alertFinish();}
		if (row[1,3]===row[currentRow][currentColumn] && row[2,2]===row[currentRow][currentColumn] && row[3,1]===row[currentRow][currentColumn]) {alertFinish();}
		//

		XsTurn = !XsTurn;
	});	
}

function alertFinish(){
	alert("Game Over");
}	
	