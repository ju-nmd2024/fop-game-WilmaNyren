let angelY = 50;
let angelX = 300;
let backX = 100;
let backY = 100;

let velocityY = 1;
let acceleration = 0.5;
let gameState = "true";


function setup() {
  createCanvas(600, 700);
}

function draw() {
  background(153, 211, 255);
  angel(angelX,angelY);
}

function angel(x,y){
  //to shange scale of the angel
  push();
  scale(0.8);
  //wings rhigt
  stroke(100);
  fill(255);
  push();
  translate(x+100,y+71);
  rotate(0.0);
  beginShape();
  vertex(-5,24);
  bezierVertex(0,30, 65, 40, 65,-20);
  line(-3,22, 64,-21);
  endShape();
  pop();
  
  //wing left
  push();
  translate(x+50,y+41);
  rotate(1.1);
  beginShape();
  vertex(-5,24);
  bezierVertex(0,30, 65, 40, 65,-20);
  line(-5,23, 64,-21);
  endShape();
  pop();
  
  
  //halo
  strokeWeight(6);
  stroke(255, 234, 99);
  noFill();
  ellipse(x+100,y+20,50,20);
  
  //extras
  stroke(100);
  strokeWeight(3);
  
  //legs
  line (x+80,y+140, x+60,y+165);
  line (x+80,y+160, x+60,y+165);
  //--------
  line (x+120,y+140, x+140,y+165);
  line (x+140,y+165, x+120,y+160);
  
  // arms
  line(x+100,y+85, x+160,y+40);
  line(x+100,y+85, x+40,y+40);
  
  //body
  fill (255);
  triangle(x+60,y+140, x+140,y+140, x+100,y+80);
  
  //head
  ellipse(x+100,y+50,60);
  
  //face
  stroke(199, 18, 17);
  fill(255);
  rect (x+87,y+60, 26);
  stroke(0);
  fill(0);
  ellipse(x+85,y+40,2);
  ellipse(x+115,y+40,2);
  pop();
}