let x =100;
let y =400;
background(255);

function button (x,y){
noStroke();
fill(255,0,0);
rect(195,200, 200,200, 4);
fill(255);
textSize(30);
text("Button", 250,290, 50,50);
}

function back2(x,y){
fill(0);
 rect(0,0, 700);
   
}

function draw (){
 button(200,200);  
// inspierd by Jason Erdreich link:https://www.youtube.com/watch?v=HfvTNIe2IaQ
if (mouseX >= 195 && mouseX <= 395 && mouseY >=200 && mouseY <= 400 && mouseIsPressed === true){
    back2(x,y);  
    console.log("YAY, you pressed the button! :D");
} 

}
