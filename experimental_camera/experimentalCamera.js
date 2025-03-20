// still need to add the red pixels and make the more abstract clusters

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

  //set interval to randomize the noise speed

  noiseSeed[10];

// how mahy mili secs it changes
  setInterval(
    () => {
      noiseSeed(floor(random(0,100)));
    }, 500);
  
}

function draw() {
 // background(0);

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

  //uniform green tint over the camera
  let baseTintR = 39;
  let baseTintG = 64;
  let baseTintB = 32;
  let baseMixRatio = 0.6; // controls how strong the base tint is


  // add to the green channel so the tint isn't drawn over
  // blend the original pixel color with the tint color
  r = r * (1 - baseMixRatio) + baseTintR * baseMixRatio;
  g = g * (1 - baseMixRatio) + baseTintG * baseMixRatio;
  b = b * (1 - baseMixRatio) + baseTintB * baseMixRatio;

  //center of the capture
  let centerX = w / 2;
  let centerY = capture.height / 2;
  
  // distance from the center
  let distFromCenter = dist(x, y, centerX, centerY);
  let maxDist = dist(0, 0, centerX, centerY); // max possible distance
  
  // normalize distance (0 = center, 1 = farthest edge)
  let edgeFactor = distFromCenter / maxDist;

  // dark green edge tint (stronger towards edges)
  let edgeTintR = 5 * edgeFactor;   
  let edgeTintG = 25 * edgeFactor;   
  let edgeTintB = 5 * edgeFactor;   
  let edgeMixRatio = edgeFactor * 0.9; // more tint at the edges

  // blend with the edge tint
  r = r * (1 - edgeMixRatio) + edgeTintR * edgeMixRatio;
  g = g * (1 - edgeMixRatio) + edgeTintG * edgeMixRatio;
  b = b * (1 - edgeMixRatio) + edgeTintB * edgeMixRatio;


  return color (r,g,b,a);
}

// draws each rect by using get() on the capture
// from the color-- different fucntions that does different functions that changes it
// bright enough-- white-- even higher-- being red
// applying this effects separately
// apply a filter over everything

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

//3/20 help from Luca
// all in here
function processColor(col, x, y){
  //adding the r, g,b,a --> if the sum is bigger than 800
  let sumOfColors = col[0] + col[1] + col[2] + col[3];
  let threshold = 760;

  if (sumOfColors>threshold){ // is the pixel in the white zone?
    // half will be right half will be false
    if (noise(x,y)>0.5 && sumOfColors > threshold + 50) {
      return [255, 0, 0, 255];
    }
    
    //white
    return [255, 255, 255, 255];
  } else{
    col[1]+=50 // making it more green
  }
  //return the original values
  return col;
}

// function drawGreenOverlay() {
//   fill(0, 128, 0, 30); // Green color with transparency (RGBA: A=100 for transparency)
//   noStroke();
//   rect(videoX, videoY, capture.width, capture.height);
// }

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

/*
Notes from class
for optimization consider:
 - loading pixels before drawing points
 - passing in specific pixelArrays to the drawPoints to support any kind of pixel array, not bound to "capture"
 - create getColorFromPixelArray(array, x, y, w) function

*/