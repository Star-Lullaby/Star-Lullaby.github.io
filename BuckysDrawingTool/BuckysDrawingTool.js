var initials = 'ar';
var choice = '1';
var screenbg = 250;
var lastscreenshot = 61;

let button;

function setup() {

  createCanvas(600, 600);
  background(screenbg);

  button = createButton('clear canvas');
  button.position(500, 645);
  button.mousePressed(clear_print);

  button = createButton('save img');
  button.position(500, 620);
  button.mousePressed(saveme);

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

  if (toolChoice == '1') {

    stroke(0);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '2') {

    stroke(255, 0, 0);
    strokeWeight(8);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '3') {

    stroke(0, 0, 255, 80);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '4') {

    noStroke();
    fill(255, 100, 0, 120);
    circle(mouseX, mouseY, 40);

  } else if (toolChoice == '5') {

    fill(0, 255, 150, 120);
    rect(mouseX, mouseY, 30, 30);

  } else if (toolChoice == '6') {

    fill(255, 0, 255, 120);

    triangle(
      mouseX,
      mouseY - 20,
      mouseX - 20,
      mouseY + 20,
      mouseX + 20,
      mouseY + 20
    );

  } else if (toolChoice == '7') {

    stroke(0);
    strokeWeight(1);

    for (let i = 0; i < 5; i++) {

      point(
        mouseX + random(-20, 20),
        mouseY + random(-20, 20)
      );
    }

  } else if (toolChoice == '8') {

    fill(
      random(255),
      random(255),
      random(255),
      150
    );

    square(
      mouseX,
      mouseY,
      random(10, 50)
    );

  } else if (toolChoice == '9') {

    stroke(0, 255, 255);
    strokeWeight(random(1, 10));

    line(
      mouseX,
      mouseY,
      pmouseX,
      pmouseY
    );

  } else if (toolChoice == '0') {

    noStroke();

    fill(
      random(255),
      random(255),
      random(255),
      100
    );

    ellipse(
      mouseX,
      mouseY,
      random(20, 80)
    );
  }
}

function clear_print() {

  background(screenbg);
}

function saveme() {

  let filename =
    initials +
    day() +
    hour() +
    minute() +
    second();

  saveCanvas(filename, 'jpg');
}

function keyPressed() {

  if (key === 'x' || key === 'X') {

    clear_print();

  } else if (key === 'p' || key === 'P') {

    saveme();
  }
}

function helpText() {

  fill(0);
  textSize(15);

  text(
    'press 1 - 0 for brushes',
    60,
    30
  );

  text(
    'x = clear | p = save',
    60,
    50
  );
}
