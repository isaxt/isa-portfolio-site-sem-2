/*
Assignment 2: Face "Generator"
Isabella Tedesco
*/
var c, dx, dy;
var cx, CX, mx, rx, lex, rex;
var cy, CY, my, ry, ey;
var earL, earR, foo;
var faceW;  // width of face
var body = [];  // keep track of body parts
var onBody = 0;

var isFull = false;  // whether or not is able to hold more
var raining, timer;
var drop, rain = [];  // particle system for rain?

var minX, minY, maxX, maxY;  // bounds for face on canvas
var eyes = 0, mouth = 0;
var pause = false; var mouse = false;
var owie = false; tock = 0;
var clickie = false;
var nom = false;

var r, g, b, rS, bS, gS;
var keys = {w: false, s: false, a:false, d: false, r:false, g:false, b:false};

var Particle = function() {
  this.x = width/2; this.y = height/2;  // position
  this.vx = 0; this.vy = 0;  // velocity
  this.ax = 0; this.ay = 0;  // acceleration
  this.w = random(100, 250);  // width/diameter of body part
  this.fx = this.x; this.fy = this.y;  // coordinates to follow
  this.dx = 0; this.dy = 0;
  this.angle = 0; this.i = 0;  // angle and index into list for coordinates to follow
  this.following = null;
  this.fw = 0;
  this.timer = 0;
  
  this.drawPart = function(outline) {
    if (!outline) {
      fill(0);
    	noStroke();
    	ellipse(this.x, this.y, this.w+15, this.w+15); }
    if (outline) {
			fill(240, 240, 240, 255);
    	ellipse(this.x, this.y, this.w, this.w);
    }
  }
}

var Raindrop = function() {
  this.x = c.x+random(-faceW/2,faceW/2); this.y = c.y;
  this.vx = c.vx+random(-5, 5); this.vy = c.vy+random(-10,10);  // velocity
  this.ax = 0; this.ay = 5;  // acceleration
  this.w = random(10, 40);
  this.alpha = 255;
  this.c = color(100, 200, 255, this.alpha);
  
  this.drawRaindrop = function() {
    noStroke();
    this.c = color(100, 200, 255, this.alpha);
    fill(this.c)
    ellipse(this.x, this.y, this.w, this.w);
  }
}

function setFaceVals() {
  CX = {a: c.x-30, b: c.x+30, c: c.x+30, d: c.x-20};
  CY = {a: c.y+10, b: c.y+20, c: c.y-30, d: c.y-40};
  cx = [c.x, c.x-60, c.x+60, CX.a, CX.b, CX.c, CX.d];
	cy = [c.y, c.y, c.y, CY.a, CY.b, CY.c, CY.d];
  rx = 250;
  ry = 250;
  mx = c.x;
  my = c.y + ry/10;
  
  //eye x-positions
  lex = c.x - rx/3;  
  rex = c.x + rx/3; 
  
  // eyes y-position
  ey = c.y + ry/12;  
  earL = {a1:lex+100, a2:ey+100, b1:lex-20, b2:ey-90, c1:lex+20, c2:ey-110, d1:lex+150, d2:ey+100};
  earR = {a1:rex-150, a2:ey+100, b1:rex-20, b2:ey-110, c1:rex+20, c2:ey-90, d1:rex-100, d2:ey+100};
  faceW = 3*rx/4;
}

// main face
function initFace() {
  c = new Particle();  
  c.dx = mouseX - c.x;
  c.dy = mouseY - c.y;
  c.w = faceW;
  
  setFaceVals();
}

function setup() { 
  createCanvas(windowWidth-5, windowHeight-5);
  cursor(HAND);
  strokeJoin(ROUND);
  
  minX = 150; maxX = width-150;
  minY = 130; maxY = height-110;
  
  r = 125; g = 125; b = 125;
  rS = 0.3; bS = 0.3; gS = 0.3;
  background(r, g, b, 255);
  
  timer = 0;
  rain = []; raining = false;
  initFace();
  
  var main = new Particle();
  main.x = c.x;
  main.y = c.y;
  main.w = faceW;
  main.fw = faceW;
  main.following = c;
  
   // the face is the first 'body part' that can be followed
  body.push(main); 
} 

function moveObject(obj, fx, fy) {
  obj.dx = fx - obj.x;
  obj.dy = fy - obj.y;
  var sp = 1;
  if (obj !== c) { sp = 2; }
  
  // over 10 -->reduces speed
  obj.ax += sp*obj.dx/10;  
  obj.ay += sp*obj.dy/10;
  obj.x += obj.ax;
  obj.y += obj.ay;

  // For gradual brake--> without this it goes crazy
  if (obj.vx < 0) {obj.vx++; obj.ax = 0;}
  if (obj.vx > 0) {obj.vx--; obj.ax = 0;}
  if (obj.vy < 0) {obj.vy++; obj.ay = 0;}
  if (obj.vy > 0) {obj.vy--; obj.ay = 0;}

  // limits velocity
  obj.vx += obj.ax;
  obj.vx = constrain(obj.vx, -20, 20);
  obj.x += obj.vx;
  obj.vy += obj.ay;
  obj.vy = constrain(obj.vy, -20, 20);
  obj.y += obj.vy;
  return obj;
}

function moveFace() {
  // Move main face.
  moveObject(c, mouseX, mouseY);

  // Limits face to within the canvas.
  if (c.x > maxX || c.x < minX) {
    c.x = constrain(c.x, minX, maxX);
    if (tock == 0) { owie = true; } }
  if (c.y > maxY || c.y < minY) {
    c.y = constrain(c.y, minY, maxY);
    if (tock == 0) { owie = true; }
  }
  
  if (isFull) {
    for (var i = 1; i < body.length; i++) {
      body[i].w -= 3;
      body[i].w = constrain(body[i].w, 0, 250);
    
      if (timer < 40) { timer++; }
      if (timer == 40) {
        body.pop();
        timer = 0;
        if (body.length == 1) { isFull = false; onBody = 0; }
      }
    }
  }
  
   // update main body part coordinates
  body[0].x = c.x; 
  body[0].y = c.y;
  
  // Move each add-on part to follow.
  for (var j = 1; j < body.length; j++) {
    var px = body[j].x;  // location of this part
    var py = body[j].y;
    var inXBounds = false; var inYBounds = false;
    
    if (body[j].following == null) { 
      if (c.x > px-80 && c.x < px+80) { inXBounds = true; }
      if (c.y > py-60 && c.y < py+60) { inYBounds = true; }
        
      if (inXBounds && inYBounds) {
        while (body[j].following == null) {
          body[j].i = floor(random(0, body.length));
        
          
          // follow something that is already attached
          while (body[body[j].i].following == null) {  
            body[j].i = floor(random(0, body.length));
          }
          
          body[j].following = body[body[j].i];
        }
        
        body[j].fw = body[j].following.w;

        body[j].fx = body[body[j].i].x + body[j].fw/2*cos(body[j].angle);
        body[j].fy = body[body[j].i].y + body[j].fw/2*cos(body[j].angle);
        
        onBody+= 1;
        if (onBody > 30) { isFull = true; raining = true; onBody = 0;}
      }
      else if (body[j].timer == 200) { 
        body[j].x = random(minX, maxX);
  			body[j].y = random(minY, maxY);
      }
      body[j].timer++;
    }
    else {
      
  	// If it attached itself to the main face thing...
      var following = body[j].following;  
      body[j].fx = following.x + body[j].fw/2*cos(body[j].angle);  
      body[j].fy = following.y + body[j].fw/2*sin(body[j].angle);
      body[j] = moveObject(body[j], body[j].fx, body[j].fy);
    } 
   
  }
  
  // Facial animations when hitting sides of canvas or being clicked.
  if (owie) {
    if (tock == 0) {
      if (clickie) { mouth = 4; eyes = 1; 
      } else {
    	eyes = round(random(4));
    	mouth = round(random(5));
      }
    }
  tock++;
  if (tock == 30) {owie = false; clickie = false; tock = 0; } } 
  else if (clickie) {mouth = 4;  eyes = 1; } 
  else { mouth = 0; eyes = 0; }
  
  setFaceVals();
}

function addBodyPart() {
  var part = new Particle();
 
  // Overwrite some data.
  part.x = random(minX, maxX);
  part.y = random(minY, maxY);
  part.angle = random(0, 2*PI);
  
  //if (body.length == 45) { isFull = true; raining = true;}
  body.push(part);
}

function draw() {
  background(r, g, b, 255);
  
  fill(0); noStroke(); textSize(25);
  var s = "[N] to add extra fluff"
  text(s, 5, 5+textAscent());
  s = "[R] to restart"
  text(s, 5, 13+2*textAscent());
  s = "[Click] to poke"
  text(s, 5, 20+3*textAscent());
  
  if (!pause) {  
    
  	moveFace();
    var plop = round(random(40));
    if (!isFull && plop == 0) { addBodyPart(); } 
  }
	
  drawFace();
}

function drawFace() {

  drawBody();
  
  drawEyes();
  
  drawMouth();
}

function drawBody() {
  fill(0);
  noStroke();
  
  for (var i = 0; i < 7; i++) {
    ellipse(cx[i], cy[i], faceW+15, faceW+15);
  }
  
  for (i = 1; i < body.length; i++) {  // without outlines
    body[i].drawPart(false);
  }
  
  for (i = 1; i < body.length; i++) {  // with outlines
    body[i].drawPart(true);
  }
  
  fill(240, 240, 240, 255);
  for (var j = 0; j < 7; j++) {
    ellipse(cx[j], cy[j], faceW, faceW);
  }
}

function drawMouth() {
  noFill();
  stroke(0);
  strokeWeight(10);
  
  if (mouth == 6) {  // nom nom
    line(mx-15, my+15, mx-15, my-5); 
  	line(mx+15, my+15, mx+15, my-5); 
  	line(mx-15, my+10, mx+15, my+10); }
  else if (mouth == 5) {
    line(mx-20, my+10, mx+20, my+10); }
  else if (mouth == 4) {
    line(mx-20, my+20, mx, my);
    line(mx, my, mx+20, my+20);
    noStroke();
    fill(255, 200, 200, 200);
    ellipse(lex, ey+40, 50, 30);
    ellipse(rex, ey+40, 50, 30); }
  else if (mouth == 3) {
    curve(mx-40, my+100, mx-40, my, mx+40, my, mx+40, my+100); }
  else if (mouth == 2) {
    fill(150);
  	rect(mx-20, my, 40, 80); }
  else if (mouth == 1) {
    fill(0);
  	ellipse(mx, my, 30, 40); }
  else {
  	curve(mx-40, my-100, mx-40, my, mx, my, mx, my-100);
    curve(mx, my-100, mx, my, mx+40, my, mx+40, my-100); 
  }
}

function drawEyes() {
  fill(255);
  stroke(0); strokeWeight(10);
  
  if (eyes == 3) {
  	line(lex-20, ey, lex+10, ey);
  	line(rex-10, ey, rex+20, ey); }
  else if (eyes == 2) {
  	ellipse(lex, ey, 30, 40);
  	ellipse(rex, ey, 30, 40); }
  else if (eyes == 1) {
  	// left
  	line(lex+5, ey, lex-20, ey-10);
  	line(lex+5, ey, lex-20, ey+10);
  	// right
  	line(rex-5, ey, rex+20, ey-10);
  	line(rex-5, ey, rex+20, ey+10); }
  else {
  	ellipse(lex, ey, 10, 10);
  	ellipse(rex, ey, 10, 10);
  }
}

function drawEars() {
  stroke(0); strokeWeight(10);
  curve(earL.a1, earL.a2, earL.b1, earL.b2, earL.c1, earL.c2, earL.d1, earL.d2);
  curve(earR.a1, earR.a2, earR.b1, earR.b2, earR.c1, earR.c2, earR.d1, earR.d2);
}

function keyPressed() {
  if (key == "P") { pause = !pause; }  // pause
  if (key == "N") { if (!isFull) { addBodyPart(); }}
  if (key == "R") {
    clear();
    body = [];
    setup();
    redraw();
    }
  }
  
function mousePressed() {
  owie = true;
  clickie = true;
}

function mouseMoved() {
  var rAdd = mouseX-pmouseX;
  var bAdd = mouseY-pmouseY;
  r += rAdd/3; 
  g += bAdd/3; 
  b += bS; 
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  if (b < 0 || b > 255) { bS *= -1; }
}