createCanvas(500,500);
background(255);
fill (100);
noStroke();
let count = 0;
//chonk
while (count < 14) {
  rect (count * 50-45, 155, 40,count*height);
  count = count + 1;
}

//thin
while (count < width){
  rect (count * 19 -274, 100, 5,50, 30);
  count = count +1;
}

//console log did not work here :(( but did in the game doc...
while (count < 7) {
  console.log(count);
  count = count + 1;
}

//cirkels
for (let sit = 0; sit < width; sit++){
  ellipse(sit * 40 + 10, 50, 30);
}

let x = 0;
let count2 = 5;

while (count2 >4){
   x += 1;
   count2 -= 1;
}

console.log(x);