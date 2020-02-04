function createGameBoard() {
 let tile = document.createElement('div');
 let i = 0;
 while (i < 30) {
    let tile = document.createElement('div');
    document.body.appendChild(tile);
    i++;
 }
}