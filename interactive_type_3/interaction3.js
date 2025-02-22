// linger...

// combination of prototype 7 and 9 effects

let myFont;
let size = 140;
let msg = "linger...";
let points = [];

//tracks animation progress
let animationProgress = 0;

function preload() {
    myFont = loadFont("CosmicVibrant-WywzY.otf");
}

function setup() {
    createCanvas(600, 580);

    //degress instead of radians
    angleMode(DEGREES);
    
    //padding for the canvas
    let maxWidth = width - 80;
    size = 200;

    // bounding box (size) of the text
    let bounds = myFont.textBounds(msg, 0, 0, size);

    if (bounds.w > maxWidth) {
        size = (maxWidth / bounds.w) * size;
    }

    bounds = myFont.textBounds(msg, 0, 0, size);
    let xOffset = (width - bounds.w) / 2;
    let yOffset = (height + bounds.h) / 2 - 50;

    if (myFont) {
        //convert text into array of points
        // factor--> point density--> higher = more points
        //simplifyThreshold--> no simplification of the points
        let pointArray = myFont.textToPoints(msg, xOffset, yOffset, size, { sampleFactor: 0.08, simplifyThreshold: 0 });
        
        // create a linger point object for each point in the text
        for (let i = 0; i < pointArray.length; i++) {
            points.push(new LingerPoint(pointArray[i].x, pointArray[i].y, random(width), random(height)));
        }
    } else {
        console.error("Font failed to load.");
    }
}

function draw() {
    background(117, 109, 107);
    let centerX = width / 2;
    let centerY = height / 2;

    // calc the distanct from mouse to center of the canvas
    // max scatter distance-- map distance to scatter range
    let d = dist(mouseX, mouseY, centerX, centerY);
    let maxScatter = 50;
    let scatterFactor = map(d, 0, width / 2, 0, maxScatter, true);
    
    //smooth animation progress (0--> over 10 seconds)
    animationProgress = min(animationProgress + (1 / 600), 1);
    
    //update the point's position + draw the point
    for (let point of points) {
        point.update(scatterFactor, animationProgress);
        point.display();
    }
}

class LingerPoint {
    constructor(x, y, startX, startY) {
        this.x = x; // where the text it (X)
        this.y = y; // where the text it (Y)
        this.startX = startX;
        this.startY = startY;
    }

    update(scatterFactor, animationProgress) {
        
        //random X and Y scatter
        let xOffset = scatterFactor * cos(random(360));
        let yOffset = scatterFactor * sin(random(360));

        // interpolates from the starting position to the final position
        this.currentX = lerp(this.startX, this.x + xOffset, animationProgress);
        this.currentY = lerp(this.startY, this.y + yOffset, animationProgress);
    }

    display() {

        // blue diagonal lines (animates inward and when the mouse is toward center--> forms word)
        stroke(147, 224, 250);
        strokeWeight(3);
        line(this.currentX - 5, this.currentY - 5, this.currentX + 5, this.currentY + 5);
        
        //background diagonal lines (faded effect)
        stroke(0, 0, 0, 50);
        strokeWeight(2);
        line(this.startX - 5, this.startY - 5, this.startX + 5, this.startY + 5);
    }
}