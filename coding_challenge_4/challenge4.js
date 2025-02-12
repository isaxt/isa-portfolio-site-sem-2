let myFont;

const ourWord = "MOO";

let pointArray;

function preload() {
    myFont = loadFont("./comicSans.ttf");
}

function setup() {
    createCanvas(400, 200).parent("my-sketch");
    background(178, 177, 181);
    noStroke();

}

function draw() {
    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, {sampleFactor: 0.15 });
    
     //4- half-half and bottom heavy
     for (let i = 0; i < pointArray.length; i++) {
        if (pointArray[i].x>200){
            fill(250, 175, 229)
        } else{
            fill(192, 252, 196);
        }
        size = map(pointArray[i].y, 0, 200, 0, 10);

        circle(pointArray[i].x, pointArray[i].y, size);
    }
}