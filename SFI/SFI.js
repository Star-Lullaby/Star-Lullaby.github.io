//=========================
// STAR FOX INVADERS
//=========================

//PLAYER
var p1X = 300;
var p1Y = 475;
var pWidth = 60;
var pHeight = 40;
var pSpeed = 5;

//ROCKET
var r1X = p1X;
var r1Y = p1Y;
var rWidth = 7;
var rHeight = 20;
var rSpeed = 10;
var r1Position = 0;
var fire = false;

//ALIENS
var aliens = [];
var aWidth = 60;
var aHeight = 40;
var alienDirection = 1;
var alienSpeed = 1;

//LEVELS
var level = 1;

//BOSS
var bossActive = false;
var bossX = 300;
var bossY = 100;
var bossWidth = 180;
var bossHeight = 120;
var bossHealth = 27;

//BOSS LASER
var bossLaserX = 0;
var bossLaserY = 0;
var bossLaserSpeed = 6;
var bossFire = false;

//PLAYER
var playerLives = 3;

//COUNTERS
var score = 0;
var stage = 0;

//IMAGES
var playerImage;
var alienImage;

//FONTS
var titleFont;
var bodyFont;

//=========================
// CREATE ALIENS
//=========================

function createAliens(rows, cols){

  aliens = [];

  for(var r = 0; r < rows; r++){

    for(var c = 0; c < cols; c++){

      aliens.push({
        x: 80 + c * 70,
        y: 100 + r * 60,
        alive: true
      });

    }

  }

}

//=========================
// PRELOAD
//=========================

function preload(){

  playerImage = loadImage('https://star-lullaby.github.io/data/arwing_up.png');

  alienImage = loadImage('https://star-lullaby.github.io/data/alien.png');

  titleFont = loadFont('https://star-lullaby.github.io/data/minecraft.ttf');

  bodyFont = loadFont('https://star-lullaby.github.io/data/minecraft.ttf');

}

//=========================
// SETUP
//=========================

function setup() {

  createCanvas(600,500);

  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);

  createAliens(2,5);

}

//=========================
// DRAW
//=========================

function draw(){

  if(stage == 0){
    splash();
  }

  if(stage == 1){
    game();
  }

  if(stage == 2){
    win();
  }

  if(mouseIsPressed == true && stage == 0){
    stage = 1;
  }

}

//=========================
// SPLASH
//=========================

function splash(){

  background(0);

  stroke(0,255,0);
  noFill();
  strokeWeight(3);
  rect(width/2,height/2,width,height);

  noStroke();

  fill(0,255,0);

  textSize(40);
  textFont(titleFont);
  text('STAR FOX INVADERS', width/2,100);

  textSize(15);
  textFont(bodyFont);
  text('2026 LullabyGames', width/2,130);

  textSize(40);
  textFont(titleFont);
  text('HOW TO PLAY', width/2,250);

  textSize(15);

  text('USE LEFT + RIGHT ARROWS', width/2,290);
  text('PRESS S TO FIRE', width/2,320);
  text('DEFEAT ALL ALIENS', width/2,350);

  text('CLICK SCREEN TO BEGIN', width/2,450);

}

//=========================
// WIN SCREEN
//=========================

function win(){

  background(0);

  stroke(0,255,0);
  noFill();
  strokeWeight(3);
  rect(width/2,height/2,width,height);

  fill(0,255,0);

  textSize(50);
  textFont(titleFont);
  text('MISSION COMPLETE', width/2,220);

  textSize(20);
  textFont(bodyFont);
  text('REFRESH TO PLAY AGAIN', width/2,260);

}

//=========================
// GAME
//=========================

function game(){

  background(0);

  //WORLD BORDER
  stroke(0,255,0);
  noFill();
  strokeWeight(3);
  rect(width/2,height/2,width,height);

  noStroke();

  //TOP BAR
  fill(0,255,0);
  rect(width/2,25,width,50);

  //PLAYER
  image(playerImage,p1X,p1Y,pWidth,pHeight);

  //PLAYER MOVEMENT
  if(keyIsDown(LEFT_ARROW)){
    p1X -= pSpeed;
  }

  if(keyIsDown(RIGHT_ARROW)){
    p1X += pSpeed;
  }

  //LIMITS
  if(p1X < 30){
    p1X = 30;
  }

  if(p1X > width-30){
    p1X = width-30;
  }

  //DRAW ALIENS
  for(var i = 0; i < aliens.length; i++){

    if(aliens[i].alive){

      image(
        alienImage,
        aliens[i].x,
        aliens[i].y,
        aWidth,
        aHeight
      );

    }

  }

  //RUN FUNCTIONS
  rockets();
  moveAliens();
  aliensCollision();

  //BOSS LEVEL
  if(bossActive == true){
    bossBattle();
  }

  //STATUS BAR
  fill(0);

  textFont(titleFont);
  textSize(20);

  text('SCORE: ' + score, 80,35);

  text('LEVEL: ' + level, 300,35);

  text('LIVES: ' + playerLives, 520,35);

  //COUNT ALIENS
  var remainingAliens = 0;

  for(var i = 0; i < aliens.length; i++){

    if(aliens[i].alive){
      remainingAliens++;
    }

  }

  //LEVEL 2
  if(remainingAliens == 0 && level == 1){

    level = 2;

    createAliens(3,6);

    alienSpeed = 1.5;

  }

  //LEVEL 3
  else if(remainingAliens == 0 && level == 2){

    level = 3;

    createAliens(4,7);

    alienSpeed = 2;

  }

  //BOSS LEVEL
  else if(remainingAliens == 0 && level == 3){

    level = 4;

    bossActive = true;

  }

  //GAME OVER
  if(playerLives <= 0){

    background(0);

    fill(255,0,0);

    textSize(60);

    text('GAME OVER', width/2,height/2);

    noLoop();

  }

}

//=========================
// ROCKETS
//=========================

function rockets(){

  fill(26,175,255);

  rect(r1X,r1Y,rWidth,rHeight);

  //START FIRING
  if(fire == true && r1Position == 0){

    r1Position = 1;

  }

  //MOVE ROCKET
  if(r1Position == 1){

    r1Y -= rSpeed;

    if(r1Y <= 0){

      r1Position = 2;

    }

  }

  else{

    r1X = p1X;
    r1Y = p1Y;

  }

  //RESET
  if(r1Position == 2){

    r1X = p1X;
    r1Y = p1Y;

    r1Position = 0;

  }

}

//=========================
// MOVE ALIENS
//=========================

function moveAliens(){

  var edgeHit = false;

  for(var i = 0; i < aliens.length; i++){

    if(aliens[i].alive){

      aliens[i].x += alienSpeed * alienDirection;

      if(aliens[i].x > width-40 || aliens[i].x < 40){

        edgeHit = true;

      }

    }

  }

  //MOVE DOWN
  if(edgeHit){

    alienDirection *= -1;

    for(var i = 0; i < aliens.length; i++){

      aliens[i].y += 20;

    }

  }

}

//=========================
// COLLISIONS
//=========================

function aliensCollision(){

  for(var i = 0; i < aliens.length; i++){

    if(aliens[i].alive){

      if(
        r1X >= aliens[i].x-aWidth/2 &&
        r1X <= aliens[i].x+aWidth/2 &&
        r1Y >= aliens[i].y-aHeight/2 &&
        r1Y <= aliens[i].y+aHeight/2
      ){

        aliens[i].alive = false;

        score++;

        r1Position = 2;

      }

    }

  }

}

//=========================
// BOSS BATTLE
//=========================

function bossBattle(){

  //DRAW BOSS
  image(
    alienImage,
    bossX,
    bossY,
    bossWidth,
    bossHeight
  );

  //MOVE
  bossX += alienDirection * 3;

  if(bossX > width-100 || bossX < 100){

    alienDirection *= -1;

  }

  //ROCKET HIT
  if(
    r1X >= bossX-bossWidth/2 &&
    r1X <= bossX+bossWidth/2 &&
    r1Y >= bossY-bossHeight/2 &&
    r1Y <= bossY+bossHeight/2
  ){

    bossHealth--;

    r1Position = 2;

  }

  //BOSS HEALTH
  fill(255,0,0);

  textSize(20);

  text('BOSS HP: ' + bossHealth, width/2,70);

  //BOSS FIRE
  if(frameCount % 60 == 0){

    bossLaserX = bossX;
    bossLaserY = bossY;

    bossFire = true;

  }

  //DRAW LASER
  if(bossFire){

    fill(255,0,0);

    rect(bossLaserX,bossLaserY,10,30);

    bossLaserY += bossLaserSpeed;

    //PLAYER HIT
    if(
      bossLaserX >= p1X-pWidth/2 &&
      bossLaserX <= p1X+pWidth/2 &&
      bossLaserY >= p1Y-pHeight/2 &&
      bossLaserY <= p1Y+pHeight/2
    ){

      playerLives--;

      bossFire = false;

    }

    //RESET LASER
    if(bossLaserY > height){

      bossFire = false;

    }

  }

  //WIN
  if(bossHealth <= 0){

    stage = 2;

  }

}

//=========================
// KEYS
//=========================

function keyTyped(){

  if(key == 's'){

    fire = true;

  }

}

function keyReleased(){

  fire = false;

}
