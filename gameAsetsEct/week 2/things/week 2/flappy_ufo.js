/* 
 THE CONCEPT OF THE VISUALS
 - a cowboy character yellow
 - a mario pipe
 - yellow grass ground thing
 - gray sky
 - clouds 2
 - top pipe

 THE MECHANICS
 - tap the screen to move the character up
 - implement gravity
 - move the background
 - end the game if crashing
*/

// position variables
let characterX = 100;
let characterY = 100;
let pipeX = 100;
let pipeY = 100;

// game logic variable
let velocityY = 0.2;
let acceleration = 0.2;

// game state variables
let gameState = true;

function setup() {
  createCanvas(600, 300);
  background(255, 255, 255);
}

// a function that draws the background
function gameBackground() {
  noStroke();
  fill(100);
  rect(0, 0, 600);
  fill(255, 255, 0);
  rect(0, 200, width, 100);
}

// a function that draws the pipe
function pipe(x, y) {
  fill(0, 255, 0);
  rect(x, y, 60, 50);
  rect(x - 10, y - 10, 80, 10);
}

// a function that draws the character
function character(x, y) {
  fill(255);
  ellipse(x, y, 40);
}

function draw() {
  //the game background
  gameBackground();

  // the pipe
  pipe(pipeX + 90, pipeY + 50);

  //the upside-down pipe
  push();
  translate(pipeX + 90, pipeY + 50);
  rotate(PI);
  pipe(-60, 100);
  pop();

  // the character
  character(characterX, characterY);

  // checks if the game state is true
  if (gameState === true) {
    //pipe moves in the x direction
    pipeX = pipeX - 4;

    //reset the x value of the pipe to 600, which is the width of the canvas so that it starts from the far right
    if (pipeX < -200) {
      pipeX = width;
    }

    // gravity logic
    characterY = characterY + velocityY;
    velocityY = velocityY + acceleration;

    // decrease the velocity when clicking
    if (mouseIsPressed) {
      velocityY = velocityY - 0.7;
    }

    // ends the game when the character collides with the ground
    if (characterY > 180) {
      gameState = false;
      console.log("die");
    }
  }
}


