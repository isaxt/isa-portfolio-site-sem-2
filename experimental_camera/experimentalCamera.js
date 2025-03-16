let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO,{ flipped:true });
  capture.hide();
  
  noStroke();

  loadPixels();
}

function draw() {
  background(0);

  capture.loadPixels();
  
  // change the stepSize for higher resolution
  drawPoints(capture.width, capture.height, 10);
}

//make sure that the pixels have been loaded
function getColorFromPixelArray(pixelArray, x, y, w){
  let index = (x+y*w)*4;

  let r= pixelArray[index] ;
  let g= pixelArray[index+1] ;
  let b= pixelArray[index+2];
  let a= pixelArray[index+3];

  // rgb tint color
  let tintR = 39;
  let tintG = 64;
  let tintB = 32;

  // blend the original pixel color with the tint color
  let mixRatio = 0.6; // adjust  for stronger or weaker tint
  r = r * (1 - mixRatio) + tintR * mixRatio;
  g = g * (1 - mixRatio) + tintG * mixRatio;
  b = b * (1 - mixRatio) + tintB * mixRatio;

  return color (r,g,b,a);
}

// draws each circle by using get() on the capture
function drawPoints(w, h, stepSize) {
  
  for (let x = 0; x < w; x += stepSize) {
    for (let y = 0; y < h; y += stepSize) {

     let col= getColorFromPixelArray(capture.pixels, x,y, capture.width); // returning--> not assigned to anything

      fill(col);

      //pixels!
      rect(x, y, stepSize);
    }
  }
}

/*
Notes from class
for optimization consider:
 - loading pixels before drawing points
 - passing in specific pixelArrays to the drawPoints to support any kind of pixel array, not bound to "capture"
 - create getColorFromPixelArray(array, x, y, w) function

*/