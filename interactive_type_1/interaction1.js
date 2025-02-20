
//meep

//prototype 2 code
// let myFont;
// let pointArray;
// let size = 200;
// let msg = "meep";

// // when the user moves closer to the middle of the canvas--> word forms
// // further away--> scattered dots
// function preload() {
//     myFont = loadFont("GlitchGoblin-2O87v.ttf"); 
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
//     background(70, 68, 77);

//     let centerX = width / 2;
//     let centerY = height / 2;
    
//     // calculate distance from mouse to center
//     let d = dist(mouseX, mouseY, centerX, centerY);
    
//     // map distance --> range controlling scatter effect
//     // adjust scatter intensity
//     let maxScatter = 50; 
//     let scatterFactor = map(d, 0, width / 2, 0, maxScatter, true); 

//     translate(40, 300);

//     stroke(240, 201, 237);
//     strokeWeight(3);

//     for (let i = 0; i < pointArray.length; i++) {

//         // Randomized scatter effect based on distance
//         let xOffset = scatterFactor * cos(random(360));
//         let yOffset = scatterFactor * sin(random(360));
        
//         // lerp between original and scattered positions--> calculates a value between two other values at a specific increment
//         // lerp--> startValue, endValue, amount
//         let newX = lerp(pointArray[i].x, pointArray[i].x + xOffset, scatterFactor / maxScatter);
//         let newY = lerp(pointArray[i].y, pointArray[i].y + yOffset, scatterFactor / maxScatter);

//         point(newX, newY);
//     }
// }


//prototype 3 code
// let myFont;
// let pointArray;

// let size = 200;
// let msg = "meep";

// // Stores per-point noise offsets
// let jitter = []; 

// // squares that expand + jitters when the mouse goes over them
// function preload() {
//     myFont = loadFont("GlitchGoblin-2O87v.ttf"); 
// }

// function setup() {
//     createCanvas(600, 580);
//     angleMode(DEGREES);
    
//     if (myFont) {
//         pointArray = myFont.textToPoints(msg, 0, 10, size, { sampleFactor: 0.1, simplifyThreshold: 0 });
        
//         // initialize the jitter array for each point
//         for (let i = 0; i < pointArray.length; i++) {
//             jitter.push({ x: random(-1, 1), y: random(-1, 1) });
//         }
//     } else {
//         //checks if font loads
//         console.error("Font failed to load.");
//         pointArray = [];
//     }
// }

// function draw() {
//     background(245, 186, 115);

//     let centerX = width / 2;
//     let centerY = height / 2;

//     translate(40, 300);

//     noStroke();
//     fill(3, 23, 252);

//     for (let i = 0; i < pointArray.length; i++) {
//         let p = pointArray[i];

//         // calculates the mouse distance
//         let d = dist(mouseX, mouseY, p.x + 40, p.y + 300);

//         // the range of the pixel interaction
//         let maxDist = 80;

//         // stronger when mouse is closer
//         let effectStrength = map(d, 0, maxDist, 1, 0, true); 

//         // apply "random" (within a range) motion effect if mouse is near
//         let xOffset = jitter[i].x * random(-5, 5) * effectStrength;
//         let yOffset = jitter[i].y * random(-5, 5) * effectStrength;

//         // smooth movement with perlin noise!
//         let noiseX = noise(frameCount * 0.05 + i) * 10 * effectStrength;
//         let noiseY = noise(frameCount * 0.05 - i) * 10 * effectStrength;

//         let newX = p.x + xOffset + noiseX;
//         let newY = p.y + yOffset + noiseY;

//         // square size based on distance to the mouse
//         // d--> distance from the mouse
//         //0, maxDist--> original range + range of interaction
//         //10--> max square size, 5--> default size
//         //true--> makes sure its within the value
//         let squareSize = map(d, 0, maxDist, 10, 5, true);

//         rect(newX, newY, squareSize, squareSize);
//     }
// }

