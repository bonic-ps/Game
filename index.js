let gameBoard = [
    ['1', '1', '1'],
    ['1', '1', '1'],
    ['1', '1', '1']
]
let board_length = 9;
let player = 'X' ;
let game = "start";
let playerTurn = document.getElementById('player');
let winner = document.getElementById('winner');

let handleClick = (eachCell) => {
    let gameTable = document.getElementsByTagName('table');
    // console.log('this is the length',b.cells.length)
    // console.log(eachCell); // console.log(eachCell.cellIndex); // console.log(eachCell.parentNode.rowIndex);
    let row = eachCell.parentNode.rowIndex;
    let col = eachCell.cellIndex;   // eachCell.innerHTML = "data"; // this is the easiest approach.
    // console.log(row, col);
// console.log(gameTable); // its an array that contains data that is inside the table; ([table, something, ...])
// console.log(gameTable[0]); // This selects the table data from the array; (table)
// console.log(gameTable[0].children); // this selects the data inside the table the table. eg:- [tbody]
// console.log(gameTable[0].children[0].children); // this gives data inside the tbody. eg:- [ tr, tr, tr]
// console.log(gameTable[0].children[0].children[0]); // this gives the first tr tag. eg:- <tr> </tr>
// cell is nothing but each individual block inside a row. here there are three rows and each row has 3 cells each(total 9 cells).
    let rowArray = gameTable[0].children[0].children;
    let cellArray = gameTable[0].children[0].children[row].children; console.log(rowArray, cellArray);
    let selectedCell = cellArray[col]; console.log(selectedCell)

if(game == "start"){

    if(gameBoard[row][col] == '1' && player == "X"){
        selectedCell.innerHTML = "X";
        gameBoard[row][col] = "X" ;
        game = checkWinner(gameBoard, "X");
        player = "O";
        if(game == "stop"){ 
            playerTurn.innerHTML = '';
        }
        else{ 
            playerTurn.innerHTML = "player O turn" ;
            winner.innerHTML = "";

        }
        board_length -- ;
     }
     else if(gameBoard[row][col] == '1' && player == "O"){
        selectedCell.innerHTML = "O";
        gameBoard[row][col] = "O";
        game = checkWinner(gameBoard, "O");
        player = "X";
        if(game == "stop"){ 
            playerTurn.innerHTML = '';
        }
        else{ 
            playerTurn.innerHTML = "player X turn" ;
            winner.innerHTML = "";
        }
        board_length -- ;
     }
     else{
        console.log("please click on an empty cell"); console.log(gameBoard);
        winner.innerHTML = "please click on an empty cell";
     }
    
 
     if(board_length <= 0 && game != "stop"){
        console.log("Its a draw!");
        document.getElementById('player').innerHTML = "";
        winner.innerHTML = "Its a draw!" ;
     }
}
else if(game == "stop"){
    console.log("please restart the game");
    document.getElementById('player').innerHTML = "please restart the game"
}
console.log(gameBoard)
}


function checkWinner(boardData, plyr){ 
   let resultH = horizontalTest(boardData, plyr);
   let resultV = verticalTest(boardData, plyr);
   let resultD = diagonalTest(boardData, plyr);
   if(resultH == plyr || resultV == plyr || resultD == plyr){
        console.log("The player " + plyr + " won");
        winner.innerHTML = "The player " + plyr + " won" ;
        return "stop"
   }
   else{
        return "start"
   }
}


function horizontalTest(boardData, plyr){ // 0 0
    for(let i=0; i<=2; i++){
        for(let j=0; j<2; j++){
            if(boardData[i][j] == boardData[i][j+1] && boardData[i][j] != "1"){
                if(j == 1){
                    return plyr
                }
            }
            else{
                break
            }
        }
    }
    return false
    // console.log(boardData, plyr);
    // for(let i=0,j=0; j<2; j++){ 
    //     if(boardData[i][j] === boardData[i][j+1]){
    //         console.log(boardData[i][j], boardData[i][j+1]);
    //         console.log("its working", j)
    //         if(j === 1){
    //             return plyr;
    //         }
    //     }
    //     else{
    //         console.log(boardData[i][j], boardData[i][j+1]);
    //         console.log("it has failed"); 
    //         return false
    //     }
    // }

}


function verticalTest(boardData, plyr){
    for(let j=0; j<=2; j++){
        for(let i=0; i<2; i++){
            if(boardData[i][j] == boardData[i+1][j] && boardData[i][j] != "1"){
                if(i == 1){
                    return plyr
                }
            }
            else{
                break
            }
        }
    }
    return false
}

function diagonalTest(boardData, plyr){
    let fd = true;
  for(let i=0; i<=2; i++){ console.log(boardData[i][i],boardData[i+1][i+1])
    if( boardData[i][i] != "1" && boardData[i][i] == boardData[i+1][i+1]  ){
        if(i == 1){
            return plyr
        }
    }
    else{
        console.log("forward diagonal failed"); break
    }
   }

   for(let i=0; i<=2; i++){ 
        if( boardData[i][2-i] != "1" && boardData[i][2-i] == boardData[i+1][2-i-1] ){
            if(i == 1){
                return plyr 
            }
            fd = false;
        }
        else{console.log("reverse diagonal failed"); break}       
  }
  return false
}

// let x = document.getElementById('bbc');  console.log(x.rows[0].cells);  console.log(x.rows); console.log(x.rows.item(0))
// let y = document.getElementsByTagName('tr');
//     console.log('this is the length',x.childNodes.innerHTML);
//     console.log('this is the length',y.length)
// console.log(x.firstChild); console.log(x.children[0].children)


