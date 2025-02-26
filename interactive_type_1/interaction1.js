//meep
// prototype 3 "push" further


let myFont;
let size = 200;
let msg = "meep";


// squares that expand + jitters when the mouse goes over them
class JitterEffect {
    constructor(font, message) {
        this.font = font;
        this.message = message;
        this.pointArray = [];

        // Stores per-point noise offsets
        this.jitter = [];
        this.loadPoints();
    }

    loadPoints() {

        // initialize the jitter array for each point
        if (this.font) {
            this.pointArray = this.font.textToPoints(this.message, 0, 10, size, { sampleFactor: 0.1, simplifyThreshold: 0 });
            this.jitter = Array.from({ length: this.pointArray.length }, () => ({ x: random(-1, 1), y: random(-1, 1) }));
        } else {
        //checks if font loads
            console.error("Font failed to load.");
            this.pointArray = [];
        }
    }

    display(mouseX, mouseY) {
        background(223, 242, 228);
        
        //background squares!
        this.drawBackgroundSquares();
        translate(40, 300);
        noStroke();
        fill(49, 60, 87);

        // the range of the pixel interaction
        let maxDist = 100;

        for (let i = 0; i < this.pointArray.length; i++) {
            let p = this.pointArray[i];

            // calculates the mouse distance
            let d = dist(mouseX, mouseY, p.x + 40, p.y + 300);

            // stronger when mouse is closer
            let effectStrength = map(d, 0, maxDist, 1, 0, true);

            // apply "random" (within a range) motion effect if mouse is near
            let xOffset = this.jitter[i].x * random(-5, 5) * effectStrength;
            let yOffset = this.jitter[i].y * random(-5, 5) * effectStrength;

            // smooth movement with perlin noise!
            let noiseX = noise(frameCount * 0.05 + i) * 10 * effectStrength;
            let noiseY = noise(frameCount * 0.05 - i) * 10 * effectStrength;
            let newX = p.x + xOffset + noiseX;
            let newY = p.y + yOffset + noiseY;

            // square size based on distance to the mouse
            // d--> distance from the mouse
            //0, maxDist--> original range + range of interaction
            //20--> max square size, 7--> default size
            //true--> makes sure its within the value
            let squareSize = map(d, 0, maxDist, 20, 7, true);
            rect(newX, newY, squareSize, squareSize);
        }
    }

    // adding background pixels for more "ambiance"--> a bit chaotic but its fun
    drawBackgroundSquares() {
        for (let i = 0; i < 50; i++) {
            let x = random(width);
            let y = random(height);
            let size = random(3, 10);
            fill(49, 60, 87);
            rect(x, y, size, size);
        }
    }
}

let jitterEffect;

function preload() {
    myFont = loadFont("GlitchGoblin-2O87v.ttf");
}

function setup() {
    createCanvas(600, 580);
    angleMode(DEGREES);
    jitterEffect = new JitterEffect(myFont, msg);
}

function draw() {
    jitterEffect.display(mouseX, mouseY);
}
