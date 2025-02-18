let myFont;
let pointArray;
let size = 200;
let msg = "meep";

// when the user moves closer to the middle of the canvas--> word forms
// further away--> scattered dots
function preload() {
    myFont = loadFont("GlitchGoblin-2O87v.ttf"); 
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
    background(70, 68, 77);

    let centerX = width / 2;
    let centerY = height / 2;
    
    // calculate distance from mouse to center
    let d = dist(mouseX, mouseY, centerX, centerY);
    
    // map distance --> range controlling scatter effect
    // adjust scatter intensity
    let maxScatter = 50; 
    let scatterFactor = map(d, 0, width / 2, 0, maxScatter, true); 

    translate(40, 300);

    stroke(240, 201, 237);
    strokeWeight(3);

    for (let i = 0; i < pointArray.length; i++) {

        // Randomized scatter effect based on distance
        let xOffset = scatterFactor * cos(random(360));
        let yOffset = scatterFactor * sin(random(360));
        
        // lerp between original and scattered positions--> calculates a value between two other values at a specific increment
        // lerp--> startValue, endValue, amount
        let newX = lerp(pointArray[i].x, pointArray[i].x + xOffset, scatterFactor / maxScatter);
        let newY = lerp(pointArray[i].y, pointArray[i].y + yOffset, scatterFactor / maxScatter);

        point(newX, newY);
    }
}