
let gameLogic = [
    category1 = {   
       name: 'Engines',
       value: [
        onehundred = {
                name:           'onehundred',
                question:       'This engine layout has all cylinders arranged in a row',
                answerOne:      'What is an Inline-engine',
                answerTwo:      'What is a Radial engine',
                answerThree:    'What is a Sequential engine',
                correctAnswer:   'What is an Inline-engine',
                points:         100,
        },
        twohundred = {
                name:           'twohundred',                            
                question:       'This Engine type is commonly used for its ability to a greater number of cylinders in a compact space',
                answerOne:      'What is a Flat-head engine',
                answerTwo:      'What is a V engine',
                answerThree:    'What is a Turbine engine',
                correctAnswer:  'What is a V engine',
                points:         200,
        },
        threehundred = {  
                name:           'threehundred',     
                question:       'This engine configuration gets it\'s name from a popular fighting style',
                answerOne:      'What is a Judo-type engine',
                answerTwo:      'What is a Boxer-type engine',
                answerThree:    'What is a Drunken-type engine',
                correctAnswer:  'What is a Boxer-type engine',
                points:         300,
        },
        fourhundred = {   
                name:           'fourhundred', 
                question:       'This engine configuration, found in Bugattis and Bentleys, comes from in theory combining two \'VR\' engines in a V configuration ',
                answerOne:      'What is a W Engine',
                answerTwo:      'what is a Vee Engine',
                answerThree:    'What is a Rotary Engine',
                correctAnswer:  'What is a W Engine',
                points:         400,
        },                            
        fivehundred = {         
                name:           'fivehundred',                   
                question:       'This Engine configuration gets it\'s name from it\'s inventor, and instead of using pistons it spins a triangle-shaped rotor',
                answerOne:      'What is a Otto-cycle engine',
                answerTwo:      'What is a Atkinson-cycle engine',
                answerThree:    'What is a Wankel engine',
                correctAnswer:  'What is a Wankel engine',
                points:         500,
        }],
    },
    category2 = {   
        name: 'Makes',
        value: [
            onehundred = {
                    name:           'onehundred',
                    question:       'Camry, Tacoma, Supra',
                    answerOne:      'Who is Toyota',
                    answerTwo:      'Who is Tesla',
                    answerThree:    'Who is Honda',
                    correctAnswer:   'Who is Toyota',
                    points:         100,
            },
            twohundred = {
                    name:           'twohundred',                            
                    question:       'Tahoe, Malibu, Camaro',
                    answerOne:      'Who is Ford',
                    answerTwo:      'Who is Chrysler',
                    answerThree:    'Who is Chevrolet',
                    correctAnswer:  'Who is Chevrolet',
                    points:         200,
            },
            threehundred = {  
                    name:           'threehundred',     
                    question:       'Continental, Mulsanne, Flying Spur',
                    answerOne:      'Who is Cadillac',
                    answerTwo:      'Who is Mercedes-Benz',
                    answerThree:    'Who is Bentley',
                    correctAnswer:  'Who is Bentley',
                    points:         300,
            },
            fourhundred = {   
                    name:           'fourhundred', 
                    question:       'Evoque, Velar, Discovery',
                    answerOne:      'Who is Land Rover',
                    answerTwo:      'Who is Chrysler',
                    answerThree:    'Who is Fiat',
                    correctAnswer:  'Who is Land Rover',
                    points:         400,
            },                            
            fivehundred = {         
                    name:           'fivehundred',                   
                    question:       'Agera, Regara, one:1',
                    answerOne:      'Who is Lotus',
                    answerTwo:      'Who is Koenigsegg',
                    answerThree:    'Who is Pagani',
                    correctAnswer:  'Who is Koenigsegg',
                    points:         500,
            }],
    },
    category3 = {   
        name: 'Models',
        value: [
            onehundred = {
                    name:           'onehundred',
                    question:       'Based on the Lotus Elise, this fully electric car was Tesla\'s first production vehicle',
                    answerOne:      'What is the Model S',
                    answerTwo:      'What is the Tesla Roadster',
                    answerThree:    'What is the G-Wiz',
                    correctAnswer:  'What is the Tesla Roadster',
                    points:         100,
            },
            twohundred = {
                    name:           'twohundred',                            
                    question:       'An all-new version of this classic car was introduced in 1998',
                    answerOne:      'What is the Volkswagen Beetle',
                    answerTwo:      'What is the Fiat 500',
                    answerThree:    'What is the Mini cooper',
                    correctAnswer:  'What is the Volkswagen Beetle',
                    points:         200,
            },
            threehundred = {  
                    name:           'threehundred',     
                    question:       'This automotive legend is generally considered to be the first "pony car"',
                    answerOne:      'What is the Chevrolet Camaro',
                    answerTwo:      'What is the Ford Mustang',
                    answerThree:    'What is the Dodge Challenger',
                    correctAnswer:  'What is the Ford Mustang',
                    points:         300,
            },
            fourhundred = {   
                    name:           'fourhundred', 
                    question:       'It might not surprise you that according to the NICB, this vehicle was ranked as the second most stolen vehicle of 2019',
                    answerOne:      'What is the Toyota Camry',
                    answerTwo:      'What is the Nissan Maxima',
                    answerThree:    'What is the Honda Accord',
                    correctAnswer:  'What is the Honda Accord',
                    points:         400,
            },                            
            fivehundred = {         
                    name:           'fivehundred',                   
                    question:       'This vehicle, sold from 1962-1964 and originally sold for $18,000, was sold at auction in 2018 for $48.4 million',
                    answerOne:      'What is a Ferrari 250 GTO',
                    answerTwo:      'What is a Shelby Daytona',
                    answerThree:    'What is a Aston Martin DP215',
                    correctAnswer:  'What is a Ferrari 250 GTO',
                    points:         500,
            }],
    },
    category4 = {   
        name: 'Racing',
        value: [
            onehundred = {
                    name:           'onehundred',
                    question:       'This Formula One driver won his 6th championship in 2019',
                    answerOne:      'Who is Lewis Hamilton',
                    answerTwo:      'Who is Sebastion Vettel',
                    answerThree:    'Who is Valtteri Bottas',
                    correctAnswer:   'Who is Lewis Hamilton',
                    points:         100,
            },
            twohundred = {
                    name:           'twohundred',                            
                    question:       'This French WRC driver won every championship from 2004-2012',
                    answerOne:      'Who is Didier Auriol',
                    answerTwo:      'Who is Sébastien Ogier',
                    answerThree:    'Who is Sébastien Loeb',
                    correctAnswer:  'Who is Sébastien Loeb',
                    points:         200,
            },
            threehundred = {  
                    name:           'threehundred',     
                    question:       'This Nascar Legend was nicknamed \'The Intimidator\'',
                    answerOne:      'Who is Dale Earnhardt',
                    answerTwo:      'Who is Dale Earnhardt Jr',
                    answerThree:    'Who is Jimmie Johnson',
                    correctAnswer:  'Who is Dale Earnhardt',
                    points:         300,
            },
            fourhundred = {   
                    name:           'fourhundred', 
                    question:       'After his death, this Formula One driver\'s South American country declared a three day mourning period',
                    answerOne:      'Who is Juan Manuel Fangio',
                    answerTwo:      'Who is Ayrton Senna',
                    answerThree:    'José Carlos Pace',
                    correctAnswer:  'Who is Ayrton Senna',
                    points:         400,
            },                            
            fivehundred = {         
                    name:           'fivehundred',                   
                    question:       'In 1965, this driver won a Formula One championship, the Indy 500, the Tasman Series Cup, and the French Formula Two Championship',
                    answerOne:      'Who is Jim Clark',
                    answerTwo:      'Who is Jackie Stewart',
                    answerThree:    'Who is Graham Hill',
                    correctAnswer:  'Who is Jim Clark',
                    points:         500,
            }],
    },    
    category5 = {   
        name: 'History',
        value: [
            onehundred = {
                    name:           'onehundred',
                    question:       'This vehicle is considered the first affordable automoblie and brought the assembly line to the automotive industry',
                    answerOne:      'What is the Ford Model N',
                    answerTwo:      'What is the Ford Model A',
                    answerThree:    'What is the Ford Model T',
                    correctAnswer:  'What is the Ford Model T',
                    points:         100,
            },
            twohundred = {
                    name:           'twohundred',                            
                    question:       'Ferdinand Porsche is credited for designing this German \'people\'s car\'',
                    answerOne:      'What is the Fiat 500',
                    answerTwo:      'What is the Volkswagen Beetle',
                    answerThree:    'What is the Porsche 356',
                    correctAnswer:  'What is the Volkswagen Beetle',
                    points:         200,
            },
            threehundred = {  
                    name:           'threehundred',     
                    question:       'This vehicle has been the top selling vehicle in America for 42 years',
                    answerOne:      'What is the Ford F-Series',
                    answerTwo:      'What is the Dodge Ram',
                    answerThree:    'What is the Chevrolet Silverado',
                    correctAnswer:  'What is the Ford F-Series',
                    points:         300,
            },
            fourhundred = {   
                    name:           'fourhundred', 
                    question:       'This two-seat sports car was the first dual rotor rotary-engined car',
                    answerOne:      'What is the Mazda Cosmo',
                    answerTwo:      'What is the Mazda RX-7',
                    answerThree:    'What is the Mazda Rotary Pickup',
                    correctAnswer:  'What is the Mazda Cosmo',
                    points:         400,
            },                            
            fivehundred = {         
                    name:           'fivehundred',                   
                    question:       'This automotive manufacturer uses the name of one of it\'s founders, who is considered to have made the first production automobile',
                    answerOne:      'Who is Henry Ford',
                    answerTwo:      'Who is Ferdinand Porsche',
                    answerThree:    'Who is Karl Benz',
                    correctAnswer:  'Who is Karl Benz',
                    points:         500,
            }],
    },
]

const startButton = document.querySelector('#Start')
const resetButton = document.querySelector('#Reset')
let divsArr = [];
let board = document.querySelector('#Gameboard');
let tile = document.createElement('div');
const answerButtons = document.querySelectorAll('.answer');
let pointValue = '';
let cat = '';
let points = 0;
let score = 0;
let remainingPoints = 7500;
let audio = new Audio('sounds/music.mp3')
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

resetButton.addEventListener('click', () => {
    document.location.reload()
})

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
        userAnswer = event.target.nextSibling.textContent;
        console.log(userAnswer);
        audio.pause();
        compareAnswer(userAnswer);

    })
});

// This function adds an event listener to each of the created boxes on the 'GameBoard'.

function activateDivs() {
    divsArr.forEach(div => {
        div.addEventListener('click', (event) => {
            handleClickEvent();
            console.log(event);
            loadQestionAndAnswers(event);
            event.target.style.visibility = 'hidden';
            audio.play();
        });
    });
}

// This function creates 30 div boxes. Then it goes through each row adding the 'category' class,           'value' class, and the textcontent.
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

function handleClickEvent() {
    event.preventDefault();
}

// This function pulls the classes from the 'click' event tied to the gameboard tiles.                      
// It stores those classes in two variables and passese them into the 'CheckCat' function.
// and the 'CheckValue' function located within 'CheckCat.

function loadQestionAndAnswers (event) {
    pointValue = event.target.classList[0];
    cat = event.target.classList[1]
    // console.log(pointValue);
    // console.log(cat);
    checkCat(cat, pointValue);
}

// This function runs during the 'LoadQuestionAndAnswers' function
// This function takes the column class stored in the 'loadQuestionAndAnswers' function.
// It loops throught the 'gameLogic' array and compares the variable to each object name.
// When it finds a matching name runs the 'checkValue' function using the found object.

function checkCat(cat, pointValue) {
    for (let i = 0; i < gameLogic.length; i++) {
        if (cat === gameLogic[i].name) {
            // console.log(gameLogic[i].name);
            checkValue(pointValue, i);
        }
    }
}

// This function runs during the 'CheckCat' function
// It uses the value class variable stored in the 'loadQuestionsAndAnswers' function the values stored
// in the object taken from the 'checkCat' function. Then it loops through the object comparing the values.
// When a matching value is found, the function changes the text content of the modal title and labels of 
// each answer button to the information stored for that column and row.

function checkValue(pointValue, i) {
    for (let j = 0; j < 5; j++)
        if (pointValue === gameLogic[i].value[j].name) {
            console.log(gameLogic[i].value[j].name);
            document.querySelector('.modal-title').textContent = gameLogic[i].value[j].question.toUpperCase();
            document.querySelectorAll('label')[0].textContent = gameLogic[i].value[j].answerOne.toUpperCase();
            document.querySelectorAll('label')[1].textContent = gameLogic[i].value[j].answerTwo.toUpperCase();
            document.querySelectorAll('label')[2].textContent = gameLogic[i].value[j].answerThree.toUpperCase();
        }
};

function compareAnswer(userAnswer) {
    for (let c = 0; c < 5; c++) {
        if (cat === gameLogic[c].name) {
            for (let q = 0; q < 5; q++) {
                if (pointValue === gameLogic[c].value[q].name) {
                    if (userAnswer === gameLogic[c].value[q].correctAnswer.toUpperCase()) {
                        console.log('YOU CORRECT')
                        score += gameLogic[c].value[q].points
                        remainingPoints -= gameLogic[c].value[q].points
                            if((score > 2000) && (remainingPoints === 0)) {
                                alert('YOU WIN');
                            }
                        alert('You are correct')
                        document.querySelector('.displaypoints').textContent = '$' + score;
                    } else {
                        console.log('YOU ARE WRONG')
                        score -= gameLogic[c].value[q].points
                        remainingPoints -= gameLogic[c].value[q].points
                            if ((score < -1750) && (remainingPoints === 0)) {
                                alert('YOU LOSE');
                                document.querySelector('#Gameboard').style.visibility = 'hidden';
                            }
                        alert(`I'm sorry, the correct answer is ${gameLogic[c].value[q].correctAnswer}`) 
                        document.querySelector('.displaypoints').textContent = '$' + score;
                    }
                }
            }
        }
    }
}
