/*
**NOTE TO SELF: use capture callback function to set capture size (required) and initialize tracker
Lets…
Use clmtrackr to:
Track our face
Draw facial features with p5.js shape primitives
Make the shape that represents our mouth grow or shrink based on how open our mouth is.

*/

/*
Add the “nose-drawing” functionality to our face sketch.
Add a “clear” button to clear our drawing.
*/

let capture;
let tracker;
let positions;
let hasInitialized = false;

let surprisedFace;

// let noseDrawingLayer;

function setup() {

  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO, {flipped: true}, onCaptureCreated);
  //capture.hide();
  tracker = new clm.tracker();
  tracker.init();

  surprisedFace = createGraphics (width, height);

  // noseDrawingLayer = createGraphics(width, height);

}

function onCaptureCreated() {

  capture.size(capture.width, capture.height);
  tracker.start(capture.elt);
  hasInitialized = true;
}

function draw() {
  if (!hasInitialized) return;
 // background(0);
  positions = tracker.getCurrentPosition();

   image(capture, 0, 0);

  if (!positions) return;

  // fill(0);
  // noStroke();
  // surprisedFace.noStroke();

  //drawNose();
  // drawLeftEye();
  // drawRightEye();
   drawMouth();

  //text("😱", 0, 0);
}

// function keyPressed() {
//   if (key === " ") {
//     clearNoseGraphic();
//   }
// }

// function clearNoseGraphic() {
//   noseDrawingLayer.clear();
// }

//text(str, x, y, [maxWidth], [maxHeight];
//😱


function drawMouth() {
  const topXPos = capture.width - positions[60][0];
  const topYPos = positions[60][1];

  const botXPos = capture.width - positions[57][0];
  const botYPos = positions[57][1];

  const distance = dist(topXPos, topYPos, botXPos, botYPos);

  const mappedSize = map(distance, 0, 16, 5, 40, true);

  console.log(floor(distance));

  // if (distance >= 5){
  //   textSize(300);
  //   text("😱", botXPos, botYPos-10);
  //  textAlign(CENTER, CENTER);
  // }

  //hat
  if (distance >= 5){
      textSize(200);
      text("🎩", topXPos, topYPos-200);
     textAlign(CENTER, CENTER);
    }

  //🎩
}

// function drawNose() {
//   const xPos = capture.width - positions[62][0];
//   const yPos = positions[62][1];

//   circle(xPos, yPos, 40);
//   noseDrawingLayer.circle(xPos, yPos, 40);
// }

// function drawLeftEye() {
//   const xPos = capture.width - positions[27][0];
//   const yPos = positions[27][1];

//   circle(xPos, yPos, 20);
// }

// function drawRightEye() {
//   const xPos = capture.width - positions[32][0];
//   const yPos = positions[32][1];

//   circle(xPos, yPos, 20);
// }


//PIXEL THINGS
// let capture;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   capture = createCapture(VIDEO,{ flipped:true });
//   capture.hide();
  
//   noStroke();

//   loadPixels();
// }

// function draw() {
//   background(0);


//   capture.loadPixels();
  
//   // change the stepSize for higher resolution
//   drawPoints(capture.width, capture.height, 10);
// }

// //make sure that the pixels have been loaded
// function getColorFromPixelArray(pixelArray, x, y, w){
//   let index = (x+y*w)*4;
//   const r= pixelArray[index];
//   const g= pixelArray[index+1];
//   const b= pixelArray[index+2];
//   const a= pixelArray[index+3];

//   return color (r,g,b,a);
// }

// // draws each circle by using get() on the capture
// function drawPoints(w, h, stepSize) {
  
//   for (let x = 0; x < w; x += stepSize) {
//     for (let y = 0; y < h; y += stepSize) {

//      let col= getColorFromPixelArray(capture.pixels, x,y, capture.width); // returning--> not assigned to anything

//       fill(col);

//       circle(x, y, stepSize);
//     }
//   }
// }

/*
for optimization consider:
 - loading pixels before drawing points
 - passing in specific pixelArrays to the drawPoints to support any kind of pixel array, not bound to "capture"
 - create getColorFromPixelArray(array, x, y, w) function

*/


//WEB CAMERA THINGS
//store the graphic as a variable
// let capture;

// function setup(){
//   createCanvas (windowWidth,windowHeight);

//   capture = createCapture(VIDEO, {flipped:true});

//   capture.hide();

//   noStroke();
// }


// function draw(){
//   for(let i=0; i<5;i++){
//     drawRandomPoint();
//   }
// }

// function drawRandomPoint(){
// //background (220);

//   //image(capture, 0, 0);

//   let xPos = random(0, capture.width);
//   let yPos = random(0, capture.height);

//   let col = capture.get(xPos, yPos);

//   fill(col)
//   circle (xPos,yPos, 10);

  //let hoveredColor = capture.get(mouseX, mouseY)

  // fill (hoveredColor);
  // circle( mouseX, mouseY, 60);
//}



//OLD THINGS
// // what is the sequence
// //grab the info--> myCustomPoints

// let myFont;
// let textPoints;

// let fallingCircles = [];

// function preload() {
//   myFont = loadFont("comicSans.ttf");
// }

// function setup() {
  
//   // create the array of points to reference in the future
//   textPoints = myFont.textToPoints("MOO", 20, 140, 140, {sampleFactor: 0.2} );
  
  
//   createCanvas(400, 400);
//   background(199, 237, 209);
  
//   fill(115, 25, 112);
//   noStroke();
  
  
//   // function to create and store circles in an array
//   createCircles();
  
// }

// function draw() {
  
//   background(199, 237, 209);
  
//   // update and display the circles in the fallingCircles array
//   for (let i = 0; i < fallingCircles.length; i++) {
    
//     fallingCircles[i].update();
//     fallingCircles[i].display();
    
//   }
    
// }

// function createCircles() {
  
//   // for each point created by textToPoints()
//   // create + store a new FallingCircle object
//   for (let i = 0; i < textPoints.length; i++) {
//     fallingCircles.push(
//       new FallingCircle(textPoints[i].x, textPoints[i].y)
//     );
//   }
// }


// // create a class --> define what it means to be a falling circle
// class FallingCircle {
//   constructor(xPos, yPos) {
//     this.x = xPos;
//     this.y = yPos;
    
//     this.size = 5;
    
//     // when a circle is created-->pick a random time for it to start falling
//     this.timeToFall = random(5, 10);
    
//     // create a timer to track how much time has elapsed since the object's creation
//     this.timer = 0;
//   }
  
//   // method to be called--> to allow for updates in a falling circle's data
//   update() {
//     // increment the timer by the amount of time elapsed
//     this.timer += deltaTime / 1000;
    
//     // make the circle fall when enough time has passed
//     if (this.timer > this.timeToFall) {
//       this.y += deltaTime / 10;
//     }
//   }
  
//   // method to be called to render a falling circle on screen
//   display() {
//     circle(this.x, this.y, this.size);
//   }
// }

// /*
// Let’s make…
// “MOO” but each point is actually an object that inherits from a custom class of ours (call the class CustomPoint)
// Assign a random color to each point and draw them.
// Note that previously we could not have our code in draw() if we did this!
// Make them all blink at different rhythms.

// */
// // let myFont;
// // let textPoints;

// // let myCustomPoints=[];
// // const ourWord = "MOO";

// // let pointArray;

// // function preload() {
// //     myFont = loadFont("comicSans.ttf");
// // }

// // function setup() {
// //     createCanvas(400, 400)
// //     background(0, 0, 0);

// //     textPoints = myFont.textToPoints(ourWord, 20, 150, 135, {sampleFactor: 0.2 });

// //     //taking the info from textToPoint
// //     for (let i = 0; i < textPoints.length; i++) {
// //         myCustomPoints.push(new CustomPoint(textPoints[i].x,textPoints[i].y ))
// //     }

// //     //second loop to assign partner points
// //     for(let i=0; i< myCustomPoints.length;i++){
// //         myCustomPoints[i].assignPartnerPoint();
// //     }
    
// // }

// // function draw() {
// //     background (0);
// //     for (let i=0; i<myCustomPoints.length; i++){
// //         myCustomPoints[i].update();
// //         myCustomPoints[i].display();
// //     }

// // }

// // class CustomPoint{
// //     constructor(xPos, yPos){
// //         this.r= random(0,255);
// //         this.g= random(0,255);
// //         this.b= random(0,255);

// //         this.x= xPos;
// //         this.y=yPos;

// //         this.size=5;

// //         this.timer= 0; 
// //         this.blinkTime = random (0.5, 2.5);

// //         //boolean
// //         this.on=true;

// //         this.partnerPoint=null;

// //     }
    
// //     assignPartnerPoint(){
// //         this.partnerPoint=random(myCustomPoints);
// //     }

// //     update(){
// //         //deltaTime--> the time it takes to render between frames in milliseconds
// //         // divide by 1000 so its in seconds
// //         this.timer+= deltaTime/1000;

// //         if (this.timer>= this.blinkTime){
// //             this.on =! this.on;
// //             this.timer =0;
// //         }
// //     }

// //     display(){
        
// //        // if (this.on){
// //             fill(this.r, this.g, this.b);
// //             circle(this.x, this.y, this.size);
// //        // }

// //        push();
// //             stroke(255);
// //             line (this.x, this.y, this.partnerPoint.x, this.partnerPoint.y);
// //        pop();
        
// //     }
// // }