function setUp(){    
}
function draw (){
setUp();
if (mouseIsPressed){
    paint(mouseX,mouseY);
}

}
function paint(mouseX,mouseY){
push();
translate (mouseX,mouseY);  
scale (1); 
strokeWeight(4);
stroke(160,70,70);
fill (245, 147, 149);
ellipse(28,-40,60);
ellipse(-18,-52,60);
ellipse(-45,-25,60);
ellipse(45,10,60);
ellipse(20,40,60);
ellipse(-20,40,60);
ellipse(-50,15,60);
strokeWeight(5);
fill(255,255,0);
ellipse(0,0,60);
pop();
}

