/*
Isabella Tedesco
Assignment 5: Optical Illusion

QUICK DESCRIPTION:
I am currently really interested in Perlin noise, which is a type of gradient noise that applies “pseudo-random” changes to a variable. 

I feel like it can be considered an optical illusion in the sense that even though it seems random, all the visual details are the same size. The implementation of Perlin noise starts with defining of a grid of random gradient vectors, computing the dot product between the gradient vectors and their offsets, and interpolation between these values.

Reference from: https://youtu.be/BjoM9oKOAKY

*/

var inc = 0.1;
var scl = 10;
var cols, rows;

//values in the z dimension
var zoff = 0;

var fr;

//particle array
var particles = [];
var flowfield;

function setup() {
  createCanvas(400, 400);
  //can experiment with RGB, HSL, HSB
  colorMode(RGB, 255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }
  background(51);
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(floor(frameRate()));
}