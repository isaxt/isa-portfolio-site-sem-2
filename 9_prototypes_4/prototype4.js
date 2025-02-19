
let myFont;
let pointArray;

// adjusted font size
let size; 
let msg = "whimsy";

// tracks which squares should stay enlarged
let hoveredSquares = []; 

// when the mouse goes over the square--> expands and changes color
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
        
        // initialize hovered state for each point
        for (let i = 0; i < pointArray.length; i++) {
            hoveredSquares.push(false);
        }
    } else {
        console.error("Font failed to load.");
        pointArray = [];
    }
}

function draw() {
    background(209, 234, 235);
    
    noStroke();

    for (let i = 0; i < pointArray.length; i++) {
        let p = pointArray[i];

        // mouse distance
        let d = dist(mouseX, mouseY, p.x, p.y);

        // if mouse is over a square--> keep it larger
        if (d < 10) {
            hoveredSquares[i] = true;
        }

        // set square size -->based on hover state
        let squareSize = hoveredSquares[i] ? 15 : 5;

        // change color when hovered
        fill(hoveredSquares[i] ? color(255, 0, 195) : color(6, 69, 71));

        rect(p.x, p.y, squareSize, squareSize);
    }
}