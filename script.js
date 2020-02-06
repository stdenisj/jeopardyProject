
let gameLogic = [
    catagory1 = {   
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
    catagory2 = {   
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
    catagory3 = {   
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
    catagory4 = {   
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
    catagory5 = {   
        name: 'cat5',
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
]

const startButton = document.querySelector('#Start')
let divsArr = [];
let board = document.querySelector('#Gameboard');
let tile = document.createElement('div');
const answerButtons = document.querySelectorAll('.answer');
// This function creates a variable to create 'div' elements and a variable to locate the '#GameBoard'      element. Then it runs the populateGameBoard function. Lastly it finds the classes of the newly           created elements and stores the elements in an array.

startButton.addEventListener('click', () => {
    handleClickEvent();
    console.log(event);
    if(board.lastChild == null) {
    createGameBoard();
    activateDivs();
} else {}
}
)

function createGameBoard() {
//  let tile = document.createElement('div');
//  let board = document.querySelector('#Gameboard');
 populateGameBoard(tile, board);
 divsArr = document.querySelectorAll('div.onehundred, div.twohundred, div.threehundred,                                                       div.fourhundred, div.fivehundred')

 divsArr.forEach(div => {
    //  div.classList.add('btn'); 
     div.setAttribute('data-toggle', 'modal');
     div.setAttribute('data-target', '#exampleModalCenter')
 })
}

answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(event);
    })
});

// This function adds an event listener to each of the created boxes on the 'GameBoard'.

function activateDivs() {
    divsArr.forEach(div => {
        div.addEventListener('click', (event) => {
            handleClickEvent();
            console.log(event);
            loadQestionAndAnswers(event);
        });
    });
}

// This function creates 30 div boxes. Then it goes through each row adding the 'catagory' class,           'value' class, and the textcontent.
function populateGameBoard(tile, board) {
 let CarArr = Object.keys(gameLogic);
 let t = 1
    while (t <= 30) {
        tile = document.createElement('div');
       board.appendChild(tile);
    if (t <= 5) {
        let l =gameLogic[t-1].name
        board.lastChild.classList.add(l);
        board.lastChild.textContent = gameLogic[t-1].name;   
    } else if (t <= 10) {
        let z = t - 6;
        let y = gameLogic[z].name
        board.lastChild.classList.add('onehundred', y);
        board.lastChild.textContent = '$100';    
    } else if (t <= 15){
        let z = t - 11;
        let y = gameLogic[z].name
        board.lastChild.classList.add('twohundred', y);
        board.lastChild.textContent = '$200'; 
    } else if (t <= 20) {
        let z = t - 16;
        let y = gameLogic[z].name
        board.lastChild.classList.add('threehundred', y);
        board.lastChild.textContent = '$300';
    } else if (t <= 25) {
        let z = t - 21;
        let y = gameLogic[z].name
        board.lastChild.classList.add('fourhundred', y);
        board.lastChild.textContent = '$400';
    } else if (t <= 30) {
        let z = t - 26;
        let y = gameLogic[z].name
        board.lastChild.classList.add('fivehundred', y);
        board.lastChild.textContent = '$500';  
    }
    t++
    }
}

function assignCategories() {
    for (let q = 0; q < 5; q++)
    if (q === 0) {
        board.querySelector('catagory1')
    }
}

function handleClickEvent() {
    event.preventDefault();
}
    
// function reload() {
//     board.refresh;
// }


function loadQestionAndAnswers (event) {
    let pointValue = event.target.classList[0];
    let cat = event.target.classList[1]
    console.log(pointValue)
    // console.log(cat);
    gameLogic.forEach(item => {
        if(item === cat) {
            console.log(cat);
        } else {    
        } 
    })
    
}

