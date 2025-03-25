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

  
  generateClusters(10); // generate 10 white random clusters 
  generateRedClusters(3); // generate red clusters

   // generate the clusters every 5 seconds (5000ms)
   setInterval(() => {
    generateClusters(10);
    generateRedClusters(3);
   }, 5000);
  }
 
  function draw() {
     // background(0);
 
   capture.loadPixels();
 
   // change the stepSize for higher resolution
   drawPoints(capture.width, capture.height, 10);
 
   // Draw semi-transparent green overlay
   drawGreenOverlay();
 
   // draw the white clusters
   drawClusters(); 
   drawRedClusters(); // red clusters
 
   // draw white borders around the capture area
   drawBorders();
 }
 
 
 // generate random cluster positions + sizes
 function generateClusters(numClusters) {
   clusterPositions = [];
   for (let i = 0; i < numClusters; i++) {
 
     //within the video area
     let clusterX = random(videoX, videoX + capture.width);
     let clusterY = random(videoY, videoY + capture.height);
 
     // each cluster--> different size
     let clusterSize = random(5, 50); 
     clusterPositions.push({ x: clusterX, y: clusterY, size: clusterSize });
   }
 }
 
 // generate red clusters
 function generateRedClusters(numClusters) {
   redClusterPositions = [];
   for (let i = 0; i < numClusters; i++) {
 
     //within the video area
     let clusterX = random(videoX, videoX + capture.width);
     let clusterY = random(videoY, videoY + capture.height);
     let clusterSize = random(5, 50);
     redClusterPositions.push({ x: clusterX, y: clusterY, size: clusterSize });
   }
 }
 
 
 // draws white clusters pixels with varying sizes
 function drawClusters() {
   fill(255); // White color for clusters
   for (let i = 0; i < clusterPositions.length; i++) {
     let { x, y, size } = clusterPositions[i];
     
     // more dots for bigger clusters
     let numDots = floor(size * 2); 
 
     for (let j = 0; j < numDots; j++) { // scattered dots per cluster
       let offsetX = random(-size, size);
       let offsetY = random(-size, size);
       let dotSize = random(2, size / 4); // dots scale with cluster size
       rect(x + offsetX, y + offsetY, dotSize);
     }
   }
 }
 
 // draw red clusters
 function drawRedClusters() {
   fill(255, 0, 0);
   drawAbstractClusters(redClusterPositions);
 }

 
 // draw clusters with scattered dots
 function drawAbstractClusters(clusterArray) {
  for (let i = 0; i < clusterArray.length; i++) {
    let { x, y, size } = clusterArray[i];
    let numDots = floor(size * 2);
    for (let j = 0; j < numDots; j++) {
      let offsetX = random(-size, size);
      let offsetY = random(-size, size);
      let dotSize = random(2, size / 4);
      rect(x + offsetX, y + offsetY, dotSize);
    }
  }
}
//make sure that the pixels have been loaded
function getColorFromPixelArray(pixelArray, x, y, w){
  let index = (x+y*w)*4;


  let r= pixelArray[index] ;
  let g= pixelArray[index+1] ;
  let b= pixelArray[index+2];
  let a= pixelArray[index+3];

  //uniform green tint over the camera
  let baseTintR = 39;
  let baseTintG = 64;
  let baseTintB = 32;
  let baseMixRatio = 0.6; // controls how strong the base tint is

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
  function drawPoints(w, h, stepSize) {
 
    for (let x = 0; x < w; x += stepSize) {
      for (let y = 0; y < h; y += stepSize) {
  
       let col= getColorFromPixelArray(capture.pixels, x,y, capture.width); // returning--> not assigned to anything
  
       fill(col);
 
       //pixels!
       rect(videoX + x, videoY + y, stepSize);
     }
   }
 }

 function drawGreenOverlay() {
  fill(0, 128, 0, 30); // Green color with transparency (RGBA: A=100 for transparency)
  noStroke();
  rect(videoX, videoY, capture.width, capture.height);
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

/*
Notes from class
for optimization consider:
 - loading pixels before drawing points
 - passing in specific pixelArrays to the drawPoints to support any kind of pixel array, not bound to "capture"
 - create getColorFromPixelArray(array, x, y, w) function
 */
