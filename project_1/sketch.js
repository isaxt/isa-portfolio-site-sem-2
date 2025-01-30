/*Assignment 1: Karen's Rilakkuma sticker
Name:Isabella Tedesco
Partner's Name: Karen

Object Description:A rilakkuma sticker sheet gifted to me by my favorite afterschool teacher before I moved from manhattan chinatown to queens. She would always help me out, play with me and buy me gifts. I was quite young like 7? and this move was goodbye forever. But I remembered how much I loved these stickers that I was too scared to even use them

Just the brown and white bear on a white plastic sticker sheet. 

*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  blendMode(BLEND);
  
//testing with Xin
  //when you use push+pop+translate+rotate
    //   push()

    //   angleMode(DEGREES);
    //   translate(200,200)
    //   rotate(20)
    //   fill('blue');
    //   rect(0,0,300,300);

    //   pop()
  
  //right ear
  fill (125,76,0)
  ellipse (150,180, 100, 100); 
  
  //left ear using push+translate+pop
  push()
  fill (125,76,0)
  translate(270,180);
  //ellipse (270,180, 100, 100);
  ellipse(0,0,100,100);
  pop()
  
  //yellow ear inside
  fill (550, 495, 10)
  ellipse(130,195,50,50);
  
  fill (550, 495, 10)
  ellipse(290,195,50,50);
  
  //head
  fill(125,76,0)
  ellipse(210,240,175,175);
  
  //right eye
  fill(25,26,0)
  ellipse (265,245,20,25);
  
  //left eye
  fill(25,26,0)
  ellipse(155,245,20,25);
  
  //nose larger portion
  fill (255, 255, 255)
  ellipse(210, 270, 60, 65);
  
  //nose smaller portion
  fill (25,26, 0)
  ellipse (210, 263, 18, 18)
  
  push()
  //right mouth line
  angleMode(RADIANS)
  fill(25,26,0)
  noFill();
  arc(225,272, 30, 30, HALF_PI, PI)
  arc(195, 272, 30,30, TWO_PI, HALF_PI)
  
  //left mouth line
  fill(25, 26, 0)
  
  pop()
  
  
}
