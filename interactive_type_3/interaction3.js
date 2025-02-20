


//prototype 7 code

// let myFont;
// let pointArray;

// //smaller to fit the whole word
// let size = 140;
// let msg = "linger...";

// // inspo of prototype 2 when the user moves closer to the middle of the canvas--> word forms--> further away--> scattered lines
// function preload() {
//     myFont = loadFont("CosmicVibrant-WywzY.otf "); 
// }

// function setup() {
//     createCanvas(600, 580);
//     angleMode(DEGREES);
    
//     if (myFont) {
//         pointArray = myFont.textToPoints(msg, 0, 10, size, { sampleFactor: 0.1, simplifyThreshold: 0 });
//     } else {
//         console.error("Font failed to load.");
//         pointArray = [];
//     }
// }

// function draw() {
//     background(117, 109, 107);

//     let centerX = width / 2;
//     let centerY = height / 2;
    
//     // calculate distance from mouse to center
//     let d = dist(mouseX, mouseY, centerX, centerY);
    
//     // maxScatter--> defines max scatter distance
//     // map--> d from 0 to half the width
//     //true--> value is within the range
//     let maxScatter = 50; 
//     let scatterFactor = map(d, 0, width / 2, 0, maxScatter, true); 

//     translate(40, 300);

//     stroke(190, 247, 201);
//     strokeWeight(3);

//     //random angle in degrees
//     for (let i = 0; i < pointArray.length; i++) {
        
        
//         // randomized scatter offset based on the scatter factor
//         let xOffset = scatterFactor * cos(random(360));
//         let yOffset = scatterFactor * sin(random(360));
        
//         // lerp between original and scattered positions--> closer mouse is to center--> less scatter
//         let newX = lerp(pointArray[i].x, pointArray[i].x + xOffset, scatterFactor / maxScatter);
//         let newY = lerp(pointArray[i].y, pointArray[i].y + yOffset, scatterFactor / maxScatter);

//         // draw vertical lines instead of points
//         //height of each line is 10 pixels
//         line(newX, newY - 5, newX, newY + 5);
//     }
// }

// prototype 9 code
// let myFont;
// let pointArray;

// // adjusted font size
// let size; 
// let msg = "linger...";

// // stores the randomized start positions
// let startPositions = [];

// // the animation progress--0 to 1 over 10 seconds
// let animationProgress = 0;

// // diagonal lines form the word-- over 10 seconds

// function preload() {
//         myFont = loadFont("CosmicVibrant-WywzY.otf");
// }

// function setup() {
//     createCanvas(600, 400);
//     angleMode(DEGREES);
    
//     // appropriate font size to fit the canvas width
//     // some padding on the sides
//     let maxWidth = width - 80; 

//     size = 200; 
//     let bounds = myFont.textBounds(msg, 0, 0, size);

//     // scale down if too wide
//     if (bounds.w > maxWidth) {
//         size = (maxWidth / bounds.w) * size;
//     }

//     // new bounds after scaling
//     bounds = myFont.textBounds(msg, 0, 0, size);

//     // calculate position --> offsets to center text
//     // center horizontally + vertically
//     let xOffset = (width - bounds.w) / 2;
//     let yOffset = (height + bounds.h) / 2 - 50; 

//     if (myFont) {
//         pointArray = myFont.textToPoints(msg, xOffset, yOffset, size, { sampleFactor: 0.1, simplifyThreshold: 0 });

//         // generate random starting positions for animation
//         for (let i = 0; i < pointArray.length; i++) {
//             startPositions.push({x: random(width), y: random(height)});
//         }
//     } else {
//         console.error("Font failed to load.");
//     }
// }

// function draw() {
//     background(236, 211, 245);
    
//     stroke(0);

//     // fatter stroke weight 
//     strokeWeight(3);

//     // animation progress over 10 seconds (600 frames at 60 FPS)
//     animationProgress = min(animationProgress + (1 / 600), 1);

//     for (let i = 0; i < pointArray.length; i++) {
//         let p = pointArray[i];
//         let start = startPositions[i];

//         // interpolate position from random start --> final text position
//         let x = lerp(start.x, p.x, animationProgress);
//         let y = lerp(start.y, p.y, animationProgress);

//         // draw diagonal line-- 10 pixels + 45 degree angle
//         line(x - 5, y - 5, x + 5, y + 5);
//     }
// }
