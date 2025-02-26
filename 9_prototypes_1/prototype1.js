let myFont;
let msg = "meep";
let size = 200;

// follows the mouse interaction
function preload() {
    // loading the font
    myFont = loadFont("GlitchGoblin-2O87v.ttf");
}

class TextPoints {
    constructor(font, message, size) {
        this.font = font;
        this.message = message;
        this.size = size;
        this.pointArray = [];
        this.loadPoints();
    }
    
    loadPoints() {

        //font is loaded before calling textToPoints--> sometimes it wouldn't load and I was so frustrated
        if (this.font) {
            this.pointArray = this.font.textToPoints(this.message, 0, 10, this.size, { sampleFactor: 0.1, simplifyThreshold: 0 });
        } else {
            console.error("Font failed to load.");
            this.pointArray = [];
        }
    }
    
    display(motionX, motionY) {

        //mouseX--> horizontal position of the mouse within the canvas
        //angleMode in setup--> use angles
        let r = 30;
        let x = r * cos(map(motionX, 0, width, 0, 360)); 
        let y = r * sin(map(motionY, 0, height, 0, 360));
        
        translate(40, 300);
        
        // set stroke color to be more clear
        stroke(0); 
        strokeWeight(1.5); // increase/decrease the width
        
        for (let i = 0; i < this.pointArray.length; i++) {
            line(this.pointArray[i].x, this.pointArray[i].y, this.pointArray[i].x + x, this.pointArray[i].y + y);
        }
    }
}

let textPoints;

function setup() {
    createCanvas(600, 580);
    angleMode(DEGREES);
    textPoints = new TextPoints(myFont, msg, size);
}

function draw() {
    background(188, 235, 207);
    textPoints.display(mouseX, mouseY);
}
