var ballx = 300;
var bally = 300;
var ballsize = 40;
var r = 10;
var score = 0;
var gameState = "L1";
var img1, img2, beginImg, img3;
var img4, img5, img6, img7;
var img8, img9;

var mouseW = 55;
var mouseH = 40;

var catW = 140;
var catH = 140;

/* edited cursor */
var catOffsetX = 135;
var catOffsetY = 90;

var startTime = 0;
var endTime = 0;
var timerRunning = true;

function preload() {

  img1 = loadImage('https://star-lullaby.github.io/images/mousesr.png');
  img2 = loadImage('https://star-lullaby.github.io/images/cat.png');
  beginImg = loadImage('https://star-lullaby.github.io/images/livingroom.jpg');
  img3 = loadImage('https://star-lullaby.github.io/images/garden.jpg');
  img4 = loadImage('https://star-lullaby.github.io/images/alleyway.jpg');
  img5 = loadImage('https://star-lullaby.github.io/images/desert.jpg');
  img6 = loadImage('https://star-lullaby.github.io/images/rocketlaunch.jpg');
  img7 = loadImage('https://star-lullaby.github.io/images/moon.jpg');
  img8 = loadImage('https://star-lullaby.github.io/images/astromouse1.png');
  img9 = loadImage('https://star-lullaby.github.io/images/cosmeownaut1.png');
}

function setup() {
  var canvas = createCanvas(800, 600);
  
  canvas.position(
  (windowWidth - width) / 2,
  (windowHeight - height) / 2
 );
 
  textAlign(CENTER);
  textSize(20);
  //noCursor();
  startTime = millis();
}

function draw() {

  if (gameState == "L1"){ levelOne(); }
  if (gameState == "L2"){ levelTwo(); }
  if (gameState == "L3"){ levelThree(); }
  if (gameState == "L4"){ levelFour(); }
  if (gameState == "L5"){ levelFive(); }
  if (gameState == "L6"){ levelSix(); }
  if (gameState == "L7"){ levelSeven(); }

 // =========================
  // TITLE AREA
  // =========================
  stroke(0);
  strokeWeight(4);
  fill(255);

  textSize(32);
  textStyle(BOLD);
  text("Catch the Mouse!!", width/2, 35);

  textSize(14);
  textStyle(NORMAL);
  text("Catch the mouse as fast as you can to win.", width/2, 60);

  // =========================
  // SCORE + TIMER
  // =========================
  
textSize(20);

  // white text for dark levels
  if(gameState == "L6" || gameState == "L7"){
    fill(255);
    stroke(0);
  } else {
    fill(0);
    stroke(255);
  }
  
  text(("score: " + score), width/2, 110);

  if (timerRunning) {
    var currentTime = (millis() - startTime) / 1000;
    text("Time: " + currentTime.toFixed(2), width/2, 90);
  }
  
  noStroke();
}

function drawCat(targetX, catImage){
  push();
  translate(mouseX, mouseY);

  /* cat faces mouse */
  if(mouseX > targetX){
    scale(-1,1);
  }

  image(catImage, -catOffsetX, -catOffsetY, catW, catH);
  pop();
}

function levelOne(){
  background(beginImg);
  text("Level 1", width/2, height-30);

  var distToBall = dist(ballx, bally, mouseX, mouseY);

  /* hit area */
  if(distToBall < 50){
    ballx = random(mouseW/2, width - mouseW/2);
    bally = random(mouseH/2, height - mouseH/2);
    score = score + 1;
  }

  if(score>5){ gameState = "L2"; }

  image(img1, ballx, bally, mouseW, mouseH);
  drawCat(ballx, img2);
}

function levelTwo(){
  background(img3);
  text("Level 2", width/2, height-20);

  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if(distToBall < 45){
    ballx = random(mouseW/2, width - mouseW/2);
    bally = random(mouseH/2, height - mouseH/2);
    score = score + 1;
  }

  if(score>=10){ gameState = "L3"; }

  image(img1, ballx, bally, mouseW, mouseH);
  drawCat(ballx, img2);
}

function levelThree(){
  background(img4);
  text("Level 3", width/2, height-20);

  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if(distToBall < 40){
    ballx = random(mouseW/2, width - mouseW/2);
    bally = random(mouseH/2, height - mouseH/2);
    score = score + 1;
  }

  if(score>15){ gameState = "L4"; }

  image(img1, ballx, bally, mouseW, mouseH);
  drawCat(ballx, img2);
}

function levelFour(){
  background(img5);
  text("Level 4", width/2, height-20);

  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if(distToBall < 35){
    ballx = random(mouseW/2, width - mouseW/2);
    bally = random(mouseH/2, height - mouseH/2);
    score = score + 1;
  }

  if(score>=20){ gameState = "L5"; }

  image(img1, ballx, bally, mouseW, mouseH);
  drawCat(ballx, img2);
}

function levelFive(){
  background(img6);
  text("Level 5", width/2, height-20);

  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if(distToBall < 30){
    ballx = random(mouseW/2, width - mouseW/2);
    bally = random(mouseH/2, height - mouseH/2);
    score = score + 1;
  }

  if(score>=25){ gameState = "L6"; }

  image(img1, ballx, bally, mouseW, mouseH);
  drawCat(ballx, img2);
}

function levelSix(){
  background(img7);
  text("Level 6", width/2, height-20);

  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if(distToBall < 25){
    ballx = random(mouseW/2, width - mouseW/2);
    bally = random(mouseH/2, height - mouseH/2);
    score = score + 1;
  }

  if(score>=35){
    gameState = "L7";
    endTime = (millis() - startTime)/1000;
    timerRunning = false;
  }

  image(img8, ballx, bally, mouseW, mouseH);
  drawCat(ballx, img9);
}

function levelSeven(){
  background(img7);

  fill(255);
  text("You Caught the Mouse!", width/2, height-40);
  text("Final Time: " + endTime.toFixed(2) + " seconds", width/2, height-10);
}
