let myFont;

const ourWord = "MOO";

let pointArray;

function preload() {
    myFont = loadFont("./comicSans.ttf");
}

function setup() {
    createCanvas(400, 200).parent("my-sketch");
    background(188, 235, 207);
    noStroke();
    fill(161, 132, 181);

}

function draw() {
    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, {sampleFactor: 0.2 });
    
     //1- text
     for (let i = 0; i < pointArray.length; i++) {

        circle(pointArray[i].x, pointArray[i].y, 5);
    }
}
