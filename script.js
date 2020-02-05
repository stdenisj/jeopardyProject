function createGameBoard() {
 let tile = document.createElement('div');
 let i = 0;
 while (i < 30) {
    let tile = document.createElement('div');
    document.querySelector('#Gameboard').appendChild(tile);
    document.querySelector('#Gameboard').lastChild.textContent = 'hello world';
    i++;
 }
}


// create loop through the divs applying the catagory class name. 
// If index is between a certain number apply a certain class