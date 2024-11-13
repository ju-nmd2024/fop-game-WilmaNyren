//game???
let x = 100;
let Y = 100;
let pipex = 100;
let pipey = 100;
let gameState = true;

function setup(){
createCanvas(1000,400);


}
function back(){
noStroke();
fill(100);
rect(0,0, 1000,400);
fill(200);
rect(0,0, 1000,340);

}

function obsticle (pipex,pipey){
stroke(0);
fill(50,200,50);
rect (pipex+245,pipey+155, 70,150);
rect (pipex+220,pipey+130, 120,40);

}


function bird(x,y){
strokeWeight(2);
stroke(255);
fill(0);
ellipse(x+50,y, 90,80);
fill(255);
ellipse (x+70,y, 20);

}

function draw(){
back();
obsticle(100,140);
obsticle(360,120);

push();
translate(380,300);
rotate (PI);
obsticle(-280,30);
pop();

bird (100,200);
pipex = width;

if (gameState === true){
    if (pipex > 200){
    pipex = pipex - 5;

    } 
      
}


}