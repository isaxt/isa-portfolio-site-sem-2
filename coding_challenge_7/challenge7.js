let myFont;

const ourWord = "MOO";

let pointArray = [];

// stores the sizes of each point
let sizes = []; 

function preload() {
    myFont = loadFont("./comicSans.ttf");
}

function setup() {
    createCanvas(400, 200).parent("my-sketch");
    background(0);
    noStroke();
    fill(255, 0, 0);

    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, { sampleFactor: 0.2 });

    sizes = new Array(pointArray.length).fill(10); 
}

function draw() {
    // clear canvas each frame--> otherwise the effect doesn't work
    background(0); 

    let normalSize = 7;
    let hoverSize = 30;

    for (let i = 0; i < pointArray.length; i++) {

        // if mouse is near the circle
        // the distance between two points-- mouse cursor + current point
        let d = dist(mouseX, mouseY, pointArray[i].x, pointArray[i].y);
        
        // if the distance from the mouse and point is
        //  less than 15 pixels--> expand to hoverSize
        // ? --> if-else shorthand
        let targetSize = (d < 15) ? hoverSize : normalSize;

        // smooth transition size
        //lower speed of transition is nicer
        sizes[i] = lerp(sizes[i], targetSize, 0.04);

        circle(pointArray[i].x, pointArray[i].y, sizes[i]);
    }
}
