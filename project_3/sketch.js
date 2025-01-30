/*
Isabella Tedesco
Assignment 3: Experimental Clock
*/

let nightWorkers;
let morningPeople;
let aptWall;
let aptFrame;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}

function draw() {
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  nightWorkers = color(0, 0, 0)
  morningPeople = color(160)
  aptWall = color(220)
  aptFrame = color(0,0,0)
  
  noStroke()
  
  //Conventional time
    if (hr == 5 || hr == 6 || hr == 7 || hr == 8){
    aptFrame = color('#57436b')
    aptWall = color('#e1b1e3')  
  }
  
  if (hr == 9 || hr == 10 || hr == 11 || hr == 12 || hr == 13 || hr == 14 || hr == 15 || hr == 16 || hr == 17) {
    aptFrame = color('#7f85a3')
    aptWall = color('#9acddb')    
  }
  
  if (hr == 18 || hr == 19 || hr == 20){
    aptFrame = color('#45728d')
    aptWall = color('#C65B8F')   
  }
  
  if (hr == 21 || hr == 22 || hr == 23 || hr == 0 || hr == 1 || hr == 2 || hr == 3 || hr == 4){
    aptFrame = color('#362350')
    aptWall = color('#f1bff2')   
  }
  
  
  //nightWorkers time (awake)
    if (hr == 12 || hr == 13 || hr == 14 || hr == 15 || hr == 16 || hr == 17){
    nightWorkers = color('#D8F6F2')     
    }
    if (hr == 18 || hr == 19 || hr == 20){
    nightWorkers = color('#EEDCBF')     
  } 
    if (hr == 21 || hr == 22 || hr == 23 || hr == 0 || hr == 1 || hr == 2 || hr == 3 ) {
      nightWorkers = color('#9CA0D0')  
    }
  
  //night owl time (asleep)
    if (hr == 4 || hr == 5 || hr == 6 || hr == 7 || hr == 8){
      nightWorkers = color('#837891')
    }
    if (hr == 9 || hr == 10 || hr == 11) {
      nightWorkers = color('#242D4D')
    }
  
  //morningPeople (awake)
    if(hr == 6 || hr == 7 || hr == 8) {
      morningPeople = color('#FFFEDE')
    }
    if(hr == 9 || hr == 10 || hr == 11 || hr == 12 || hr == 13 || hr == 14 || hr == 15 || hr == 16 || hr == 17){
      morningPeople = color('#D8F6F2')
    }
    if (hr == 18 || hr == 19 || hr == 20){
      morningPeople = color('#EEDCBF')
    }
    
    if (hr == 21){
      morningPeople = color('#837891')
    }
  
  //morningPeople (asleep)
  if (hr == 22 || hr == 23 || hr == 0 || hr == 1 || hr == 2 || hr == 3 || hr == 4){
    morningPeople = color('#1E1926')
  }
  
  if(hr == 5){
    morningPeople = color()
  }
  
  background(aptWall);
  
//Background
  fill(aptFrame)
  
  //apartment windows
  push()
  
  //mid left
  rect(65, 185, 140, 15)
  rect(60, 180, 150, 5)
  push()
  fill(nightWorkers)
  rect(75, 200, 120, 200)
  pop()
  rect(65, 400, 140, 15)
  rect(60, 415, 150, 5)
  rect(75, 200, 5, 200)
  rect(190, 200, 5, 200)
  
  //mid middle
  rect(240, 185, 140, 15)
  rect(235, 180, 150, 5)
  push()
  fill(morningPeople)
  rect(250, 200, 120, 200)
  pop()
  rect(240, 400, 140, 15)
  rect(235, 415, 150, 5)
  rect(250, 200, 5, 200)
  rect(365, 200, 5, 200)
  
  //mid right
  rect(415, 185, 140, 15)
  rect(410, 180, 150, 5)
  push()
  fill(morningPeople)
  rect(425, 200, 120, 200)
  pop()
  rect(415, 400, 140, 15)
  rect(410, 415, 150, 5)
  rect(425, 200, 5, 200)
  rect(540, 200, 5, 200)
    
  translate(0, -300)
  //top left
  rect(65, 185, 140, 15)
  rect(60, 180, 150, 5)
  push()
  fill(morningPeople)
  rect(75, 200, 120, 200)
  pop()
  rect(65, 400, 140, 15)
  rect(60, 415, 150, 5)
  rect(75, 200, 5, 200)
  rect(190, 200, 5, 200)
  
  //top middle
  rect(240, 185, 140, 15)
  rect(235, 180, 150, 5)
  push()
  fill(morningPeople)
  rect(250, 200, 120, 200)
  pop()
  rect(240, 400, 140, 15)
  rect(235, 415, 150, 5)
  rect(250, 200, 5, 200)
  rect(365, 200, 5, 200)
  
  //top right
  rect(415, 185, 140, 15)
  rect(410, 180, 150, 5)
  push()
  fill(nightWorkers)
  rect(425, 200, 120, 200)
  pop()
  rect(415, 400, 140, 15)
  rect(410, 415, 150, 5)
  rect(425, 200, 5, 200)
  rect(540, 200, 5, 200)
  
  translate(0, 600)
  //bottom left
  rect(65, 185, 140, 15)
  rect(60, 180, 150, 5)
  push()
  fill(nightWorkers)
  rect(75, 200, 120, 200)
  pop()
  rect(65, 400, 140, 15)
  rect(60, 415, 150, 5)
  rect(75, 200, 5, 200)
  rect(190, 200, 5, 200)
  
  //bottom middle
  rect(240, 185, 140, 15)
  rect(235, 180, 150, 5)
  push()
  fill(morningPeople)
  rect(250, 200, 120, 200)
  pop()
  rect(240, 400, 140, 15)
  rect(235, 415, 150, 5)
  rect(250, 200, 5, 200)
  rect(365, 200, 5, 200)
  
  //bottom right
  rect(415, 185, 140, 15)
  rect(410, 180, 150, 5)
  push()
  fill(nightWorkers)
  rect(425, 200, 120, 200)
  pop()
  rect(415, 400, 140, 15)
  rect(410, 415, 150, 5)
  rect(425, 200, 5, 200)
  rect(540, 200, 5, 200)
  pop()
  
}