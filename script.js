function createGameBoard() {
 let tile = document.createElement('div');
 let board = document.querySelector('#Gameboard');
 let i = 0;
 while (i < 30) {
    let tile = document.createElement('div');
    board.appendChild(tile);
    board.lastChild.textContent = 'hello world';
    if (i < 5) {
        board.lastChild.classList.add('catagory');
    } else if ((i < 10) && (i > 4)) {
            board.lastChild.classList.add('onehundred');
    } else if ((i < 15) && (i > 9)) {
            board.lastChild.classList.add('twohundred');
    } else if ((i < 20) && (i > 14)) {
            board.lastChild.classList.add('threehundred');
    } else if ((i < 25) && (i > 19)) {
            board.lastChild.classList.add('fourhundred');
    } else if((i < 30) && (i > 24)){
            board.lastChild.classList.add('fivehundred');
    }
    i++;
 }
}


// create loop through the divs applying the catagory class name. 
// If index is between a certain number apply a certain class
