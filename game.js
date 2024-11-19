let angelY = 0;
let angelX = 280;

let haloX = 100;
let haloY = 100;
let direction = "upp";

let velocityY = angelY + 0.1;
let acceleration = 0.3;
let gameState = "start";

function setup() {
  createCanvas(600, 750);
}

//garits tutoriel
function mouseClicked() {
  if (gameState === "start") {
    gameState = "game";
  } else if (gameState === "game") {
    gameState = "end";
  } else if (gameState === "end") {
    resetgame();
  }
}

function draw() {
  //start screen
  if (gameState === "start") {
    gameStart();
    halo(haloX, haloY);
    if (direction === "upp") 
      if (haloY > 70) {
        haloY = haloY - 0.2;
      } else {
        direction = "down";
      }
    if (direction === "down") {
      if (haloY < 100) {
        haloY = haloY + 0.2;
      } else {
        direction = "upp";
      }
    }
  }
  //game
  if (gameState === "game") {
    angelY = angelY + velocityY;
    velocityY = velocityY + acceleration;
  }
  if (gameState === "game") {
    clear();
    backGround();
    angel(angelX, angelY);
    forGround();
    display();

    // upp motion
    if (keyIsDown(32)) {
      velocityY = velocityY - 1;

      backGround();
      angelWingDown(angelX, angelY);
      forGround();
      display();
    }
  }

  //lose
  if (angelY >= 800 && velocityY > 6) {
    clear();
    gameState = "end";
    console.log("game over");
    gameOverScreen();
    //win
  } else if (angelY >= 525 && velocityY < 6) {
    gameState = "end";
    console.log("congrats!!! :)))");
    gameWin();
  }
}
// Vedang
function display() {
  fill(255);
  textSize(25);
  text("Speed:" + velocityY.toFixed(1), 50, 30, 500, 100);
}

// With help from Vedang Chandode
function resetgame() {
  angelY = 0;
  velocityY = 0.3;
  gameState = "game";
}

function backGround() {
  background(153, 211, 255);
  noStroke();
  fill(255);
  ellipse(300, 590, 200, 150);
  ellipse(160, 620, 200, 150);
  ellipse(450, 620, 200, 150);

  fill(255, 204, 249);
  ellipse(300, 620, 180, 150);
  ellipse(170, 640, 180, 150);
  ellipse(440, 640, 180, 150);
}

function forGround() {
  fill(255, 204, 249);
  ellipse(300, 615, 180, 150);
  ellipse(170, 640, 180, 150);
  ellipse(440, 640, 180, 150);

  fill(255);
  ellipse(300, 625, 180, 150);
  ellipse(160, 645, 180, 150);
  ellipse(450, 645, 180, 150);
  ellipse(300, 660, 250, 150);
}

function gameStart() {
  background(153, 179, 255);
  //clowd
  backGround();
  forGround();

  noStroke();
  fill(255, 204, 249);
  rect(120, 190, 370, 200, 10);
  stroke(255);
  strokeWeight(2);
  textSize(55);
  fill(255);
  text("Angel Lander", 140, 265, 500, 200);
  //text
  fill(255);
  textSize(30);
  strokeWeight();
  text("Click anywere to Play", 160, 415, 500, 100);
}

function halo(x, y) {
  //halo
  strokeWeight(15);
  stroke(255, 204, 249);
  noFill();
  ellipse(haloX + 200, haloY + 45, 150, 30);
}

function angel(x, y) {
  //to shange scale of the angel
  push();
  scale(0.8);
  //wings rhigt
  stroke(100);
  strokeWeight(3);
  fill(255);
  push();
  translate(x + 100, y + 71);
  rotate(0.0);
  beginShape();
  vertex(-5, 24);
  bezierVertex(0, 30, 65, 40, 65, -20);
  line(-3, 22, 64, -21);
  endShape();
  pop();

  //wing left
  push();
  translate(x + 50, y + 41);
  rotate(1.1);
  beginShape();
  vertex(-5, 24);
  bezierVertex(0, 30, 65, 40, 65, -20);
  line(-5, 23, 64, -21);
  endShape();
  pop();

  //halo
  strokeWeight(6);
  stroke(255, 234, 99);
  noFill();
  ellipse(x + 100, y + 20, 50, 20);

  //extras
  stroke(100);
  strokeWeight(3);

  //legs
  line(x + 80, y + 140, x + 60, y + 165);
  line(x + 80, y + 160, x + 60, y + 165);
  //--------
  line(x + 120, y + 140, x + 140, y + 165);
  line(x + 140, y + 165, x + 120, y + 160);

  // arms
  line(x + 100, y + 85, x + 160, y + 40);
  line(x + 100, y + 85, x + 40, y + 40);

  //body
  fill(255);
  triangle(x + 60, y + 140, x + 140, y + 140, x + 100, y + 80);

  //head
  ellipse(x + 100, y + 50, 60);

  //face
  stroke(199, 18, 17);
  fill(255);
  rect(x + 87, y + 60, 26);
  stroke(0);
  fill(0);
  ellipse(x + 85, y + 40, 2);
  ellipse(x + 115, y + 40, 2);
  pop();
}
//charakter but animated
function angelWingDown(x, y) {
  //to shange scale of the angel
  push();
  scale(0.8);
  //wings rhigt
  stroke(100);
  strokeWeight(3);
  fill(255);
  push();
  translate(x + 120, y + 71);
  rotate(0.45);
  beginShape();
  vertex(-5, 24);
  bezierVertex(0, 30, 65, 40, 65, -20);
  line(-3, 22, 64, -21);
  endShape();
  pop();

  //wing left
  push();
  translate(x + 30, y + 65);
  rotate(0.7);
  beginShape();
  vertex(-5, 24);
  bezierVertex(0, 30, 65, 40, 65, -20);
  line(-5, 23, 64, -21);
  endShape();
  pop();

  //halo
  strokeWeight(6);
  stroke(255, 234, 99);
  noFill();
  ellipse(x + 100, y + 20, 50, 20);

  //extras
  stroke(100);
  strokeWeight(3);

  //legs
  line(x + 80, y + 140, x + 60, y + 165);
  line(x + 80, y + 160, x + 60, y + 165);
  //--------
  line(x + 120, y + 140, x + 140, y + 165);
  line(x + 140, y + 165, x + 120, y + 160);

  // arms
  line(x + 100, y + 85, x + 160, y + 40);
  line(x + 100, y + 85, x + 40, y + 40);

  //body
  fill(255);
  triangle(x + 60, y + 140, x + 140, y + 140, x + 100, y + 80);

  //head
  ellipse(x + 100, y + 50, 60);

  //face
  stroke(199, 18, 17);
  fill(255);
  rect(x + 87, y + 60, 26);
  stroke(0);
  fill(0);
  ellipse(x + 85, y + 40, 2);
  ellipse(x + 115, y + 40, 2);
  pop();
}

//game-over scren
function gameOverScreen() {
  background(153, 179, 255);
  //clowd
  backGround();
  forGround();

  noStroke();
  fill(200, 50, 50);
  rect(120, 190, 370, 200, 10);
  stroke(255);
  strokeWeight(2);
  textSize(60);
  fill(255);
  text("Game Over", 150, 260, 500);
  //text
  textSize(30);
  strokeWeight(1);
  text("Click anywere to Play Again", 123, 415, 500, 100);
}
//win sceen
function gameWin() {
  background(153, 179, 255);

  //clowd
  backGround();
  forGround();

  noStroke();
  fill(255, 204, 249);
  rect(120, 190, 370, 200, 10);
  stroke(255);
  textSize(70);
  strokeWeight(4);
  fill(255);
  text("YOU WIN!", 142, 260, 500);
  //button
  stroke(255);

  fill(255);
  textSize(30);
  strokeWeight(1);
  text("Click anywere to Play Again", 123, 415, 500, 100);
}
