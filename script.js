//  This is gameLogic, it contains the categories, point values, questions and answers to be used later. It is an array of objects called 'category + the column number'. Inside each category is the name of the category and an array containing objects with the value name of each row. Each object contains the name of the value, the question, 3 multiple choic answers, the correct answer, and the number of points associated with question.

let gameLogic = [
  (category1 = {
    name: "Engines",
    value: [
      (onehundred = {
        name: "onehundred",
        question: "This engine layout has all cylinders arranged in a row",
        answers: [ "What is an Inline-engine", "What is a Radial engine", "What is a Sequential engine"],
        correctAnswer: "What is an Inline-engine",
        points: 100
      }),
      (twohundred = {
        name: "twohundred",
        question:
          "This Engine type is commonly used for its ability to a greater number of cylinders in a compact space",
        answers: ["What is a Flat-head engine", "What is a V engine", "What is a Turbine engine"],
        correctAnswer: "What is a V engine",
        points: 200
      }),
      (threehundred = {
        name: "threehundred",
        question:
          "This engine configuration gets it's name from a popular fighting style",
        answers: ["What is a Judo-type engine", "What is a Boxer-type engine", "What is a Drunken-type engine"],
        correctAnswer: "What is a Boxer-type engine",
        points: 300
      }),
      (fourhundred = {
        name: "fourhundred",
        question:
          "This engine configuration, found in Bugattis and Bentleys, comes from in theory combining two 'VR' engines in a V configuration ",
        answers: ["What is a W Engine", "what is a Vee Engine", "What is a Rotary Engine"],
        correctAnswer: "What is a W Engine",
        points: 400
      }),
      (fivehundred = {
        name: "fivehundred",
        question:
          "This Engine configuration gets it's name from it's inventor, and instead of using pistons it spins a triangle-shaped rotor",
        answers: ["What is a Otto-cycle engine", "What is a Atkinson-cycle engine", "What is a Wankel engine"],
        correctAnswer: "What is a Wankel engine",
        points: 500
      })
    ]
  }),
  (category2 = {
    name: "Makes",
    value: [
      (onehundred = {
        name: "onehundred",
        question: "Camry, Tacoma, Supra",
        answers: [ "Who is Toyota", "Who is Tesla", "Who is Honda"],
        correctAnswer: "Who is Toyota",
        points: 100
      }),
      (twohundred = {
        name: "twohundred",
        question: "Tahoe, Malibu, Camaro",
        answers: ["Who is Ford", "Who is Chrysler", "Who is Chevrolet"],
        correctAnswer: "Who is Chevrolet",
        points: 200
      }),
      (threehundred = {
        name: "threehundred",
        question: "Continental, Mulsanne, Flying Spur",
        answers: ["Who is Cadillac", "Who is Mercedes-Benz", "Who is Bentley"],
        correctAnswer: "Who is Bentley",
        points: 300
      }),
      (fourhundred = {
        name: "fourhundred",
        question: "Evoque, Velar, Discovery",
        answers: ["Who is Land Rover", "Who is Chrysler", "Who is Fiat"],
        correctAnswer: "Who is Land Rover",
        points: 400
      }),
      (fivehundred = {
        name: "fivehundred",
        question: "Agera, Regara, one:1",
        answers: ["Who is Lotus", "Who is Koenigsegg", "Who is Pagani"],
        correctAnswer: "Who is Koenigsegg",
        points: 500
      })
    ]
  }),
  (category3 = {
    name: "Models",
    value: [
      (onehundred = {
        name: "onehundred",
        question:
          "Based on the Lotus Elise, this fully electric car was Tesla's first production vehicle",
        answers: ["What is the Model S", "What is the Tesla Roadster", "What is the G-Wiz"],
        correctAnswer: "What is the Tesla Roadster",
        points: 100
      }),
      (twohundred = {
        name: "twohundred",
        question:
          "An all-new version of this classic car was introduced in 1998",
        answers: ["What is the Volkswagen Beetle", "What is the Fiat 500", "What is the Mini cooper"],
        correctAnswer: "What is the Volkswagen Beetle",
        points: 200
      }),
      (threehundred = {
        name: "threehundred",
        question:
          'This automotive legend is generally considered to be the first "pony car"',
        answers: ["What is the Chevrolet Camaro", "What is the Ford Mustang", "What is the Dodge Challenger"],
        correctAnswer: "What is the Ford Mustang",
        points: 300
      }),
      (fourhundred = {
        name: "fourhundred",
        question:
          "It might not surprise you that according to the NICB, this vehicle was ranked as the second most stolen vehicle of 2019",
        answers: ["What is the Toyota Camry", "What is the Nissan Maxima", "What is the Honda Accord"],
        correctAnswer: "What is the Honda Accord",
        points: 400
      }),
      (fivehundred = {
        name: "fivehundred",
        question:
          "This vehicle, sold from 1962-1964 and originally sold for $18,000, was sold at auction in 2018 for $48.4 million",
        answers: ["What is a Ferrari 250 GTO", "What is a Shelby Daytona", "What is a Aston Martin DP215"],
        correctAnswer: "What is a Ferrari 250 GTO",
        points: 500
      })
    ]
  }),
  (category4 = {
    name: "Racing",
    value: [
      (onehundred = {
        name: "onehundred",
        question: "This Formula One driver won his 6th championship in 2019",
        answers: ["Who is Lewis Hamilton", "Who is Sebastion Vettel", "Who is Valtteri Bottas"],
        correctAnswer: "Who is Lewis Hamilton",
        points: 100
      }),
      (twohundred = {
        name: "twohundred",
        question:
          "This French WRC driver won every championship from 2004-2012",
        answers: ["Who is Didier Auriol", "Who is Sébastien Ogier", "Who is Sébastien Loeb"],
        correctAnswer: "Who is Sébastien Loeb",
        points: 200
      }),
      (threehundred = {
        name: "threehundred",
        question: "This Nascar Legend was nicknamed 'The Intimidator'",
        answers: ["Who is Dale Earnhardt", "Who is Dale Earnhardt Jr", "Who is Jimmie Johnson"],
        correctAnswer: "Who is Dale Earnhardt",
        points: 300
      }),
      (fourhundred = {
        name: "fourhundred",
        question:
          "After his death, this Formula One driver's South American country declared a three day mourning period",
        answers: ["Who is Juan Manuel Fangio", "Who is Ayrton Senna", "José Carlos Pace"],
        correctAnswer: "Who is Ayrton Senna",
        points: 400
      }),
      (fivehundred = {
        name: "fivehundred",
        question:
          "In 1965, this driver won a Formula One championship, the Indy 500, the Tasman Series Cup, and the French Formula Two Championship",
        answers: ["Who is Jim Clark", "Who is Jackie Stewart", "Who is Graham Hill"],
        correctAnswer: "Who is Jim Clark",
        points: 500
      })
    ]
  }),
  (category5 = {
    name: "History",
    value: [
      (onehundred = {
        name: "onehundred",
        question:
          "This vehicle is considered the first affordable automoblie and brought the assembly line to the automotive industry",
        answers: ["What is the Ford Model N", "What is the Ford Model A", "What is the Ford Model T"],
        correctAnswer: "What is the Ford Model T",
        points: 100
      }),
      (twohundred = {
        name: "twohundred",
        question:
          "Ferdinand Porsche is credited for designing this German 'people's car'",
        answers: ["What is the Fiat 500", "What is the Volkswagen Beetle", "What is the Porsche 356"],
        correctAnswer: "What is the Volkswagen Beetle",
        points: 200
      }),
      (threehundred = {
        name: "threehundred",
        question:
          "This vehicle has been the top selling vehicle in America for 42 years",
        answers: ["What is the Ford F-Series", "What is the Dodge Ram", "What is the Chevrolet Silverado"],
        correctAnswer: "What is the Ford F-Series",
        points: 300
      }),
      (fourhundred = {
        name: "fourhundred",
        question:
          "This two-seat sports car was the first dual rotor rotary-engined car",
        answers: ["What is the Mazda Cosmo", "What is the Mazda RX-7", "What is the Mazda Rotary Pickup"],
        correctAnswer: "What is the Mazda Cosmo",
        points: 400
      }),
      (fivehundred = {
        name: "fivehundred",
        question:
          "This automotive manufacturer uses the name of one of it's founders, who is considered to have made the first production automobile",
        answers: ["Who is Henry Ford", "Who is Ferdinand Porsche", "Who is Karl Benz"],
        correctAnswer: "Who is Karl Benz",
        points: 500
      })
    ]
  })
];

//  These are global veriables that are used through this code.
//  These are the start and reset buttons.

const startButton = document.querySelector("#Start");
const resetButton = document.querySelector("#Reset");

// These variables hold the functions to create an element and to select the gameboard div. This is declares an empty array to hold each gameboard element after it is create.
let divsArr = [];
const board = document.querySelector("#Gameboard");
const tile = document.createElement("div");

// This creates an array to store the multiple choice answer buttons.
const answerButtons = document.querySelectorAll(".answer");

// These are variables that store the point value and category information from the event to be used to pull the correct information.
let pointValue = "";
let cat = "";

// Theses variables store the points that will be awarded/subtracted, the sore to be displayed and compared at the end to decide if you win/lose, and the remaining points on the board, if no points remains the game ends.
let points = 0;
let score = 0;
let remainingPoints = 7500;

// This stores the Jeopardy thinking music as a variable to be played later.
let audio = new Audio("sounds/music.mp3");
audio.loop = true;

// This adds an event listener to the start button. When clicked it runs the 'preventDefault' function. Then it checks to see if the element stored in the board variable has any child customElements, if it does not it runs the 'createGameboard' and 'activateDivs' functions. If there are child elements then the start button will no run any functions.
startButton.addEventListener("click", () => {
  handleClickEvent();
  if (board.lastChild == null) {
    createGameBoard();
    activateDivs();
  }
});

// This adds an event listener to the reset button. When clicked it will run the reload method on the document location causing the webpage to refresh.
resetButton.addEventListener("click", () => {
  document.location.reload();
});

// This is the 'createGameBoard' function.
// This function runs the 'populateGameBoard' function using the 'tile' and 'board' variables to create the rows and columns for the game. Then it collects each cell base on the class name assigned to each and stores them in an Array. Then it goes through each item in the array and assigns attributes and values to each. The attributes are 'data-toggle' and 'data-target' with values 'modal' and '#ecampleModalCenter'.
function createGameBoard() {
  populateGameBoard(tile, board);
  divsArr = document.querySelectorAll(
    "div.onehundred, div.twohundred, div.threehundred, div.fourhundred, div.fivehundred"
  );
  divsArr.forEach(div => {
    div.setAttribute("data-toggle", "modal");
    div.setAttribute("data-target", "#exampleModalCenter");
  });
}

// This is the 'activateDivs' function.
// This function goes through and adds an event listener to every gameBoard cell. When clicked it runs the 'handleClickEvent' function then it runs the 'loadQuestionAndAnswers function passing through the even data. Then it sets the event target to be hidden, allowing the function to still hold the space on the board but also not be clicked on again. Then it plays the audio variable.
function activateDivs() {
  divsArr.forEach(div => {
    div.addEventListener("click", event => {
      handleClickEvent();
      loadQuestionAndAnswers(event);
      event.target.style.visibility = "hidden";
      audio.play();
    });
  });
}

// This is the 'populateGameBoard' function.
// This function creates a loop that runs 30 times. Each time the loop is run it creates a new div element and appends it to the board variable as a child element. Then it checks the loop number. Based on which number loop it assigns one or two class nammes and changes the text content of the element to reflect the row value or category name.
function populateGameBoard(tile, board) {
  let t = 1;
  while (t <= 30) {
    tile = document.createElement("div");
    board.appendChild(tile);
    if (t <= 5) {
      let l = gameLogic[t - 1].name;
      board.lastChild.classList.add(l);
      board.lastChild.textContent = gameLogic[t - 1].name;
    } else if (t <= 10) {
      let z = t - 6;
      let y = gameLogic[z].name;
      board.lastChild.classList.add("onehundred", y);
      board.lastChild.textContent = "$100";
    } else if (t <= 15) {
      let z = t - 11;
      let y = gameLogic[z].name;
      board.lastChild.classList.add("twohundred", y);
      board.lastChild.textContent = "$200";
    } else if (t <= 20) {
      let z = t - 16;
      let y = gameLogic[z].name;
      board.lastChild.classList.add("threehundred", y);
      board.lastChild.textContent = "$300";
    } else if (t <= 25) {
      let z = t - 21;
      let y = gameLogic[z].name;
      board.lastChild.classList.add("fourhundred", y);
      board.lastChild.textContent = "$400";
    } else if (t <= 30) {
      let z = t - 26;
      let y = gameLogic[z].name;
      board.lastChild.classList.add("fivehundred", y);
      board.lastChild.textContent = "$500";
    }
    t++;
  }
}

// This is the 'loadQuestionsAndAnswers' function.
// This function pulls the class names from the 'click' event tied to the activateDivs function. It stores those classes in two variables and passese them into the 'CheckCat' function.
function loadQuestionAndAnswers(event) {
  pointValue = event.target.classList[0];
  cat = event.target.classList[1];
  checkCat(cat, pointValue);
}

// This is the 'checkCat' function.
// This function takes the column  and row classes stored in the 'loadQuestionAndAnswers' function. It loops through the 'gameLogic' array and compares the category variable to each object name. When it finds a matching name it runs the 'checkValue' function using the object that has the same category name.
function checkCat(cat, pointValue) {
  for (let i = 0; i < gameLogic.length; i++) {
    if (cat === gameLogic[i].name) {
      checkValue(pointValue, i);
    }
  }
}

// This is the 'checkValue' function.
// This function uses the row class variable stored in the 'loadQuestionsAndAnswers' and the object located in the 'checkCat' function. Then it loops through the object comparing the row values. When the matching value is found, the function changes the text content of the modal title and labels of each answer button to the information stored for that found column and row.
function checkValue(pointValue, i) {
  for (let j = 0; j < 5; j++)
    if (pointValue === gameLogic[i].value[j].name) {
      document.querySelector(".modal-title").textContent = gameLogic[i].value[
        j
      ].question.toUpperCase();
      document.querySelectorAll("label")[0].textContent = gameLogic[i].value[
        j
      ].answers[0].toUpperCase();
      document.querySelectorAll("label")[1].textContent = gameLogic[i].value[
        j
      ].answers[1].toUpperCase();
      document.querySelectorAll("label")[2].textContent = gameLogic[i].value[
        j
      ].answers[2].toUpperCase();
    }
}

// This loops through the multiple choice answer buttons and assigns an event listener to each on. When 'clicked' it stores the 'textContent of the label element next to clicked button in a variable. Then it pauses the audio started in the 'activateDivs' function. The new variable is passed into the 'compareAnswer' function.
answerButtons.forEach(button => {
  button.addEventListener("click", () => {
    userAnswer = event.target.nextSibling.textContent;
    audio.pause();
    compareAnswer(userAnswer);
  });
});

//  This is the 'compareAnswer' function.
//  This function takes the answer that the user selected and loops through the obect to find the question. When it finds the question it will start to loop through to find the point value. When it finds the matching category and point value. It will compare the users answer to the correct answer. If the answer is correct/wrong it will add/subtract the point value to the score, subtract that value from the remaining points. Then it will check the value of the remaining points, if it is zero it will end the game and display an alert. If it is not the end of the game it will display an alert and will update the displayed score
function compareAnswer(userAnswer) {
  for (let c = 0; c < 5; c++) {
    if (cat === gameLogic[c].name) {
      for (let q = 0; q < 5; q++) {
        if (pointValue === gameLogic[c].value[q].name) {
          if (
            userAnswer === gameLogic[c].value[q].correctAnswer.toUpperCase()
          ) {
            score += gameLogic[c].value[q].points;
            remainingPoints -= gameLogic[c].value[q].points;
            if (score > 2000 && remainingPoints === 0) {
              swal("Congratulations", "You Win!!", "success");
            }
            swal("Correct!", "", "success");
            document.querySelector(".displaypoints").textContent = "$" + score;
          } else {
            score -= gameLogic[c].value[q].points;
            remainingPoints -= gameLogic[c].value[q].points;
            if (score < 2000 && remainingPoints === 0) {
              swal("Game Over", "Please Play Again", "error");
              document.querySelector("#Gameboard").style.visibility = "hidden";
            }
            swal(
              "Incorrect",
              `I'm sorry, the correct answer is ${gameLogic[c].value[q].correctAnswer}`,
              "error"
            );
            document.querySelector(".displaypoints").textContent = "$" + score;
          }
        }
      }
    }
  }
}

// This is the 'handleClickEvent' function.
// this function calls the prevent default function for the event.
function handleClickEvent() {
  event.preventDefault();
}