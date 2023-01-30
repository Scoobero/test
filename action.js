document.addEventListener('DOMContentLoaded', function() {
    var squares = document.querySelectorAll(".square");
    var currentPlayer = "X";
    var game_over = false;

    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(event) {
            if(event.target.innerHTML !== '') return;
            event.target.innerHTML = currentPlayer;
           /* game_over = checkForWin()
            if (game_over === True)
             
                resetGame()*/
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });
        game_over = checkForWin(currentPlayer)
        /*if (game_over === True)
                resetGame()*/
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var squares = document.querySelectorAll(".square");
    var currentPlayer = "X";

    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(event) {
            if(event.target.innerHTML !== '') return;
            event.target.innerHTML = currentPlayer;
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });
    }
});

var playerXScore = 0;
var playerOScore = 0;


var board = [['', '', ''], ['', '', ''], ['', '', '']];


function checkForWin(currentPlayer) {
    
    for (var row = 0; row < board.length; row++) {
        if (board[row][0] === currentPlayer && board[row][1] === currentPlayer && board[row][2] === currentPlayer) {
            return true;
        }
    }
    
    for (var col = 0; col < board[0].length; col++) {
        if (board[0][col] === currentPlayer && board[1][col] === currentPlayer && board[2][col] === currentPlayer) {
            return true;
        }
    }
    
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return true;
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return true;
    }
    return false;
}


function checkForDraw() {
    for (var row = 0; row < board.length; row++) {
        for (var col = 0; col < board[row].length; col++) {
            if (board[row][col] === '') {
                return false;
            }
        }
    }
    return true;
}


function resetGame() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "";
    }
    currentPlayer = "X";
    board = [['', '', ''], ['', '', ''], ['', '', '']];
}


