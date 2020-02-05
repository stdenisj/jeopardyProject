
let gameLogic = {
    catagory1:  {   
                    name: '',
                    one: {
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:   '',
                    },
                    two: {                            
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
                    three: {       
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
                    four: {    
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },                            
                    five: {                            
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
    },
    catagory2: {
                    name: '',
                    one: {
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:   '',
                    },
                    two: {                            
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
                    three: {       
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
                    four: {    
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '', 
                    },                           
                    five: {                            
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
    },
    catagory3: {
                    name: '',
                    one: {
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:   '',
                    },
                    two: {                            
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
                    three: {       
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
                    four: {    
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },                            
                    five: {                            
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
    },
    catagory4: {
                    name: '',
                    one: {
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:   '',
                    },
                    two: {                            
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
                    three: {       
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
                    four: {    
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },                          
                    five: {                            
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
    },
    catagory5: {
                    name: '',
                    one: {
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:   '',
                    },
                    two: {                            
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
                    three: {       
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
                    four: {    
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },                            
                    five: {                            
                            question:       '',
                            answerOne:      '',
                            answerTwo:      '',
                            answerThree:    '',
                            correctAnswer:  '',
                    },
    },
}

let divsArr = [];

function createGameBoard() {
 let tile = document.createElement('div');
 let board = document.querySelector('#Gameboard');
//  addClassAndValue(tile, board);
 let i = 0;
 while (i < 30) {
    let tile = document.createElement('div');
    board.appendChild(tile);
    if (i < 5) {
        board.lastChild.classList.add('catagory' + i);
    } else if ((i < 10) && (i > 4)) {
            board.lastChild.classList.add('onehundred');
            board.lastChild.textContent = '$100';
    } else if ((i < 15) && (i > 9)) {
            board.lastChild.classList.add('twohundred');
            board.lastChild.textContent = '$200';
    } else if ((i < 20) && (i > 14)) {
            board.lastChild.classList.add('threehundred');
            board.lastChild.textContent = '$300';
    } else if ((i < 25) && (i > 19)) {
            board.lastChild.classList.add('fourhundred');
            board.lastChild.textContent = '$400';
    } else if((i < 30) && (i > 24)){
            board.lastChild.classList.add('fivehundred');
            board.lastChild.textContent = '$500';
    }
    i++;
}
divsArr = document.querySelectorAll('div.onehundred, div.twohundred, div.threehundred, div.fourhundred, div.fivehundred')
}

function activateDivs() {
    divsArr.forEach(div => {
        div.addEventListener('click', (event) => {
            console.log(event);
        })
    })
}

// function addClassAndValue(tile, board) {
//  let i = 0
//  while (i < 6) {
//         if (i === 0) {
//             for(let j = 0; j < 5; j++) {
//                 board.appendChild(tile);
//                 board.lastChild.classList.add('catagory' + j);
//             }
//         } else if (i === 1) {
//             for(let j = 0; j < 5; j++) {
//                 board.appendChild(tile);
//                 board.lastChild.classList.add('catagory' + j);
//                 board.lastChild.textContent = '$100';
//             }
//         } else if (i === 2) {
//             for(let j = 0; j < 5; j++) {
//                 board.appendChild(tile);
//                 board.lastChild.classList.add('catagory' + j);
//                 board.lastChild.textContent = '$200';
//             }
//         } else if (i === 3) {
//             for(let j = 0; j < 5; j++) {
//                     board.appendChild(tile);
//                     board.lastChild.classList.add('catagory' + j);
//                     board.lastChild.textContent = '$300';
//             }
//         } else if (i === 4) {
//             for(let j = 0; j < 5; j++) {
//                 board.appendChild(tile);
//                 board.lastChild.classList.add('catagory' + j);
//                 board.lastChild.textContent = '$400';
//             }
//         } else if (i === 5) {
//             for(let j = 0; j < 5; j++) {
//                 board.appendChild(tile);
//                 board.lastChild.classList.add('catagory' + j);
//                 board.lastChild.textContent = '$500';
//             }
//         }
//         i++
//     }
// }