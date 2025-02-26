let myFont;
let size;
let msg = "whimsy";


// when the mouse goes over the square--> expands and changes color
class HoverEffect {
    constructor(font, message) {
        this.font = font;
        this.message = message;
        this.pointArray = [];

        this.hoveredSquares = [];
        this.calculateSizeAndPosition();
        this.loadPoints();
    }

    calculateSizeAndPosition() {

        // appropriate font size to fit the canvas width
        // some padding on the sides
        let maxWidth = width - 80;
        this.size = 200;
        let bounds = this.font.textBounds(this.message, 0, 0, this.size);

        // scale down if too wide
        if (bounds.w > maxWidth) {
            this.size = (maxWidth / bounds.w) * this.size;
        }

        // new bounds after scaling
        bounds = this.font.textBounds(this.message, 0, 0, this.size);

        // calculate position --> offsets to center text
        // center horizontally + vertically
        this.xOffset = (width - bounds.w) / 2;
        this.yOffset = (height + bounds.h) / 2 - 50;
    }

    loadPoints() {

        // initialize hovered state for each point
        if (this.font) {
            this.pointArray = this.font.textToPoints(this.message, this.xOffset, this.yOffset, this.size, { sampleFactor: 0.1, simplifyThreshold: 0 });
            this.hoveredSquares = new Array(this.pointArray.length).fill(false);
        } else {
            console.error("Font failed to load.");
            this.pointArray = [];
        }
    }

    display(mouseX, mouseY) {
        background(209, 234, 235);
        noStroke();

        for (let i = 0; i < this.pointArray.length; i++) {
            
            
            let p = this.pointArray[i];
            // mouse distance
            let d = dist(mouseX, mouseY, p.x, p.y);

            // if mouse is over a square--> keep it larger
            if (d < 10) {
                this.hoveredSquares[i] = true;
            }

            // set square size -->based on hover state
            let squareSize = this.hoveredSquares[i] ? 15 : 5;

            // change color when hovered
            fill(this.hoveredSquares[i] ? color(255, 0, 195) : color(6, 69, 71));
            rect(p.x, p.y, squareSize, squareSize);
        }
    }
}

let hoverEffect;

function preload() {
    myFont = loadFont("LoveGlitchPersonalUseRegular-vmEyA.ttf");
}

function setup() {
    createCanvas(600, 400);
    angleMode(DEGREES);
    hoverEffect = new HoverEffect(myFont, msg);
}

function draw() {
    hoverEffect.display(mouseX, mouseY);
}


// // tracks which squares should stay enlarged
// let hoveredSquares = []; 
