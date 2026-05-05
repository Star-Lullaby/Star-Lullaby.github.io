//global

  //player
  var p1X = 300; //p1 stands for player 1
  var p1Y = 475;
  var pWidth = 50;
  var pHeight = 30;
  var pSpeed = 4;
  
  //rocket
  var r1X = p1X; //r1 for rocket 1
  var r1Y = p1Y;
  var r1Position = 0;//keep track of where rocket currently is
  var rWidth = 7; 
  var rHeight = 20;
  var rSpeed = 5; 
  var fire = false; //am I firing a rocket?

  //aliens
  var aWidth = 40;
  var aHeight = 40;
  //row 1
  var a1X = 50;
  var a1Y = 150;
  
  //counters
  var score = 0;
  

  

 function setup() {
  createCanvas(600, 500); 
  
  //set modes
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
 
  
} ///close setup



function draw() {
  //call looping functions
  keyPressed();
  keyTyped();
  
  background(0);//black
  
 //appearance of world
   stroke(0,255,0); //green
   noFill();
   strokeWeight(3);
   rect(width/2, height/2, width, height);
   noStroke();
   fill(0,255,0); //green
   rect(width/2, 25, width, 50);//banner
   
   //draw player
   noStroke();
   fill(0,0,255);//blue
   rect(p1X, p1Y, pWidth, pHeight);
      
  //draw aliens
    fill(255);//white
    rect(a1X, a1Y, aWidth, aHeight);   
    
  //run rocket function
    rockets();
    
    
  //collisions between rocket and aliens
    if(r1X >= a1X-aWidth/2 && r1X <= a1X+aWidth/2 && r1Y >= a1Y-aHeight/2 && r1Y <= a1Y+aHeight/2){
      //collision between rocket and alien
      score = score+1;//add points
      a1X = -1000;//send alien off screen
      r1Position = 2;  //send rocket back to player
    }//close hit alien
    
    
    
    
    
  //status bar
    fill(0);//black
    textSize(25); 
    //textFont(titleFont);
    text('Score:', 50, 35);
    //textFont(bodyFont);
    textSize(25);
    text(score, 110, 35);
  
      
  }////close draw
  
  
  
  function rockets(){
   //rocket positions
     //0 = with player 1 ready to be fired
     //1 = in motion after firing
     //2 = collision with object, return to p1
     
   //draw rocket
     fill(26, 175, 255);//light blue
     rect(r1X, r1Y, rWidth, rHeight); 
    
  //keep track and fire rockets
  if(fire == true && r1Position == 0){
    r1Position = 1;
  }//close fire
  
  //fire rockets code
    if(r1Position == 1){
      r1X = r1X; //stop following p1
      r1Y = r1Y-rSpeed;// move vertically
      
      //if exceeds window or misses
        if(r1Y <= 0){
          r1Position = 2;//reload
        }//close exceed so send back
        
    }//close fire
    else{
      //when you are not firing, the rocket should be p1
      r1Y = p1Y;
      r1X = p1X;
    }//close else not firing
    
  //reload on #2 command
    if(r1Position == 2){
      r1Y = p1Y;
      r1X = p1X;
      r1Position = 0;//reset so you can fire again
    }//return home on 2
    
  }//cose rockets


  function keyPressed(){
    
    if(keyCode == LEFT_ARROW && keyIsPressed){
      p1X = p1X-pSpeed;
    }//close left pressed
    
    if(keyCode == RIGHT_ARROW && keyIsPressed){
      p1X = p1X+pSpeed;
    }//close left pressed
  
  
  }//close keypressed
  
  function keyTyped (){
    
    if(key == 's' && keyIsPressed){
      fire = true; //fire rocket on key press
    }//close s
    else{
      fire = false; 
    }//close else not s  
    
  }//close keytyped
