
let capture;
let clusterPositions = [];
let videoX, videoY; // to center the video

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  capture = createCapture(VIDEO,{ flipped:true });
  capture.size(640, 480); // fixed size for the video
  capture.hide();
  
  noStroke();

  loadPixels();

  // position the video in the center
  videoX = (width - capture.width) / 2;
  videoY = (height - capture.height) / 2;

  //set interval to randomize the noise speed-- thanks Luca!
  noiseSeed[10];

// how mahy miliseconds it changes
  setInterval(
    () => {
      noiseSeed(floor(random(0,100)));
    }, 500);
  
}

function draw() {
  capture.loadPixels();
  
  // change the stepSize for higher resolution
  drawPoints(capture.width, capture.height, 10);


  // draw white borders around the capture area
  drawBorders();
}

//make sure that the pixels have been loaded
function getColorFromPixelArray(pixelArray, x, y, w){
  let index = (x+y*w)*4;

  let r= pixelArray[index] ;
  let g= pixelArray[index+1] ;
  let b= pixelArray[index+2];
  let a= pixelArray[index+3];

  return [r,g,b,a];
}

// draws each rect by using get() on the capture
// from the color-- different fucntions that does different functions that changes it
// bright enough-- white-- even higher-- being red
function drawPoints(w, h, stepSize) {
  
  for (let x = 0; x < w; x += stepSize) {
    for (let y = 0; y < h; y += stepSize) {

     let col= getColorFromPixelArray(capture.pixels, x,y, capture.width); // returning--> not assigned to anything

     col = processColor(col, x, y);
      fill(col);

      //pixels!
      rect(videoX + x, videoY + y, stepSize);
    }
  }
}

//3/20 help from Luca + isa iterations
// all the color stuff happens in here
function processColor(col, x, y){
  //adding the r, g,b,a --> if the sum is bigger than the threshold
  let sumOfColors = col[0] + col[1] + col[2] + col[3];
  let threshold = 780;

  if (sumOfColors>threshold){ // is the pixel in the white zone?
    // changing the % increases/decreases red pixels
    if (noise(x,y)>0.65 && sumOfColors > threshold + 50) {
      return [255, 0, 0, 255];
    }
    
    //white
    return [255, 255, 255, 255];
  } else{
    col[1]+=70 // making it more green
  }
  //return the original values
  return col;
}


// white rectangle borders
function drawBorders() {
  fill(255); // white color for the border-- matches background 
  noStroke();

  let thickness = 50; // border thickness-- thicker is better

  // top border
  rect(videoX - thickness, videoY - thickness, capture.width + 2 * thickness, thickness);
  
  // bottom border
  rect(videoX - thickness, videoY + capture.height, capture.width + 2 * thickness, thickness);
  
  // left border
  rect(videoX - thickness, videoY, thickness, capture.height);
  
  // right border
  rect(videoX + capture.width, videoY, thickness, capture.height);
}