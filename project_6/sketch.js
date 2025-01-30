/*
Isabella Tedesco
Assignment 6: Data Portrait
The data portrait was created to display the number of fillers/"repeating words" I used in speech during the 7 days: (10/8- 10/14). 

*/


let xCoordinates = [];
let yCoordinates = [];
let ellipseWidths = [];
let ellipseHeights = [];
let fillers = ["um", "like...", "no yeah", "anyways", "like"];
let numberOfClicksTue = [];
let numberOfClicksWed = [];
let numberOfClicksThu = [];
let numberOfClicksFri = [];
let numberOfClicksSat = [];
let numberOfClicksMon = [];
let numberIndTue = -1;
let numberIndWed = -1;
let numberIndThu = -1;
let numberIndFri = -1;
let numberIndSat = -1;
let numberIndMon = -1;

function setup() {
  createCanvas(600, 600);
  background('#b4c3d6');
  
  for(let i=0; i<70; i++){
    xCoordinates.push(random(0,600));
    yCoordinates.push(random(0,600));
    ellipseWidths.push(random(250, 300));
    ellipseHeights.push(random(120,200));
  }
  
  for(let i=0; i<13; i++){
    numberOfClicksTue.push(i);
  }
  
  for(let i=0; i<10; i++){
    numberOfClicksWed.push(i);
  }
  
  for(let i=0; i<31; i++){
    numberOfClicksThu.push(i);
  }
  
  for(let i=0; i<10; i++){
    numberOfClicksFri.push(i);
  }
  
  for(let i=0; i<21; i++){
    numberOfClicksSat.push(i);
  }
  
  for(let i=0; i<40; i++){
    numberOfClicksMon.push(i);
  }

}

//word bubbles

//Tuesday(10/8)
function mouseClicked() {
  if (mouseX > 0 && mouseX < 86){ 
    push()
    strokeWeight(5)
    stroke(255)
    fill('#dea4d4')
    numberIndTue++
ellipse(xCoordinates[numberOfClicksTue[0+numberIndTue]],yCoordinates[numberOfClicksTue[0+numberIndTue]],ellipseWidths[numberOfClicksTue[0+numberIndTue]], ellipseHeights[numberOfClicksTue[0+numberIndTue]])
    push()
    strokeWeight(1.5)
    fill(255)
    textAlign(CENTER)
    textSize(30)
    text(random(fillers),xCoordinates[numberOfClicksTue[0+numberIndTue]], yCoordinates[numberOfClicksTue[0+numberIndTue]])
    pop()
    pop()
  }
  
  //Wednesday (10/9)
  if (mouseX > 86 && mouseX < 172){ 
    push()
    strokeWeight(5)
    stroke(255)
    fill('#506ea6')
    numberIndWed++
ellipse(xCoordinates[numberOfClicksWed[0+numberIndWed]+9],yCoordinates[numberOfClicksWed[0+numberIndWed]+9],ellipseWidths[numberOfClicksWed[0+numberIndWed]+9], ellipseHeights[numberOfClicksWed[0+numberIndWed]+9])
    push()
    strokeWeight(1.5)
    fill(255)
    textAlign(CENTER)
    textSize(30)
    text(random(fillers),xCoordinates[numberOfClicksWed[0+numberIndWed]+9],yCoordinates[numberOfClicksWed[0+numberIndWed]+9])
    pop()
    pop()
  }
  
  //Thursday (10/10)
  if (mouseX > 172 && mouseX < 258){ 
    push()
    strokeWeight(5)
    stroke(255)
    fill('#8461b0')
    numberIndThu++
ellipse(xCoordinates[numberOfClicksThu[0+numberIndThu]+18],yCoordinates[numberOfClicksThu[0+numberIndThu]+18],ellipseWidths[numberOfClicksThu[0+numberIndThu]+18], ellipseHeights[numberOfClicksThu[0+numberIndThu]+18])
    push()
    strokeWeight(1.5)
    fill(255)
    textAlign(CENTER)
    textSize(30)
    text(random(fillers),xCoordinates[numberOfClicksThu[0+numberIndThu]+18],yCoordinates[numberOfClicksThu[0+numberIndThu]+18])
    pop()
    pop()
  }
  
  //Friday (10/11)
  if (mouseX > 258 && mouseX < 344){ 
    push()
    strokeWeight(5)
    stroke(255)
    fill(227, 207, 219, 150)
    numberIndFri++
ellipse(xCoordinates[numberOfClicksFri[0+numberIndFri]+49],yCoordinates[numberOfClicksFri[0+numberIndFri]+49],ellipseWidths[numberOfClicksFri[0+numberIndFri]+49], ellipseHeights[numberOfClicksFri[0+numberIndFri]+49])
    push()
    strokeWeight(1.5)
    fill(255)
    textAlign(CENTER)
    textSize(30)
    text(random(fillers),xCoordinates[numberOfClicksFri[0+numberIndFri]+49],yCoordinates[numberOfClicksFri[0+numberIndFri]+49])
    pop()
    pop()
  }
  
  //Saturday (10/12)
  if (mouseX > 344 && mouseX < 430){ 
    push()
    strokeWeight(5)
    stroke(255)
    fill(203, 202, 216, 150)
    numberIndSat++
ellipse(xCoordinates[numberOfClicksSat[0+numberIndSat]+52],yCoordinates[numberOfClicksSat[0+numberIndSat]+52],ellipseWidths[numberOfClicksSat[0+numberIndSat]+52], ellipseHeights[numberOfClicksSat[0+numberIndSat]+52])
    push()
    strokeWeight(1.5)
    fill(255)
    textAlign(CENTER)
    textSize(30)
    text(random(fillers),xCoordinates[numberOfClicksSat[0+numberIndSat]+52],yCoordinates[numberOfClicksSat[0+numberIndSat]+52])
    pop()
    pop()
  }
  
  //Sunday (10/13)
  
  //Monday (10/14)
  
  if (mouseX > 516 && mouseX < 600){ 
    push()
    strokeWeight(5)
    stroke(255)
    fill(201, 191, 214, 150)
    numberIndMon++
ellipse(xCoordinates[numberOfClicksMon[0+numberIndMon]+57],yCoordinates[numberOfClicksMon[0+numberIndMon]+57],ellipseWidths[numberOfClicksMon[0+numberIndMon]+57], ellipseHeights[numberOfClicksMon[0+numberIndMon]+57])
    push()
    strokeWeight(1.5)
    fill(255)
    textAlign(CENTER)
    textSize(30)
    text(random(fillers),xCoordinates[numberOfClicksMon[0+numberIndMon]+57],yCoordinates[numberOfClicksMon[0+numberIndMon]+57])
    pop()
    pop()
  }
  
}
