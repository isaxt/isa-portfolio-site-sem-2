let myFont;

const ourWord = "MOO";

let pointArray;

function preload() {
    myFont = loadFont("./comicSans.ttf");
}

function setup() {
    createCanvas(400, 200).parent("my-sketch");
    background(245, 191, 207);
    noStroke();

}

function draw() {
    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, {sampleFactor: 0.2 });
    
     //3- half-half color
     for (let i = 0; i < pointArray.length; i++) {
        if (pointArray[i].x>200){
            fill(222, 137, 18)
        } else{
            fill(130, 108, 217);
        }

        circle(pointArray[i].x, pointArray[i].y, 5);
    }
}