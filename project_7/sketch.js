/*
Isabella Tedesco

Assignment 7: Autobiographical Game
*/

//variables
let sceneNum = 1;
let classType = 0;

//dialogue for calc
calcLectureDay1 = ["click to listen to the lecture", "today in calculus we will be learning about the natural log...", "it comes from blah blah blah... the derivative of the blah blah blah...", "your homework is sitting in front of you, please do it before class on friday"];
c1Num = 0;
calcLectureDay2 = ["click to listen to the lecture", "today in calculus we will continue to learn about the natural log...", "derivative blah blah blah... the anti derivative of the blah blah blah...", "if you haven't done your homework yet, remember to do it before class on friday"];
c2Num = 0;
calcLectureDay3 = ["click to listen to the lecture", "today in calculus we will go over the homework that was due today", "the correct answer for the first question was b, the second question was a", "if you got anything wrong i'm afraid i can't let you graduate... class dismissed"];
c3Num = 0;

//dialogue for eng
engLectureDay1 = ["click to listen to the lecture", "today we will talk about the theme, symbols, and motifs of the book.", "the theme of the book can be revealed if you dive deeper...", "look at the metaphors combined with the use of symbols and motifs.", "ok, thats it for today.", "read the last section of the book before class on friday!"];
e1Num = 0;
engLectureDay2 = ["click to listen to the lecture", "today we will discuss the characters", "we will analyze what makes a well written character", "as well as what makes a poorly written character", "blah blah blah character writing blah blah", "remember to read the last section of the book!"];
e2Num = 0;
engLectureDay3 = ["click to listen to the lecture", "today we will do a pop quiz reading check", "to see if you guys did your homework", "*hands out reading check*", "i'll grade it before your guys' graduation tonight", "check your grades before then!"];
e3Num = 0;

//dialogue for history
historyLectureDay1 = ["click to listen to the lecture", "open your books to page 187.", "america in the 1800s... immigrantion blah blah blah...", "manifest destiny blah blah blah...", "blah blah blah blah then the civil war...", "thats it for today. no homework."];
h1Num = 0;
historyLectureDay2 = ["click to listen to the lecture", "open your books to page 200.", "today we will watch this video and connect it to the reading in front of you", "*plays video*", "blah blah blah connects through blah blah blah blah", "thats it for today. again, no homework."];
h2Num = 0;
historyLectureDay3 = ["click to listen to the lecture", "last class until graduation huh", "i won't make you guys do any work today", "good work in class this year, i wish you good luck in the future", "i will be at graduation tonight to see you guys off", "thanks for a great year"];
h3Num = 0;

//keeping track of what day it is
day1 = true;
day2 = false;
day1or2 = true;
day3 = false;

//hw check
mathHomework = false;
englishHomework = false;

//keeping track of grades
mathGrade = 0;
displayStatus = ["complete", "incomplete", "not submitted", "submitted"]
//complete means submitted and graded
//incomplete means not submitted and graded
//submitted means submitted and not graded
//not submitted means not submitted and not graded

//eng hw scene
spreadClickNum = 0;

//math hw scene
circleAnswerX = [213, 313, 213, 313]
circleAnswerY = [140, 140, 160, 160]
circleNumQ1 = 5
circleAnswerQ2X = [213, 213, 213, 213]
circleAnswerQ2Y = [240, 260, 280, 300]
circleNumQ2 = 5
let nextButtonX;

//keeping track of procrastination
procrastination = 0
procThoughts = ["didn't do homework...", "this is bad...", "ugh, im overwhelmed", "no time...", "time...", "what will i do..."]


function preload(){
  titleScreenImg = loadImage("assets/title.png");
  font = loadFont("assets/pixelfont.ttf");
  wakeUpImg = loadImage("assets/wakeUp.png");
  mathClassImg = loadImage("assets/mathclass.png");
  engClassImg = loadImage("assets/engclass.png");
  historyClassImg1 = loadImage("assets/historyclass1.png");
  historyClassImg2 = loadImage("assets/historyclass2.png");
  phoneSceneImg = loadImage("assets/phonescene.png");
  xButtonImg = loadImage("assets/xbutton.png");
  xButtonHoverImg = loadImage("assets/xbuttonhover.png");
  checkGradeImg = loadImage("assets/checkgrade.png");
  checkGradeHoverImg = loadImage("assets/checkgradehover.png");
  friendAppImg = loadImage("assets/friendapp.png");
  friendAppHoverImg = loadImage("assets/friendapphover.png");
  gameAppImg = loadImage("assets/gameapp.png");
  gameAppHoverImg = loadImage("assets/gameapphover.png");
  socialMediaImg = loadImage("assets/socialmedia.png");
  socialMediaHoverImg = loadImage("assets/socialmediahover.png");
  calendarImg = loadImage("assets/calendar.png");
  deskImg = loadImage("assets/desk.png");
  checkPhoneImg = loadImage("assets/checkphone.png");
  checkPhoneHoverImg = loadImage("assets/checkphonehover.png");
  doMathHwImg = loadImage("assets/domathhw.png");
  doMathHwHoverImg = loadImage("assets/domathhwhover.png");
  doEngHwImg = loadImage("assets/doenghw.png");
  doEngHwHoverImg = loadImage("assets/doenghwhover.png");
  getReadyGradImg = loadImage("assets/getreadygrad.png");
  getReadyGradHoverImg = loadImage("assets/getreadygradhover.png");
  calendarButtonImg = loadImage("assets/calendarbutton.png");
  calendarButtonHoverImg = loadImage("assets/calendarbuttonhover.png");
  friendSceneImg = loadImage("assets/friendscene.png");
  nextButtonImg = loadImage("assets/nextbutton.png");
  nextButtonHoverImg = loadImage("assets/nextbuttonhover.png");
  videoGameSceneImg = loadImage("assets/videogamescene.png");
  socialMediaSceneImg = loadImage("assets/socialmediascene.png");
  mathHwSceneImg = loadImage("assets/mathhwscene.png");
  graduationSceneImg = loadImage("assets/graduationscene.png");
  gameOverImg = loadImage("assets/gameover.png");
}

function setup() {
  createCanvas(600, 400);
  
  dayTrack = new Day(23, 387)
  spreadDisplay = new Spread(width/2, height/2)
}

function draw() {
  background(220);
  
    switch(sceneNum){
      case 1:
          titleScreen();
          break;
      case 2:
          wakeUp1Scene();
          break;
      case 3:
          wakeUp2Scene();
          break;
      case 4:
          wakeUp3Scene();
          break;
      case 5:
          phoneScene();
          break;
      case 6:
          calendarScene();
          break;  
      case 7:
          mathScene();
          break;
      case 8:
          engScene();
          break;
      case 9:
          historyScene();
          break;
      case 10:
        deskScene();
        break;
      case 11:
        checkGradeScene();
        break;
      case 12:
        friendScene();
        break;
      case 13:
        gameScene();
        break;
      case 14:
        socialMediaScene();
        break;
      case 15:
        mathHWScene();
        break;
      case 16:
        engHWScene();
        break;
      case 17:
        transitionScene();
        break;
      case 18:
        areYouSure1Scene();
        break;
      case 19:
        areYouReallySureMath1Scene();
        break;
      case 20:
        areYouSureEng1Scene();
        break;
      case 21:
        areYouReallySureEng1Scene();
        break;
      case 22:
        gameOver();
        break;
      case 23:
        gameCleared();
        break;
  }
  
}

//go to school button (called in mouseClicked)
function goToSchool(scene){
  if (
    sceneNum == scene &&
    mouseX > 180 &&
    mouseY > 50 &&
    mouseX < 410 &&
    mouseY < 100
  ) {
    sceneNum = 7
  }
}

//dialogue click button (called in mouseClicked)
function dialogueClick(scene, dayNum, ctype){
  if (
    sceneNum == scene &&
    mouseX > 200 &&
    mouseY > 100 &&
    mouseX < 385 &&
    mouseY < 130 &&
    ctype == 1 &&
    dayNum == true
  ){
    c1Num += 1;
  }
  if (
    sceneNum == scene &&
    mouseX > 200 &&
    mouseY > 100 &&
    mouseX < 385 &&
    mouseY < 130 &&
    ctype == 2 &&
    dayNum == true
  ){
    c2Num += 1;
  }
  if (
    sceneNum == scene &&
    mouseX > 200 &&
    mouseY > 100 &&
    mouseX < 385 &&
    mouseY < 130 &&
    ctype == 3 &&
    dayNum == true
  ){
    c3Num += 1;
  }
  if (
    sceneNum == scene &&
    mouseX > 200 &&
    mouseY > 100 &&
    mouseX < 385 &&
    mouseY < 130 &&
    ctype == 4 &&
    dayNum == true
  ){
    e1Num += 1;
  }
  if (
    sceneNum == scene &&
    mouseX > 200 &&
    mouseY > 100 &&
    mouseX < 385 &&
    mouseY < 130 &&
    ctype == 5 &&
    dayNum == true
  ){
    e2Num += 1;
  }
  if (
    sceneNum == scene &&
    mouseX > 200 &&
    mouseY > 100 &&
    mouseX < 385 &&
    mouseY < 130 &&
    ctype == 6 &&
    dayNum == true
  ){
    e3Num += 1;
  }
  if (
    sceneNum == scene &&
    mouseX > 200 &&
    mouseY > 100 &&
    mouseX < 385 &&
    mouseY < 130 &&
    ctype == 7 &&
    dayNum == true
  ){
    h1Num += 1;
  }
  if (
    sceneNum == scene &&
    mouseX > 200 &&
    mouseY > 100 &&
    mouseX < 385 &&
    mouseY < 130 &&
    ctype == 8 &&
    dayNum == true
  ){
    h2Num += 1;
  }
  if (
    sceneNum == scene &&
    mouseX > 200 &&
    mouseY > 100 &&
    mouseX < 385 &&
    mouseY < 130 &&
    ctype == 9 &&
    dayNum == true
  ){
    h3Num += 1;
  }
}

//scene change buttons multi purpose (called in mouseClicked)
function sceneChangeButton(scene, minX, minY, maxX, maxY, targetScene){
  if(
    sceneNum == scene &&
    mouseX > minX &&
    mouseY > minY &&
    mouseX < maxX &&
    mouseY < maxY
  ){
    sceneNum = targetScene
  }
}
  
//math hw question 1 buttons (called in mouseClicked)
function q1Button(minX, minY, maxX, maxY, answer){
  if(
    sceneNum == 15 &&
    mouseX > minX &&
    mouseY > minY &&
    mouseX < maxX &&
    mouseY < maxY
  ){
    circleNumQ1 = answer
  }
}

//math hw question 2 buttons (called in mouseClicked)
function q2Button(minX, minY, maxX, maxY, answer){
  if(
    sceneNum == 15 &&
    mouseX > minX &&
    mouseY > minY &&
    mouseX < maxX &&
    mouseY < maxY
  ){
    circleNumQ2 = answer
  }
}

//phone apps buttons (called in mouseClicked){
function phoneButton(scene, minX, minY, maxX, maxY, targetScene){
  if(
    sceneNum == scene &&
    mouseX > minX &&
    mouseY > minY &&
    mouseX < maxX &&
    mouseY < maxY &&
    day1or2 == true
  ){
    sceneNum = targetScene
  }
}

//procrastination option next button (called in mouseClicked)
function proNext(scene, dayNum, targetDay){
  if (
    sceneNum == scene &&
    mouseX > 490 &&
    mouseY > 214 &&
    mouseX < 510 &&
    mouseY < 234 &&
    dayNum == true
  ) {
    sceneNum = targetDay
    procrastination += 1
  } 
}

//x button (called in mouseClicked)
function xButton(scene, targetScene){
  if(
    sceneNum == scene &&
    mouseX > 96 &&
    mouseY > 108 &&
    mouseX < 152 &&
    mouseY < 164
  ){
    sceneNum = targetScene
  }
}

//UI
function mouseClicked(){
  //title screen to wake up day 1
  if (sceneNum == 1) {
    sceneNum = 2;
  }
  
  //go to school buttons
  goToSchool(2)
  goToSchool(3)
  goToSchool(4)
  
  //dialogue button
  dialogueClick(7, day1, 1)
  dialogueClick(7, day2, 2)
  dialogueClick(7, day3, 3)
  
  dialogueClick(8, day1, 4)
  dialogueClick(8, day2, 5)
  dialogueClick(8, day3, 6)
  
  dialogueClick(9, day1, 7)
  dialogueClick(9, day2, 8)
  dialogueClick(9, day3, 9)
  
  //transition scene to desk scene
  if(
    sceneNum == 17 &&
    mouseX > 200 &&
    mouseY > height/2+60 &&
    mouseX < 385 &&
    mouseY < height/2+90 
  ){
    sceneNum = 10
  }

  //do math hw
  if(
    sceneNum == 10 &&
    mouseX > 260 &&
    mouseY > 182 &&
    mouseX < 340 &&
    mouseY < 212 &&
    day1or2 == true &&
    mathHomework == false
  ){
    sceneNum = 18
  }
  
  //yes or no buttons math
  sceneChangeButton(18, 140, 230, 195, 260, 19)
  sceneChangeButton(18, 390, 230, 428, 260, 10)
  sceneChangeButton(19, 140, 260, 195, 290, 15)
  sceneChangeButton(19, 390, 260, 428, 290, 10)
  
  //math hw scene
  //question 1 buttons
  q1Button(180, 130, 220, 145, 0) //q1 a button
  q1Button(280, 130, 320, 145, 1) //q1 b button
  q1Button(180, 150, 220, 165, 2) //q1 c button
  q1Button(280, 150, 320, 165, 3) //q1 d button
  
  //question 2 buttons
  q2Button(180, 230, 220, 245, 0) //q2 a button
  q2Button(180, 250, 220, 265, 1) //q2 b button
  q2Button(180, 270, 220, 285, 2) //q2 c button
  q2Button(180, 290, 220, 305, 3) //q2 d button
  
  //check if finished math hw
  if(
    sceneNum == 15 &&
    circleNumQ1 != 5 && 
    circleNumQ2 != 5
  ){
    mathHomework = true
  }
  if(sceneNum == 15 &&
    mathHomework == true)
  {
    nextButtonX = 450
  }
  
  //next button math hw going to day 2
  if(sceneNum == 15 &&
    mouseX > 440 &&
    mouseY > 190 &&
    mouseX < 460 &&
    mouseY < 210 &&
    day1 == true
  ){
    sceneNum = 3
  }
  //next button math hw going to day 3
  if(sceneNum == 15 &&
    mouseX > 440 &&
    mouseY > 190 &&
    mouseX < 460 &&
    mouseY < 210 &&
    day2 == true
  ){
    sceneNum = 4
  }
  
  
  //do eng hw button
  if(
    sceneNum == 10 &&
    mouseX > 260 &&
    mouseY > 232 &&
    mouseX < 340 &&
    mouseY < 262 &&
    day1or2 == true &&
    englishHomework == false
  ){
    sceneNum = 20
  }
  
  //yes or no buttons eng
  sceneChangeButton(20, 140, 230, 195, 260, 21)
  sceneChangeButton(20, 390, 230, 428, 260, 10)
  sceneChangeButton(21, 140, 260, 195, 290, 16)
  sceneChangeButton(21, 390, 260, 428, 290, 10)
  
  //eng hw flip page button
  if(
    sceneNum == 16 &&
    mouseX > 490 &&
    mouseY > 190 &&
    mouseX < 510 &&
    mouseY < 210
  ){
    spreadClickNum++
  }
  
  //calender button
  sceneChangeButton(10, 470, 319, 538, 375, 6)
 
  //x button in calender  
  xButton(6, 10)
  
  //check phone after school
  sceneChangeButton(10, 260, 132, 340, 162, 5)
  
  //hangout with friend button
  phoneButton(5, 260, 168, 308, 216, 12)
  //play game button
  phoneButton(5, 320, 168, 368, 216, 13)
  //scroll social media button
  phoneButton(5, 380, 168, 428, 216, 14)
  
  //game next buttons (tracking procrastination)
  proNext(13, day1, 3)
  proNext(13, day2, 4)
  
  //friend scene next buttons (tracking procrastination)
  proNext(12, day1, 3)
  proNext(12, day2, 4)
  
  //scroll social media next button (tracking procrastination)
  proNext(14, day1, 3)
  proNext(14, day2, 4)
  
  //x button phone
  xButton(5, 10)
  
  //check grades app button
  sceneChangeButton(5, 200, 168, 248, 216, 11)
  
  //x button for check grades app
  sceneChangeButton(11, 96, 108, 126, 138, 5)
  
  //game endings
  if(//graduation
    sceneNum == 10 &&
    mouseX > 260 &&
    mouseY > 182 &&
    mouseX < 340 &&
    mouseY < 212 &&
    day3 == true &&
    mathGrade == 100 &&
    englishHomework == true
  ){
    sceneNum = 23
  }
    
  if(//math grade was not good enough, did eng hw
    sceneNum == 10 &&
    mouseX > 260 &&
    mouseY > 182 &&
    mouseX < 340 &&
    mouseY < 212 &&
    day3 == true &&
    mathGrade < 100 &&
    englishHomework == true
  ){
    sceneNum = 22
  }
  
  if(//math grade was good enough, did not do eng hw
    sceneNum == 10 &&
    mouseX > 260 &&
    mouseY > 182 &&
    mouseX < 340 &&
    mouseY < 212 &&
    day3 == true &&
    mathGrade == 100 &&
    englishHomework == false
  ){
    sceneNum = 22
  }
  
  if(//math grade was not good enough, did not eng hw
    sceneNum == 10 &&
    mouseX > 260 &&
    mouseY > 182 &&
    mouseX < 340 &&
    mouseY < 212 &&
    day3 == true &&
    mathGrade < 100 &&
    englishHomework == false
  ){
    sceneNum = 22
  }
}

function buttonHover(minX, minY, maxX, maxY, buttonShape, a, b, c, d){
  push()
  if (
    mouseX > minX &&
    mouseY > minY &&
    mouseX < maxX &&
    mouseY < maxY
  ) {
    fill(159, 159, 209);

  } else {
    fill(0);
  }
  buttonShape(a, b, c, d)
  pop()
}

function buttonImgHover(minX, minY, maxX, maxY, imgPathHover, x, y, w, h, imgPath){
  if (
    mouseX > minX &&
    mouseY > minY &&
    mouseX < maxX &&
    mouseY < maxY
  ) {
    image(imgPathHover, x, y, w, h);

  } else {
    image(imgPath, x, y, w, h);

  }
}

//building scenes
function titleScreen() {
  //title screen
  noSmooth()
 image(titleScreenImg, 0, 0, 600, 400)
  
}

function wakeUp1Scene(){
  image(wakeUpImg, 0, 0, 600, 400)
  push()
  textFont(font);
  textAlign(CENTER);
  textSize(20);
  
  buttonHover(180, 50, 410, 100, text, 'G O   T O   S C H O O L', width/2, 100)
  
  dayTrack.day1()
}

function mathScene(){
  image(mathClassImg, 0, 0,  600, 400)
  
  if (procrastination == 2){
    procrastinationThoughts(90)
  }
  if (procrastination == 1){
    procrastinationThoughts(180)
  }
  
  push()
  textFont(font);
  textAlign(CENTER);
  textSize(20);
  text('1 S T   P E R I O D :   M A T H', width/2, 100);
  pop()
  
  if (day1 == true){
    dayTrack.day1()
  
    push()
    textAlign(CENTER);
    textSize(10)
    buttonHover(180, 100, 400, 130, text, calcLectureDay1[c1Num], width/2, 130)
    
    if (c1Num == 4){
    sceneNum += 1
    }
    pop()
  }
  
  if (day2 == true){
    dayTrack.day2()
    
    push()
    textSize(10)
    textAlign(CENTER)
    buttonHover(180, 100, 400, 130, text, calcLectureDay2[c2Num], width/2, 130)
    
    if (c2Num == 4){
    sceneNum += 1
    }
    pop()
  }
  
  if (day3 == true){
    dayTrack.day3()

    push()
    textSize(10)
    textAlign(CENTER)
    buttonHover(180, 100, 400, 130, text, calcLectureDay3[c3Num], width/2, 130)
    
    if (c3Num == 4){
    sceneNum += 1
    }
    pop()
    
  }
  
}

function engScene(){
  image(engClassImg, 0, 0, 600, 400)
  
  if (procrastination == 2){
    procrastinationThoughts(90)
  }
  if (procrastination == 1){
    procrastinationThoughts(180)
  }
  
  push()
  textFont(font);
  textAlign(CENTER);
  textSize(20);
  fill(0);
  text('2 N D   P E R I O D :   E N G L I S H', width/2, 100);
  pop()
  
  if (day1 == true){
    dayTrack.day1()
  
    push()
    textAlign(CENTER);
    textSize(10)
    buttonHover(200, 100, 385, 130, text, engLectureDay1[e1Num], width/2, 130)
    
    if (e1Num == 6){
    sceneNum += 1
    }
    pop()
  }
  
  if (day2 == true){
    dayTrack.day2()
  
    push()
    textAlign(CENTER);
    textSize(10);
    buttonHover(200, 100, 385, 130, text, engLectureDay2[e2Num], width/2, 130)
    pop()
    
    if (e2Num == 6){
    sceneNum += 1
    }
  }
  
  if (day3 == true){
    dayTrack.day3()
  
    push()
    textAlign(CENTER);
    textSize(10);
    buttonHover(200, 100, 385, 130, text, engLectureDay3[e3Num], width/2, 130)
    pop()
    
    if (e3Num == 6){
    sceneNum += 1
    }
  }
}

function historyScene(){
  if (sceneNum == 9){
    image(historyClassImg1, 0, 0, 600, 400)
    if(day1 == true && h1Num > 1){
      image(historyClassImg2, 0, 0, 600, 400)
    }
    if(day2 == true && h2Num > 1){
      image(historyClassImg2, 0, 0, 600, 400)
    }
  }
  
  if (procrastination == 2){
    procrastinationThoughts(90)
  }
  
  if (procrastination == 1){
    procrastinationThoughts(180)
  }
  
  push()
  textFont(font);
  textAlign(CENTER);
  textSize(20);
  fill(0);
  text('3 R D   P E R I O D :   H I S T O R Y', width/2, 100);
  pop()
  
  if (day1 == true){
    dayTrack.day1()
    
    push()
    textAlign(CENTER);
    textSize(10);
    buttonHover(200, 100, 385, 130, text, historyLectureDay1[h1Num], width/2, 130)
    pop()
    
    if (h1Num == 6){
    sceneNum = 17
    }
  }
  
  if (day2 == true){
    dayTrack.day2()
  
    push()
    textAlign(CENTER);
    textSize(10);
    buttonHover(200, 100, 385, 130, text, historyLectureDay2[h2Num], width/2, 130)
    pop()

    if (h2Num == 6){
    sceneNum = 17
    }
  }
  
  if (day3 == true){
    dayTrack.day3()
  
    push()
    textAlign(CENTER);
    textSize(10);
    buttonHover(200, 100, 385, 130, text, historyLectureDay3[h3Num], width/2, 130)
    pop()
    
    if (h3Num == 6){
    sceneNum = 17
    }
  }
}

function transitionScene(){
  background(230, 235, 255)
  
  if (procrastination == 2){
    procrastinationThoughts(90)
  }
  
  if (procrastination == 1){
    procrastinationThoughts(180)
  }
  
  push()
  textFont(font);
  textAlign(CENTER);
  textSize(40);
  fill(0);
  text('on the way home...', width/2, height/2 -10);
  textSize(20)
  buttonHover(200, height/2+60, 385, height/2+90, text, "click to go to your room", width/2, height/2 + 90)

}

function deskScene(){
  image(deskImg, 0, 0, 600, 400)
  
  if (procrastination == 2){
    procrastinationThoughts(90)
  }
  
  if (procrastination == 1){
    procrastinationThoughts(180)
  }
  
  push()
  textFont(font);
  textAlign(CENTER);
  textSize(20);
  fill(0);
  text('what do you', width/2, 93);
  text('want to do?', width/2, 123);
  
  textSize(10)
  text("remember, you can only pick one activity per day", width/2, 307)
  pop()
  
  dayTrack.trackDay()
  
  push()
  imageMode(CENTER)
  //check phone hover
  buttonImgHover(260, 132, 340, 162, checkPhoneHoverImg, width/2, 147, 80, 30, checkPhoneImg)
  
  if (mathHomework == false &&
     day1or2 ==true){
    buttonImgHover(260, 182, 340, 212, doMathHwHoverImg, width/2, 197, 80, 30, doMathHwImg)
  }
  
  if (englishHomework == false &&
     day1or2 ==true){
    buttonImgHover(260, 232, 340, 262, doEngHwHoverImg, width/2, 247, 80, 30, doEngHwImg)
  }
  
  //calender button hover
  buttonImgHover(470, 319, 538, 375, calendarButtonHoverImg, 504, 347, 68, 56, calendarButtonImg)
  
  //get ready for graduation
  if (day3 == true){
    buttonImgHover(260, 182, 340, 212, getReadyGradHoverImg, width/2, 197, 80, 30, getReadyGradImg)
  }
  pop()
}

function calendarScene(){
  image(calendarImg, 0, 0, 600, 400);
  push()
  textFont(font);
  textAlign(LEFT);
  textSize(10);
  fill(0);
  text('math hw and eng hw due', 347, 195, 72);
  text('graduation!', 347, 299, 72);
  pop()
  //x button hover
  buttonImgHover(96, 108, 152, 164, xButtonHoverImg, 96, 108, xButtonHoverImg.width, xButtonHoverImg.height, xButtonImg) 
  
  dayTrack.trackDay()
}

function phoneScene(){
  image(phoneSceneImg, 0, 0, 600, 400);
  
  //x button hover
  buttonImgHover(96, 108, 152, 164, xButtonHoverImg, 96, 108, xButtonHoverImg.width, xButtonHoverImg.height, xButtonImg) 

  //check grades app
  buttonImgHover(200, 168, 248, 216, checkGradeHoverImg, 200, 168, checkGradeHoverImg.width, checkGradeHoverImg.height, checkGradeImg)
  
  //captions for each app
  push()
  textFont(font);
  textAlign(CENTER);
  textSize(10);
  text("check grades", 200, 240, 48)
  text("ask friend to hangout", 260, 240, 48)
  text("video game", 320, 240, 48)
  text("social media", 380, 240, 48)
  pop()
  
  if (day1 == true){
    dayTrack.day1()
    //hang with friends button hover
    buttonImgHover(260, 168, 308, 216, friendAppHoverImg, 260, 168, friendAppImg.width, friendAppImg.height, friendAppImg)
    //play a game button hover
    buttonImgHover(320, 168, 368, 216, gameAppHoverImg, 320, 168, gameAppImg.width, gameAppImg.height, gameAppImg)
    //scroll social media button hover
    buttonImgHover(380, 168, 428, 216, socialMediaHoverImg, 380, 168, socialMediaImg.width, socialMediaImg.height, socialMediaImg)
  }
  
  if (day2 == true){
    dayTrack.day2()
    //hang with friends button hover
    buttonImgHover(260, 168, 308, 216, friendAppHoverImg, 260, 168, friendAppImg.width, friendAppImg.height, friendAppImg)
    //play a game button hover
    buttonImgHover(320, 168, 368, 216, gameAppHoverImg, 320, 168, gameAppImg.width, gameAppImg.height, gameAppImg)
    //scroll social media button hover
    buttonImgHover(380, 168, 428, 216, socialMediaHoverImg, 380, 168, socialMediaImg.width, socialMediaImg.height, socialMediaImg)
  }
  
  if (day3 == true){
    dayTrack.day3()
    image(friendAppImg, 260, 168, friendAppImg.width, friendAppImg.height) //can't click to hang out with friends before graduation
    image(gameAppImg, 320, 168, gameAppImg.width, gameAppImg.height) //can't click to play game before graduation
    image(socialMediaImg, 380, 168, socialMediaImg.width, socialMediaImg.height) //can't click to scroll social media before graduation
  }
}

function areYouSure1Scene(){
  background(230, 235, 255)
  textFont(font);
  textAlign(CENTER);
  textSize(20);
  fill(0);
  text('are you sure?', width/2, 190);
  
  //yes button hover
  buttonHover(140, 230, 195, 260, text, 'yes', 180, 260)
  
  //no button hover
  buttonHover(390, 230, 428, 260, text, 'no', 420, 260)
}

function areYouReallySureMath1Scene(){
  background(230, 235, 255)
  textFont(font);
  textAlign(CENTER);
  textSize(20);
  fill(0);
  text('are you really sure?', width/2, 190);
  
  //yes button hover
  buttonHover(140, 260, 195, 290, text, 'yes', 180, 290)
  
  //no button hover
  buttonHover(390, 260, 428, 290, text, 'no', 420, 290)
}

function mathHWScene(){
  image(mathHwSceneImg, 0, 0, 600, 400)
  textSize(10)
  text("math hw due friday", 200, 91)
  
  dayTrack.trackDay()
  
  push()//q1: a hover
  textSize(10)
  buttonHover(180, 130, 220, 145, text, ' a.  )', 200, 150)
  pop()
  
  push()//q1: b hover
  textSize(10)
  buttonHover(280, 130, 320, 145, text, ' b.  )', 300, 150)
  pop()
  
  push()//q1: c hover
  textSize(10)
  buttonHover(180, 150, 220, 165, text, ' c.  )', 200, 170)
  pop()
  
  push()//q1: d hover
  textSize(10)
  buttonHover(280, 150, 320, 165, text, ' d.  )', 300, 170)
  pop()
  
  push()
  noFill()
  stroke(0)
  ellipse(circleAnswerX[circleNumQ1], circleAnswerY[circleNumQ1], 35, 14)
  pop()
  
  push()//q2: a hover
  textSize(10)
  buttonHover(180, 230, 220, 245, text, ' a.  )', 200, 250)
  pop()
  
  push()//q2: b hover
  textSize(10)
  buttonHover(180, 250, 220, 265, text, ' b.  )', 200, 270)
  pop()
  
  push()//q2: c hover
  textSize(10)
  buttonHover(180, 270, 220, 285, text, ' c.  )', 200, 290)
  pop()

  push()//q2: d hover
  textSize(10)
  buttonHover(180, 290, 220, 305, text, ' d.  )', 200, 310)
  pop()
  
  push()
  noFill()
  stroke(0)
  ellipse(circleAnswerQ2X[circleNumQ2], circleAnswerQ2Y[circleNumQ2], 35, 14)
  pop()
  
  //next button hover
  push()
  imageMode(CENTER)
  buttonImgHover(440, 190, 460, 210, nextButtonHoverImg, nextButtonX, 200, 20, 20, nextButtonImg)
  pop()
}

function areYouSureEng1Scene(){
  background(230, 235, 255)
  textFont(font);
  textAlign(CENTER);
  textSize(20);
  fill(0);
  text('are you sure?', width/2, 190);
  
  //yes button hover
  buttonHover(140, 230, 195, 260, text, 'yes', 180, 260)
  
  //no button hover
  buttonHover(390, 230, 428, 260, text, 'no', 420, 260)
}

function areYouReallySureEng1Scene(){
  background(230, 235, 255)
  textFont(font);
  textAlign(CENTER);
  textSize(20);
  fill(0);
  text('are you really sure?', width/2, 190);
  
  //yes button hover
  buttonHover(140, 260, 195, 290, text, 'yes', 180, 290)
  
  //no button hover
  buttonHover(390, 260, 428, 290, text, 'no', 420, 290)
}

function engHWScene(){
  background(230, 235, 255)
  
  //next button hover
  push()
  imageMode(CENTER)
  buttonImgHover(490, 190, 510, 210, nextButtonHoverImg, 500, 200, 20, 20, nextButtonImg)
  pop()
  
  if (spreadClickNum == 0){
    spreadDisplay.spread1Img()
  }
  if (spreadClickNum == 1){
    spreadDisplay.spread2Img()
  }
  if (spreadClickNum == 2){
    spreadDisplay.spread3Img()
  }
  if (spreadClickNum == 3){
    spreadDisplay.spread4Img()
  }
  if (spreadClickNum == 4){
    spreadDisplay.spread5Img()
    englishHomework = true
  }
  if (spreadClickNum == 5 &&
     day1 == true
     ){
    sceneNum = 3
  }
  if (spreadClickNum == 5 &&
     day2 == true
     ){
    sceneNum = 4
  }
  
  dayTrack.trackDay()
}

function checkGradeScene(){
  background(230, 235, 255)
  textSize(10)
  textAlign(LEFT)
  text("Math", 170, 100)
  text("Assignment Grade:             Status: ", 170, 120)
  text("English", 170, 190)
  text("Assignment Grade:             Status: ", 170, 210)
  text("History", 170, 280)
  text("Assignment Grade: PASS", 170, 300)
  
  //calculating math grade
  if (day3 == true){
    if(circleNumQ1 == 0 || circleNumQ1 == 2 || circleNumQ1 == 3){
      if(circleNumQ2 == 1 || circleNumQ2 == 2 || circleNumQ2 == 3){
        mathGrade = 0
      }
      
      if(circleNumQ2 == 0){
        mathGrade = 50
      }
    }
    
    if (circleNumQ1 == 1){
      if(circleNumQ2 == 1 || circleNumQ2 == 2 || circleNumQ2 == 3){
        mathGrade = 50
      }
      if(circleNumQ2 == 0){
        mathGrade = 100
      }
    }
  }
  
  //display grades and assignment status for math
  if (mathHomework == true && day1or2 ==true){
    text(displayStatus[3], 360, 120)
  }
  if (mathHomework == true && day3 == true){
    text(displayStatus[0], 360, 120)
    text(mathGrade, 285, 120)
  }
  if (mathHomework == false && day1or2 == true){
    text(displayStatus[2], 360, 120)
  }
  if (mathHomework == false && day3 == true){
    text(displayStatus[1], 360, 120)
    text("0", 285, 120)
  }
  
  //display grades and assignment status for english
  if (englishHomework == true && day3 == true){
    text(displayStatus[0], 360, 210)
    text("100", 285, 210)
  }
  if (englishHomework == false && day3 == true){
    text(displayStatus[0], 360, 210)
    text("0", 285, 210)
  }
  
  dayTrack.trackDay()
  
  //x button hover
  buttonImgHover(96, 108, 126, 138, xButtonHoverImg, 96, 108, 30, 30, xButtonImg)
}

function friendScene(){
  image(friendSceneImg, 0, 0, 600, 400)
  dayTrack.trackDay()
  //next button hover
  push()
  imageMode(CENTER)
  buttonImgHover(490, 214, 510, 234, nextButtonHoverImg, 500, 224, 20, 20, nextButtonImg)
  pop()
  //buttonHover(490, 190, 510, 210, ellipse, 500, 200, 20)
}

function gameScene(){
  image(videoGameSceneImg, 0, 0, 600, 400)
  textAlign(CENTER)
  textSize(15)
  text("you play video games until", width/2, 135)
  text("you fall asleep", width/2, 155)
  
  //next button hover
  push()
  imageMode(CENTER)
  buttonImgHover(490, 214, 510, 234, nextButtonHoverImg, 500, 224, 20, 20, nextButtonImg)
  pop()
  
  dayTrack.trackDay()
}

function socialMediaScene(){
  image(socialMediaSceneImg, 0, 0, 600, 400)
  push()
  textAlign(CENTER)
  textSize(15)
  text("you begin doom scrolling on social media until you fall asleep", 170, 180, 250, 300)
  pop()

  //next button hover
  push()
  imageMode(CENTER)
  buttonImgHover(490, 214, 510, 234, nextButtonHoverImg, 500, 224, 20, 20, nextButtonImg)
  pop()
  
  dayTrack.trackDay()
}

function wakeUp2Scene(){
  image(wakeUpImg, 0, 0, 600, 400)
  day1 = false
  day2 = true
  
  if (procrastination == 1){
    procrastinationThoughts(180)
  }
  
  push()//go to school
  textFont(font);
  textAlign(CENTER);
  textSize(20);
  buttonHover(180, 50, 410, 100, text, 'G O   T O   S C H O O L', width/2, 100)
  pop()
  
  dayTrack.day2()
}

function wakeUp3Scene(){
  image(wakeUpImg, 0, 0, 600, 400)
  day1or2 = false
  day2 = false
  day3 = true
  
  if (procrastination == 1){
    procrastinationThoughts(180)
  }
  if (procrastination == 2){
    procrastinationThoughts(90)
  }
  
  push()
  textFont(font);
  textAlign(CENTER);
  textSize(20);
  buttonHover(180, 50, 410, 100, text, 'G O   T O   S C H O O L', width/2, 100)
  pop()
  
  dayTrack.day3()
}

function gameOver(){
  image(gameOverImg, 0, 0, 600, 400)
  textAlign(CENTER)
  textSize(15)
  text("you failed to graduate due to", width/2, 200)
  text("poor grades...", width/2, 220)
}

function gameCleared(){
  image(graduationSceneImg, 0, 0, 600, 400)
  textAlign(CENTER)
  textSize(15)
  text("congratulations, you were able to graduate!", width/2, 370)
}

class Spread {
  constructor(x, y){
    this.x = x
    this.y = y
  }
  
  spread1Img(){
    textFont(font)
    push()
    rectMode(CENTER)
    strokeWeight(3)
    fill(255)
    rect(this.x, this.y, 332, 252)
    pop()
    line(width/2, 74, width/2, 326)
    textSize(20)
    text("1", 430, 320)
    push()
    textAlign(CENTER)
    textSize(10)
    text("Chapter 22: A Symphony of Beginnings", 308, 140, 150)
    textAlign(LEFT)
    textSize(8)
    text("The sun sank toward the horizon, bathing the quiet town in a warm, golden light. The familiar scent of coffee mingled with the soft murmur of voices as the group gathered for one final evening in their favorite corner of the local café. This place had been a silent witness to their shared laughter, heartache, and the gentle rhythm of their intertwined lives.", 308, 180, 150 )
    pop()
  }
  
  spread2Img(){
    textFont(font)
    push()
    rectMode(CENTER)
    strokeWeight(3)
    fill(255)
    rect(this.x, this.y, 332, 252)
    pop()
    line(width/2, 74, width/2, 326)
    textSize(20)
    text("2", 150, 320)
    text("3", 430, 320)
    push()
    textAlign(LEFT)
    textSize(8)
    text("\"This feels like the end of an era,\"  remarked John, tracing the rim of their coffee cup.", 145, 100, 150 )
    text("Sophie nodded, a wistful smile playing on their lips. \"But you know, it's also the beginning of something new. Our lives are like a series of interconnected stories, and this chapter is just one part of a much larger narrative.\"", 145, 140, 150)
    text("As they sipped their coffee, the conversation meandered through memories - the shared laughter, the support during tough times, and the unspoken bond that had woven them together.", 145, 230, 150)
    text("\"I'll miss this,\" Emi admitted, glancing around at the familiar faces in the café.", 308, 100, 150 )
    text("\"Change is inevitable,\" Ben replied. \"But it's in these moments of change that we find our true selves. Life is a journey, and we're all on different paths. It's exciting to think about the adventures that lie ahead.\"", 308, 138, 150)
    text("The group decided to take a walk through the town, revisiting spots that had woven into the fabric of their shared memories. They meandered through parks and strolled along the riverbank,", 308, 226, 150)
    pop()
  }

  spread3Img(){
    textFont(font)
    push()
    rectMode(CENTER)
    strokeWeight(3)
    fill(255)
    rect(this.x, this.y, 332, 252)
    pop()
    line(width/2, 74, width/2, 326)
    textSize(20)
    text("4", 150, 320)
    text("5", 430, 320)
    push()
    textAlign(LEFT)
    textSize(8)
    text("and paused at the town square where they had gathered for festivals. Each spot held a story, a snapshot in time, and a testament to the friendships that had shaped their existence.", 145, 100, 150 )
    text("Under the starlit sky, they found themselves on a hill overlooking the town. The lights twinkled below like a mosaic of dreams, and the air was filled with a mix of anticipation and reflection. \"We might not have it all figured out,\" John admitted, \"but that's the beauty of it. The unknown is an adventure waiting to happen.\"", 145, 180, 150)
    text("The group vowed to stay connected, promising yearly reunions and to celebrate life's milestones together, no matter the distances that lay ahead. Standing on the hilltop, with the wind carrying whispers of the future, the town below seemed to hold its breath in quiet acknowledgment.", 308, 100, 150 )
    text("As they started down the hill, John looked back one last time at the town that had been home for so many years. The familiar buildings, the soft glow of lights, and the memories woven into every street corner felt like an inseparable part of him.", 308, 210, 150)
    pop()
  }
  
  spread4Img(){
    textFont(font)
    push()
    rectMode(CENTER)
    strokeWeight(3)
    fill(255)
    rect(this.x, this.y, 332, 252)
    pop()
    line(width/2, 74, width/2, 326)
    textSize(20)
    text("6", 150, 320)
    text("7", 430, 320)
    push()
    textAlign(LEFT)
    textSize(8)
    text("There was a poignant silence among the group, each member contemplating the gravity of the moment.", 145, 100, 150 )
    text("\"I never thought saying goodbye would be this hard,\" Sophie confessed, their voice a soft whisper in the night.", 145, 150, 150)
    text("Emi placed a comforting hand on their shoulder, \"It's not goodbye forever. It's \'see you later.\' Our paths may diverge, but the bonds we've forged are unbreakable.\"", 145, 200, 150)
    text("The town, it seemed, was bidding them a silent farewell. ", 145, 270, 150)
    text("The wind seemed to carry the echoes of shared laughter and countless conversations, as if the essence of the place had been woven into their memories. An invisible thread now bound them to this town, a connection that would linger long after they left.", 308, 100, 150 )
    text("They wandered through the quiet streets, taking one last walk past the places that had shaped their lives. The park, the riverbank, the town square—each spot seemed to murmur a gentle goodbye. As they neared the edge of town, a realization", 308, 210, 150)
    pop()
  }
  
  spread5Img(){
    textFont(font)
    push()
    rectMode(CENTER)
    strokeWeight(3)
    fill(255)
    rect(this.x, this.y, 332, 252)
    pop()
    line(width/2, 74, width/2, 326)
    textSize(20)
    text("8", 150, 320)
    text("9", 430, 320)
    push()
    textAlign(LEFT)
    textSize(8)
    text("settled in: this was not an ending, but a transformation.", 145, 100, 150 )
    text("The road ahead was illuminated by the soft glow of streetlights, symbolizing the journey awaiting them.", 145, 130, 150)
    text("The group shared a quiet breath, a moment of unity, before stepping beyond the town's borders. The night wrapped around them, and the stars above seemed to glow a bit brighter, as if encouraging them onward into the unknown paths of their futures.", 145, 180, 150)
    text("In that moment, as they crossed the threshold", 145, 280, 150)
    text("Caught between what had been and what lay ahead, the group realized their individual stories were woven into the shared narrative of their friendship. The town might fade into the distance, but the memories and bonds forged within its borders would remain etched into the fabric of their lives.", 308, 100, 150 )
    text("And so, with hearts both weighted by farewells and lifted by anticipation, they set out on the journey ahead—knowing that, wherever life might lead them, the echoes of this town would always resonate within their souls.", 308, 215, 150)
    pop()
  }
}

class Day {
  constructor(x, y){
    this.x = x
    this.y = y
  }
  
  day1(){
    fill(0);
    textFont(font);
    textAlign(LEFT);
    textSize(20);
    text('D A Y   1', this.x, this.y);
  }
  
  day2(){
    fill(0);
    textFont(font);
    textAlign(LEFT);
    textSize(20);
    text('D A Y   2', this.x, this.y);
  }
  
  day3(){
    fill(0);
    textFont(font);
    textAlign(LEFT);
    textSize(20);
    text('D A Y   3', this.x, this.y);
  }
  
   trackDay(){
      if (day1 == true){
        dayTrack.day1()
      }

      if (day2 == true){
        dayTrack.day2()
      }

      if (day3 == true){
        dayTrack.day3()
      }
    }
}

function procrastinationThoughts(color){
  push()
  fill(color)
  textFont(font)
  text(procThoughts[0], 10, 50)
  text(procThoughts[4], 100, 100)
  text(procThoughts[1], 20, 140)
  text(procThoughts[2], 70, 200)
  text(procThoughts[3], 6, 230)
  text(procThoughts[5], 70, 270)
  text(procThoughts[0], 10, 320)
  text(procThoughts[4], 50, 370)
  text(procThoughts[2], 200, 70)
  text(procThoughts[5], 240, 110)
  text(procThoughts[3], 330, 60)
  text(procThoughts[1], 420, 100)
  text(procThoughts[4], 220, 20)
  text(procThoughts[2], 410, 30)
  text(procThoughts[5], 480, 50)
  text(procThoughts[0], 450, 200)
  text(procThoughts[3], 480, 150)
  text(procThoughts[1], 510, 260)
  text(procThoughts[2], 470, 300)
  text(procThoughts[5], 480, 380)
  text(procThoughts[3], 160, 350)
  text(procThoughts[1], 250, 390)
  text(procThoughts[0], 320, 350)
  text(procThoughts[1], 230, 300)
  pop()
}