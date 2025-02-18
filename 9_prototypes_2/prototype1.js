let myFont;

let pointArray;

let r= 30;
let angle = 0;
let size = 300;
let msg = "meep";

function preload() {
    myFont = loadFont("./GlitchGoblin-2O87v.ttf");
}

function setup() {

    // play with the sizing
    createCanvas(400, 400).parent("my-sketch");
    
    pointArray = font.textToPoints(msg, -0, 300, size, { sampleFactor: 0.1, simplifyThreshold: 0 });
          angleMode(DEGREES);
    
    

}

function draw() {
    background(188, 235, 207);

    let x = r*cos(map(mouseX, 0, width, 0, 360)); 
    let y = r*sin(map(mouseY, 0, height, 0, 360));

    translate(20,300);
    for (let i = 0; i < points.length; i++) {
        line(points[i].x, points[i].y, points[i].x+x, points[i].y + y);
}

}