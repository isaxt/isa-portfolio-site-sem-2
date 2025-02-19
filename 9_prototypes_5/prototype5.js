
let myFont;
let pointArray;

// adjusted font size
let size; 
let msg = "whimsy";

// stores the randomized start positions
let startPositions = [];

// the animation progress--0 to 1 over 5 seconds
let animationProgress = 0;

//over the course of 5 seconds, the pixels form the word
function preload() {
    myFont = loadFont("LoveGlitchPersonalUseRegular-vmEyA.ttf"); 
}

function setup() {
    createCanvas(600, 400);
    angleMode(DEGREES);
    
    // appropriate font size to fit the canvas width
    // some padding on the sides
    let maxWidth = width - 80; 

    size = 200; 
    let bounds = myFont.textBounds(msg, 0, 0, size);

    // scale down if too wide
    if (bounds.w > maxWidth) {
        size = (maxWidth / bounds.w) * size;
    }

    // new bounds after scaling
    bounds = myFont.textBounds(msg, 0, 0, size);

    // calculate position --> offsets to center text
     // center horizontally + vertically
    let xOffset = (width - bounds.w) / 2;
    let yOffset = (height + bounds.h) / 2 - 50; 

    if (myFont) {
        pointArray = myFont.textToPoints(msg, xOffset, yOffset, size, { sampleFactor: 0.1, simplifyThreshold: 0 });

        // generate random starting positions for animation
        for (let i = 0; i < pointArray.length; i++) {
            startPositions.push({x: random(width), y: random(height)});
        }
    } else {
        console.error("Font failed to load.");
    }
}

function draw() {
    background(245, 213, 237);
    
    stroke(66, 62, 65);

    // animation progress over 5 seconds (300 frames at 60 FPS)
    animationProgress = min(animationProgress + (1 / 300), 1);

    for (let i = 0; i < pointArray.length; i++) {
        let p = pointArray[i];
        let start = startPositions[i];

        // interpolate position from random start --> final text position
        let x = lerp(start.x, p.x, animationProgress);
        let y = lerp(start.y, p.y, animationProgress);

        ellipse(x, y, 8, 8);
    }
}