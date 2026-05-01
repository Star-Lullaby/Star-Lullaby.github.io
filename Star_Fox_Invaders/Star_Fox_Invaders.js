// ================= IMPORT =================
import processing.sound.*;

// ================= GLOBAL =================

// player
float p1X = 300;
float p1Y = 475;
float pWidth = 50;
float pHeight = 30;
float pSpeed = 4;

// rocket
float r1X = p1X;
float r1Y = p1Y;
int r1Position = 0;
float rWidth = 7;
float rHeight = 20;
float rSpeed = 5;
boolean fire = false;

// alien
float aWidth = 40;
float aHeight = 40;
float a1X = 50;
float a1Y = 150;

// score
int score = 0;

// media
PImage playerImage, alienImage;
PFont titleFont, bodyFont;

// ✅ SOUND (Processing version)
SoundFile fireSound;
SoundFile explosionSound;
SoundFile backgroundMusic;


// ================= SETUP =================
void setup() {
  size(600, 500);

  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);

  // load images/fonts
  playerImage = loadImage("arwing_up.png");
  alienImage = loadImage("alien.png");

  titleFont = createFont("minecraft.ttf", 32);
  bodyFont = createFont("minecraft.ttf", 32);

  // load sounds
  fireSound = new SoundFile(this, "lazer.wav");
  explosionSound = new SoundFile(this, "lazer_hit.wav");
  backgroundMusic = new SoundFile(this, "corneria.mp3");

  // play music
  backgroundMusic.loop();
}


// ================= DRAW =================
void draw() {
  background(0);

  stroke(0,255,0);
  noFill();
  strokeWeight(3);
  rect(width/2, height/2, width, height);

  noStroke();
  fill(0,255,0);
  rect(width/2, 25, width, 50);

  // player
  image(playerImage, p1X, p1Y, pWidth, pHeight);

  // alien
  image(alienImage, a1X, a1Y, aWidth, aHeight);

  rockets();

  // collision
  if (
    r1X >= a1X - aWidth/2 &&
    r1X <= a1X + aWidth/2 &&
    r1Y >= a1Y - aHeight/2 &&
    r1Y <= a1Y + aHeight/2
  ){
    explosionSound.play();
    score++;
    a1X = -1000;
    r1Position = 2;
  }

  // UI
  fill(0);
  textFont(titleFont);
  textSize(25);
  text("Score:", 50, 35);

  textFont(bodyFont);
  text(score, 110, 35);
}


// ================= ROCKETS =================
void rockets(){
  fill(26, 175, 255);
  rect(r1X, r1Y, rWidth, rHeight);

  if (fire && r1Position == 0){
    r1Position = 1;
  }

  if (r1Position == 1){
    r1Y -= rSpeed;

    if (r1Y <= 0){
      r1Position = 2;
    }
  } else {
    r1X = p1X;
    r1Y = p1Y;
  }

  if (r1Position == 2){
    r1X = p1X;
    r1Y = p1Y;
    r1Position = 0;
  }
}


// ================= INPUT =================
void keyPressed(){

  if (keyCode == LEFT){
    p1X -= pSpeed;
  }

  if (keyCode == RIGHT){
    p1X += pSpeed;
  }

  if (key == 's' || key == 'S'){
    fire = true;
    fireSound.play();
  }
}

void keyReleased(){
  fire = false;
}  
