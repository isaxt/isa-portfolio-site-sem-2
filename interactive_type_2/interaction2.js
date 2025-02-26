let myFont;
let size;
let msg = "whimsy";
let backgroundDots = [];

// background dots that change into flowers!
class BackgroundDot {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        // small dot size
        this.size = 3; 
        this.hovered = false;
    }

    checkHover(mx, my) {
        let d = dist(mx, my, this.x, this.y);

        // if the mouse is close, change to flower
        this.hovered = d < 10; 
    }

    display() {
        textAlign(CENTER, CENTER);
        textSize(20);

        // flower emoji when hovered
        if (this.hovered) {
            text("🌸", this.x, this.y); 
        } else {
            fill(100, 100, 150);
            noStroke();
            ellipse(this.x, this.y, this.size, this.size);
        }
    }
}

// when the mouse goes over the skinny circle-> expands and changes color
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
        this.size = 300;
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
        // lower the sampleFactor to increase points
        if (this.font) {
            this.pointArray = this.font.textToPoints(this.message, this.xOffset, this.yOffset, this.size, { sampleFactor: 0.2, simplifyThreshold: 0 });
            this.hoveredSquares = new Array(this.pointArray.length).fill(false);
        } else {
            console.error("Font failed to load.");
            this.pointArray = [];
        }
    }

    display(mouseX, mouseY) {
        background(217, 246, 252);

        // display + update background dots
        for (let dot of backgroundDots) {
            dot.checkHover(mouseX, mouseY);
            dot.display();
        }

        // after so the dot can be seen
        noStroke();

        for (let i = 0; i < this.pointArray.length; i++) {
            
            let p = this.pointArray[i];
            // mouse distance
            let d = dist(mouseX, mouseY, p.x, p.y);

            // if mouse is over a circle--> keep it larger
            if (d < 10) {
                this.hoveredSquares[i] = true;
            }

            // set circle size -->based on hover state
            // 2 --> inital size, 7--> expanded size
            let circleSize = this.hoveredSquares[i] ? 7 : 2;

            // change color when hovered
            fill(this.hoveredSquares[i] ? color(255, 0, 195) : color(135, 105, 135));
            ellipse(p.x, p.y, circleSize, circleSize);
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

    // generate random background dots
    for (let i = 0; i < 50; i++) {
        backgroundDots.push(new BackgroundDot(random(width), random(height)));
    }
}

function draw() {
    hoverEffect.display(mouseX, mouseY);
}


// // tracks which squares should stay enlarged
// let hoveredSquares = []; 