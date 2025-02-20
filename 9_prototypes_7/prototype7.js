
let myFont;
let pointArray;

//smaller to fit the whole word
let size = 140;
let msg = "linger...";

// inspo of prototype 2 when the user moves closer to the middle of the canvas--> word forms--> further away--> scattered lines
function preload() {
    myFont = loadFont("CosmicVibrant-WywzY.otf "); 
}

function setup() {
    createCanvas(600, 580);
    angleMode(DEGREES);
    
    if (myFont) {
        pointArray = myFont.textToPoints(msg, 0, 10, size, { sampleFactor: 0.1, simplifyThreshold: 0 });
    } else {
        console.error("Font failed to load.");
        pointArray = [];
    }
}

function draw() {
    background(117, 109, 107);

    let centerX = width / 2;
    let centerY = height / 2;
    
    // calculate distance from mouse to center
    let d = dist(mouseX, mouseY, centerX, centerY);
    
    // maxScatter--> defines max scatter distance
    // map--> d from 0 to half the width
    //true--> value is within the range
    let maxScatter = 50; 
    let scatterFactor = map(d, 0, width / 2, 0, maxScatter, true); 

    translate(40, 300);

    stroke(190, 247, 201);
    strokeWeight(3);

    //random angle in degrees
    for (let i = 0; i < pointArray.length; i++) {
        
        
        // randomized scatter offset based on the scatter factor
        let xOffset = scatterFactor * cos(random(360));
        let yOffset = scatterFactor * sin(random(360));
        
        // lerp between original and scattered positions--> closer mouse is to center--> less scatter
        let newX = lerp(pointArray[i].x, pointArray[i].x + xOffset, scatterFactor / maxScatter);
        let newY = lerp(pointArray[i].y, pointArray[i].y + yOffset, scatterFactor / maxScatter);

        // draw vertical lines instead of points
        //height of each line is 10 pixels
        line(newX, newY - 5, newX, newY + 5);
    }
}

