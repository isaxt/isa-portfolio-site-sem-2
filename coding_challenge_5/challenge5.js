let myFont;

const ourWord = "MOO";

let pointArray;

function preload() {
    myFont = loadFont("./comicSans.ttf");
}

function setup() {
    createCanvas(400, 200).parent("my-sketch");
    background(0, 0, 0);

}

function draw() {
    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, {sampleFactor: 0.2 });
    
     //5- circle and square alternating colors
     for (let i = 0; i < pointArray.length; i++) {

        fill(255, 0, 0)
        circle(pointArray[i].x, pointArray[i].y, 10);
    }
}