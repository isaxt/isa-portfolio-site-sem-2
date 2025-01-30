/*
Isabella Tedesco
Assignment 4: Exquisite Corpse
*/   

function setup() {
  createCanvas(400, 600);
  angleMode(DEGREES)
  background('gray');
}

function draw() {
  
  robotLegs()
  baymaxBody()
  
  drawHead()
  drawEyes()
  
  bayMAxHands()
  
}

function robotLegs(){
  push()
  translate (0,270)
  
    //white "sole" of the boot
  fill(255); // white color
  strokeWeight(4)
  
  beginShape();
  vertex(280, 300); // Bottom-right point
  vertex(120, 300); // Bottom-left point
  vertex(95, 400); // Bottom-right point
  vertex(430, 800); // Bottom-left point
  endShape(CLOSE);
  
  // Draw the pink leg shape
  
  fill(255, 105, 180); // pink color
  stroke(0); // black outline
  strokeWeight(4);
  
  beginShape();
  vertex(160, 50);  // Top-middle point
  vertex(240, 50);  // Top-right point
  vertex(280, 300); // Bottom-right point
  vertex(120, 300); // Bottom-left point
  endShape(CLOSE);

  // Draw the white curved part for the left leg
  fill(255); // white color
  strokeWeight(2)

  beginShape();
  vertex(120, 300);                  // bottom-left vertex
  bezierVertex(130, 280, 130, 220, 170, 300);  // detailed curve for left leg
  vertex(160, 300);                  // join the left pink leg
  endShape(CLOSE);
  
  // Draw the white curved part for the right leg
  
  beginShape();
  
  // bottom-right vertex
  vertex(240, 300);        
  // curve for right leg
  bezierVertex(230, 280, 260, 240, 280, 300); 
   // join the right pink leg
  vertex(240, 300);                 
  endShape(CLOSE);
  
  // Draw the center divider (black line between the legs)
  strokeWeight(4);
  line(200, 50, 200, 310);          
  pop()
  
  fill('gray')
  noStroke()
  rect(50,580,800,300)
  
  // fill('black')
  // strokeWeight(4);
  // line(100, 575, 250, 575); 
}

function baymaxBody(){
  fill(255); // white color
  stroke(0); // black outline
  strokeWeight(4);
  
  // right arm
  push()
  rotate(-20)
  translate(-150,90)
  ellipse(310, 300, 90, 190)
  pop()
  
  //black thumb curve.
  push()
  rotate(-20)
  translate(-150, 30)
  // translate(300,0)
  noFill();
  strokeWeight(2);
  stroke(0);
  arc(width/2+115, 400, 35, 30, 45, 315);
  pop()
  
   // Draw the body
  ellipse(200, 330, 200, 300)

   // Draw the body emblem
  fill(255); // white color
  stroke(0); // black outline
  strokeWeight(2);
  ellipse(230, 290, 30, 30); // emblem on the chest

  // Emblem inner circle and line
  noFill();
  ellipse(230, 290, 20, 20); // inner circle
  line(220, 290, 240, 290); // horizontal line in the emblem
  
}


function drawHead(){
  scale(1.5)
  translate(-65,-15)
  push()
  noStroke()
  fill('#bad7e6')
  push()
  
  //right ear
  push()
  rotate(9)
  translate(10,-40)
  ellipse((width/2)+20, 70, 30, 100)
  pop()
  
  //left ear
  push()
  rotate(351)
  translate(-15,24)
  ellipse((width/2)-20, 70, 30, 100)
  pop()
  
  //face
  ellipse(width/2, 120, 110, 70)
  
  pop()
  
}

function drawEyes() {
  translate(95,20)
  push()
  scale(0.5)
  
  // right eye
  push()
  rotate(-9)
  translate(-10,30)
  fill(0); 
  ellipse(240, 200, 56, 40); 
  pop()
  
  //anger portion of right eye
  push()
  rotate(-15)
  noStroke()
  fill('#bad7e6')
  rect(175,225,60,20)
  pop()
 
  //left eye
  push()
  translate(0,-5)
  fill(0); 
  ellipse(160, 200, 56, 40); 
  pop()
  
  //anger portion of left eye
  push()
  rotate(15)
  translate(0,-108)
  noStroke()
  fill('#bad7e6')
  rect(175,225,60,20)
  pop()
  
  // Left eye white dot
  fill(255);
  ellipse(170, 195, 10, 10); 
  
  // Right eye white dot
  ellipse(275, 193, 10, 10); 
  
  //moving the nose and mouth to the center
  push()
  translate(10,-10)

  // Nose Light blue--Small square with rounded corners
  fill('#6d95ad'); 
  noStroke()
  rect(194, 230, 12, 10, 3); 
  
  // Mouth
  stroke(0);
  strokeWeight(2);
  noFill();
  
  // Left curve
  arc(190, 240, 20, 20, 0, 180); 
  
  // Right curve
  arc(210, 240, 20, 20, 0, 180); 
  pop()
  
  pop()

}

function bayMAxHands(){
  scale(0.75)
  translate(-100,30)
  rotate(-10)
  
  //white color +black outline
  fill(255);
  stroke(0); 
  strokeWeight(4);
  
  //left hand fingers (waving hand)
  // index finger
  push()
  rotate(5)
  translate(15,-8)
  ellipse(120, 140, 25, 60) 
  pop()
   // middle finger
  push()
  ellipse(100, 140, 25, 60) 
  pop()
  
  // ring finger
  push()
  rotate(-5)
  translate(-15,15)
  ellipse(80, 140, 25, 60)
  pop()
  
  //left arm up
  push()
  rotate(5)
  translate(0, 20)
   ellipse(120, 200, 90, 170)
  pop()

  // thumb
  push()
  rotate(5)
  translate(30,17)
  ellipse(120, 140, 28, 40)
  pop() 
}
