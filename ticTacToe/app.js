var rowLength = 3;
var columnLength = rowLength;
	
$(function(){
	createBoard();
});

function createBoard() {
	
	console.log ("1");
	var row = [];
	for (i=1; i <= rowLength; i++) {
		row[i] = [];
		for (j=1; j <= columnLength; j++) {
			var currentUnit = "unknown";
			row[i][j] = currentUnit;
			console.log("2");
		}
	}
	renderBoard();
}

function renderBoard(){
	console.log("3");
	var boardHtml = '';
	for (i=1; i <= rowLength; i++) {
		boardHtml += '<div class="boardRow">';
		for (j=1; j <= columnLength; j++) {
			boardHtml += '<span class="unit empty"></span>';
		}
		boardHtml += '</div>';
	}
	$('.js-board').html(boardHtml);
	console.log(4);
}	