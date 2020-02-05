function createGameBoard() {
 let tile = document.createElement('div');
 let board = document.querySelector('#Gameboard');
 let i = 0;
 while (i < 30) {
    let tile = document.createElement('div');
    board.appendChild(tile);
    if (i < 5) {
        board.lastChild.classList.add('catagory');
    } else if ((i < 10) && (i > 4)) {
            board.lastChild.classList.add('onehundred');
            board.lastChild.textContent = '100';
    } else if ((i < 15) && (i > 9)) {
            board.lastChild.classList.add('twohundred');
            board.lastChild.textContent = '200';
    } else if ((i < 20) && (i > 14)) {
            board.lastChild.classList.add('threehundred');
            board.lastChild.textContent = '300';
    } else if ((i < 25) && (i > 19)) {
            board.lastChild.classList.add('fourhundred');
            board.lastChild.textContent = '400';
    } else if((i < 30) && (i > 24)){
            board.lastChild.classList.add('fivehundred');
            board.lastChild.textContent = '500';
    }
    i++;
 }
}