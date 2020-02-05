
let gameLogic = {
    catagory1:  {   
       name: 'Engines',
        one: {
                question:       'question1',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:   'correctAnswer',
        },
        two: {                            
                question:       'question2',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
        three: {       
                question:       'question3',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
        four: {    
                question:       'question4',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },                            
        five: {                            
                question:       'question5',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
    },
    catagory2: {   
        name: 'Manufacturer',
        one: {
                question:       'question1',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:   'correctAnswer',
        },
        two: {                            
                question:       'question2',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
        three: {       
                question:       'question3',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
        four: {    
                question:       'question4',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },                            
        five: {                            
                question:       'question5',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
    },
    catagory3: {   
        name: 'Models',
        one: {
                question:       'question1',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:   'correctAnswer',
        },
        two: {                            
                question:       'question2',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
        three: {       
                question:       'question3',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
        four: {    
                question:       'question4',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },                            
        five: {                            
                question:       'question5',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
    },
    catagory4: {   
        name: 'Racing',
        one: {
                question:       'question1',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:   'correctAnswer',
        },
        two: {                            
                question:       'question2',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
        three: {       
                question:       'question3',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
        four: {    
                question:       'question4',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },                            
        five: {                            
                question:       'question5',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
    },
    catagory5: {   
        name: 'cat 5',
        one: {
                question:       'question1',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:   'correctAnswer',
        },
        two: {                            
                question:       'question2',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
        three: {       
                question:       'question3',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
        four: {    
                question:       'question4',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },                            
        five: {                            
                question:       'question5',
                answerOne:      'answerOne',
                answerTwo:      'answerTwo',
                answerThree:    'answerThree',
                correctAnswer:  'correctAnswer',
        },
    },
}

const startButton = document.querySelector('#Start')
let divsArr = [];
let board = document.querySelector('#Gameboard');
let tile = document.createElement('div');

// This function creates a variable to create 'div' elements and a variable to locate the '#GameBoard'      element. Then it runs the populateGameBoard function. Lastly it finds the classes of the newly           created elements and stores the elements in an array.

startButton.addEventListener('click', () => {
    handleClickEvent();
    createGameBoard();
    activateDivs();
}
)

function createGameBoard() {
//  let tile = document.createElement('div');
//  let board = document.querySelector('#Gameboard');
 populateGameBoard(tile, board);
 divsArr = document.querySelectorAll('div.onehundred, div.twohundred, div.threehundred,                                                       div.fourhundred, div.fivehundred')
}

// This function adds an event listener to each of the created boxes on the 'GameBoard'.

function activateDivs() {
    divsArr.forEach(div => {
        div.addEventListener('click', (event) => {
            handleClickEvent();
            console.log(event);
        });
    });
}

// This function creates 30 div boxes. Then it goes through each row adding the 'catagory' class,           'value' class, and the textcontent.
function populateGameBoard(tile, board) {
 let CarArr = Object.keys(gameLogic);
 let t = 0
    while (t < 30) {
        tile = document.createElement('div');
       board.appendChild(tile);
    if (t < 5) {
        board.lastChild.classList.add('catagory' + t);    
    } else if (t < 10) {
        let z = t - 5;
        board.lastChild.classList.add('onehundred', `${CarArr[z]}`);
        board.lastChild.textContent = '$100';    
    } else if (t < 15){
        let z = t - 10;
        board.lastChild.classList.add('twohundred', `${CarArr[z]}`);
        board.lastChild.textContent = '$200'; 
    } else if (t < 20) {
        let z = t - 15;
        board.lastChild.classList.add('threehundred', `${CarArr[z]}`);
        board.lastChild.textContent = '$300';
    } else if (t < 25) {
        let z = t - 20;
        board.lastChild.classList.add('fourhundred', `${CarArr[z]}`);
        board.lastChild.textContent = '$400';
    } else if (t < 30) {
        let z = t - 25;
        board.lastChild.classList.add('fivehundred', `${CarArr[z]}`);
        board.lastChild.textContent = '$500';  
    }
    t++
}
};


function handleClickEvent() {
    event.preventDefault();
}
    
// }