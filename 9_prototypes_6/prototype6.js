
    
    let myFont;
    let pointArray;
    
    let r = 30;
    let angle = 0;
    let size = 200;
    let msg = "whimsy";

    //interaction where the points are randomly sized between 2-5 and it follows mouse
    function preload() {
        myFont = loadFont("LoveGlitchPersonalUseRegular-vmEyA.ttf"); 
    }
    
    function setup() {
        createCanvas(600, 580);
        angleMode(DEGREES);
        
        // checks to see if font is loaded before calling textToPoints
        if (myFont) {
            pointArray = myFont.textToPoints(msg, 0, 10, size, { sampleFactor: 0.1, simplifyThreshold: 0 });
        } else {
            console.error("Font failed to load.");
            pointArray = [];
        }
    }
    
    function draw() {
        background(212, 243, 252);
        
        // calculate x + y position based on mouse movement
        let x = r * cos(map(mouseX, 0, width, 0, 360)); 
        let y = r * sin(map(mouseY, 0, height, 0, 360));
    
        translate(40, 300);
        
        // set fill color for circles
        fill(87, 75, 85); 

        // remove stroke for a "cleaner" look
        noStroke(); 
        
        for (let i = 0; i < pointArray.length; i++) {

            // not so "random" diameter between 2 and 5 pixels
            let d = random(2, 5); 
            circle(pointArray[i].x + x, pointArray[i].y + y, d);
        }
    }
    