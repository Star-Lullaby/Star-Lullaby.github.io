
var img;
var initials = 'ar'; // your initials
var choice = '1';
var screenbg = 250;
var lastscreenshot = 61;

let button;

function preload() {
  img = loadImage('https://star-lullaby.github.io/images/pikachu.png');
}

function setup() {
  createCanvas(600, 600);
  background(screenbg);

  button = createButton('clear canvas');
  button.position(500, 645);
  button.mousePressed(clear_print);

  button = createButton('save img');
  button.position(500, 620);
  button.mousePressed(saveme);

  button = createButton('help text');
  button.position(500, 670);
  button.mousePressed(helpText);

  helpText();
}

function draw() {
  if (keyIsPressed) {
    choice = key;
  }

  if (mouseIsPressed) {
    newkeyChoice(choice);
  }
}

function newkeyChoice(toolChoice) {

  // TOOL 1 - thin black sketch pencil
  if (toolChoice == '1') {

    stroke(30);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);

  // TOOL 2 - thick charcoal brush
  } else if (toolChoice == '2') {

    stroke(50, 50, 50, 120);
    strokeWeight(18);
    line(mouseX, mouseY, pmouseX, pmouseY);

  // TOOL 3 - red marker
  } else if (toolChoice == '3') {

    stroke(220, 40, 40, 150);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);

  // TOOL 4 - blue watercolor
  } else if (toolChoice == '4') {

    stroke(50, 100, 255, 60);
    strokeWeight(25);
    line(mouseX, mouseY, pmouseX, pmouseY);

  // TOOL 5 - glowing neon circles
  } else if (toolChoice == '5') {

    noStroke();
    fill(255, 0, 200, 120);
    circle(mouseX, mouseY, random(20, 60));

  // TOOL 6 - green spray paint
  } else if (toolChoice == '6') {

    noStroke();
    fill(0, 200, 120, 80);

    for (let i = 0; i < 10; i++) {
      circle(
        mouseX + random(-20, 20),
        mouseY + random(-20, 20),
        random(3, 8)
      );
    }

  // TOOL 7 - yellow square stamps
  } else if (toolChoice == '7') {

    stroke(255, 180, 0);
    strokeWeight(2);
    fill(255, 220, 0, 120);
    rect(mouseX, mouseY, 30, 30);

  // TOOL 8 - purple triangle brush
  } else if (toolChoice == '8') {

    stroke(120, 0, 255);
    strokeWeight(2);
    fill(180, 100, 255, 100);

    triangle(
      mouseX, mouseY - 20,
      mouseX - 20, mouseY + 20,
      mouseX + 20, mouseY + 20
    );

  // TOOL 9 - random colorful dots
  } else if (toolChoice == '9') {

    noStroke();
    fill(random(255), random(255), random(255), 150);

    circle(
      mouseX + random(-15, 15),
      mouseY + random(-15, 15),
      random(10, 40)
    );

  // TOOL 0 - rainbow ribbon lines
  } else if (toolChoice == '0') {

    stroke(
      random(255),
      random(255),
      random(255),
      120
    );

    strokeWeight(random(2, 12));

    line(
      mouseX + random(-20, 20),
      mouseY + random(-20, 20),
      pmouseX + random(-20, 20),
      pmouseY + random(-20, 20)
    );

  // BONUS IMAGE TOOL
  } else if (toolChoice == 'g' || toolChoice == 'G') {

    image(img, mouseX, mouseY, mouseX / 10, mouseX / 16);

  } else if (key == 'p' || key == 'P') {

    saveme();
  }
}

function clear_print() {
  background(screenbg);
}

function saveme() {
  filename = initials + day() + hour() + minute() + second();

  if (second() != lastscreenshot) {
    saveCanvas(filename, 'jpg');
    key = "";
  }

  lastscreenshot = second();
}

function keyPressed() {
  if (key === 'x' || key === 'X') {
    clear_print();

  } else if (key === 'p' || key === 'P') {
    saveme();
  }
}

function helpText() {
  fill("black");
  strokeWeight(0.2);
  textSize(15);

  text('press numerical keys from 1 - 0 for different brushes', 60, 30);
  text('x = clear canvas | p = save image', 60, 45);
  text('g = secret image brush', 60, 60);
}
