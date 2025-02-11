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
    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, {sampleFactor: 0.1 });
    
     //7- mouse hovering--> distorts the weight
     for (let i = 0; i < pointArray.length; i++) {
        let transparency = map(pointArray[i].x, 20, 400, 255, 0);

        fill(255, 0, 0, transparency)
        circle(pointArray[i].x, pointArray[i].y, 10);
    }
}