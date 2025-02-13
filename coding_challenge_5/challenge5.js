let myFont;

const ourWord = "MOO";

let pointArray;

let size=6;


function preload() {
    myFont = loadFont("./comicSans.ttf");
}

function setup() {
    createCanvas(400, 200).parent("my-sketch");
    background(203, 227, 245);
    noStroke();

    rectMode(CENTER);

}

function draw() {
    background(203, 227, 245);

    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, {sampleFactor: 0.15 });

    console.log(pointArray.length);
    
     //5- circle and square alternating colors
     //why does it flicker-->not always consistent
     //might process the font file differently
     for (let i = 0; i < pointArray.length; i++) {
        if(i%2 == 1){

            square(pointArray[i].x, pointArray[i].y, size);
            fill(255, 0, 0);

        } else{
        
            circle(pointArray[i].x, pointArray[i].y, size);
            fill(91, 93, 94);
        }
        
    }
}