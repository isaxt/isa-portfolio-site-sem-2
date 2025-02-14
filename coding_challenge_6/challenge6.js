let myFont;

const ourWord = "MOO";

let pointArray;

function preload() {
    myFont = loadFont("./comicSans.ttf");
}

function setup() {
    createCanvas(400, 200).parent("my-sketch");
    background(0);
    noStroke();
    fill(233, 192, 237);
}

function draw() {

    background(0);
    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, { sampleFactor: 0.2 });

    // height of sine wave
    let amplitude = 7; 

    // speed of wave-- higher is faster + lower is slower
    let frequency = 0.08; 

    //frameCount* frequency--> the speed of the wave
    for (let i = 0; i < pointArray.length; i++) {
        let waveOffset = sin(frameCount * frequency + pointArray[i].x * 0.1) * amplitude;
        circle(pointArray[i].x, pointArray[i].y + waveOffset, 10);
    }
}