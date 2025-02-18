let myFont;
let pointArray;

let r = 30;
let angle = 0;
let size = 200;
let msg = "meep";


// follows the mouse interaction
function preload() {

    // loading the font
    myFont = loadFont("GlitchGoblin-2O87v.ttf");
}

function setup() {
    createCanvas(600, 580);
    angleMode(DEGREES);
    
    //font is loaded before calling textToPoints--> sometimes it wouldn't load and I was so frustrated
    if (myFont) {
        pointArray = myFont.textToPoints(msg, 0, 10, size, { sampleFactor: 0.1, simplifyThreshold: 0 });
         } else {
        console.error("Font failed to load.");
        pointArray = [];
    }
}

function draw() {
    background(188, 235, 207);
    
    //mouseX--> horizontal position of the mouse within the canvas
    //angleMode in setup--> use angles 
    let x = r * cos(map(mouseX, 0, width, 0, 360)); 
    let y = r * sin(map(mouseY, 0, height, 0, 360));

    translate(40, 300);
    
    // set stroke color to be more clear
    stroke(0); 
    strokeWeight(1.5); // increase/decrease the width
    
    for (let i = 0; i < pointArray.length; i++) {
        line(pointArray[i].x, pointArray[i].y, pointArray[i].x + x, pointArray[i].y + y);
    }
}