let myFont;

const ourWord = "MOO";

let pointArray;

function preload() {
    myFont = loadFont("./comicSans.ttf");
}

function setup() {
    createCanvas(400, 200).parent("my-sketch");
    background(0, 0, 0);
    noStroke();

}

function draw() {

    // without this--> the is gradient for a second then is solid
    background(0);
    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, {sampleFactor: 0.2 });
    
     //2- gradient effect
     for (let i = 0; i < pointArray.length; i++) {
        let transparency = map(pointArray[i].x, 20, 400, 255, 0);

        fill(112, 111, 201, transparency)
        circle(pointArray[i].x, pointArray[i].y, 5
);
    }
}