//global

//player
var p1X = 350; //p1 stands for player 1
var p1Y = 475;
var pwidth = 50;
var pHeight = 30;
var pSpeed = 4;


function setup() {
  createCanvas(600,500);
  
  //set modes
  rectMode(CENTER);

}///close setup



function draw() {
  background(0);//black
  
  //appearance of world
    stroke(0,255,0);//green
    noFill();
    strokeWeight(3);
    rect(width/2, height/2, width, height);
    noStroke();
    fill(0,255,0);//green
    rect(width/2, 25, width 50);//banner
    
  //draw player
    noStroke();
    fill(0,0,255);//blue
    rect(p1X, p1Y, pWidth, pHeight);

}////close draw
