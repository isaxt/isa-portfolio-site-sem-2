
let myFont;
let pointArray;

//smaller to fit the whole word
let size = 140;
let msg = "linger...";

// stores the "per-point" noise offsetting
let jitter = []; 

// diagonal lines of 45ish degrees that expand + jitter when the mouse goes over them
function preload() {
    myFont = loadFont("CosmicVibrant-WywzY.otf "); 
}

function setup() {
    createCanvas(600, 580);
    angleMode(DEGREES);
    
    if (myFont) {
        pointArray = myFont.textToPoints(msg, 0, 10, size, { sampleFactor: 0.1, simplifyThreshold: 0 });
        
        // initialize the jitter array for each point
        for (let i = 0; i < pointArray.length; i++) {
            jitter.push({ x: random(-1, 1), y: random(-1, 1) });
        }
    } else {
        // checks if font loads
        console.error("Font failed to load.");
        pointArray = [];
    }
}

function draw() {
    background(220, 245, 218);

    let centerX = width / 2;
    let centerY = height / 2;

    translate(40, 300);

    stroke(121, 98, 158);
    strokeWeight(2);

    for (let i = 0; i < pointArray.length; i++) {
        let p = pointArray[i];

        // calculates the mouse distance
        let d = dist(mouseX, mouseY, p.x + 40, p.y + 300);

        // the range of the pixel interaction
        let maxDist = 100;

        // stronger when mouse is closer
        // 2--> stronger than 1-- i like the effect here strongwer
        let effectStrength = map(d, 0, maxDist, 2, 0, true); 

        // apply "random" (within a range) motion effect if mouse is near
        let xOffset = jitter[i].x * random(-5, 5) * effectStrength;
        let yOffset = jitter[i].y * random(-5, 5) * effectStrength;

        // smooth movement with perlin noise!
        let noiseX = noise(frameCount * 0.05 + i) * 10 * effectStrength;
        let noiseY = noise(frameCount * 0.05 - i) * 10 * effectStrength;

        let newX = p.x + xOffset + noiseX;
        let newY = p.y + yOffset + noiseY;

        // draw 45ish-degree diagonal line
        line(newX - 5, newY - 5, newX + 5, newY + 5);
    }
}
