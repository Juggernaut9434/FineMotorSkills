//red
let circle1X, circle1Y;
let circle2X, circle2Y;
//green
let circle3X = 300;
let circle3Y = 100;
let circle4X = 450;
let circle4Y = 300;
//yellow
let circle5X = 450;
let circle5Y = 100;
let circle6X = 75;
let circle6Y = 200;
//orange
let circle7X = 225;
let circle7Y = 200;
let circle8X = 525;
let circle8Y = 200;
//purple
let circle9X = 375;
let circle9Y = 200;
let circle10X = 150;
let circle10Y = 300;

// boolean for dragging
let c1 = false,
  c2 = false,
  c3 = false,
  c4 = false,
  c5 = false,
  c6 = false,
  c7 = false,
  c8 = false,
  c9 = false,
  c10 = false;

// boolean for collision / disappear
let cRed = false,
  cGreen = false,
  cYellow = false,
  cOrange = false,
  cPink = false;

let diameter = 45;
//timer
let timer = 30;
//confetti
let confetti = [];

let count = 0; // 5 pairs
// increment count by 1 everytime a pair disappears.

//menu
let menu;

// restartBtn
let restartBtn;

function preload() {
  song = loadSound("music/song.mp3");

}

function setup() {
  createCanvas(600, 400);

  song.play();
  song.loop();

  // timer
  timer = 30;
  
  //red
  circle1X = 150;
  circle1Y = 100;
  circle2X = 300;
  circle2Y = 300;
  //green
  circle3X = 300;
  circle3Y = 100;
  circle4X = 450;
  circle4Y = 300;
  //yellow
  circle5X = 450;
  circle5Y = 100;
  circle6X = 75;
  circle6Y = 200;
  //orange
  circle7X = 225;
  circle7Y = 200;
  circle8X = 525;
  circle8Y = 200;
  //purple
  circle9X = 375;
  circle9Y = 200;
  circle10X = 150;
  circle10Y = 300;

}

// BUG: dragging multiple shapes at one time, buggy.
// SOLVE: set cX, cY in the mousePressed then updating the circles in Drag.
function mousePressed() {
  /******DRAGGING SHAPES LOGIC***********/
  if (dist(circle1X, circle1Y, mouseX, mouseY) < (diameter / 2)) {
    fill(255, 0, 0);
    c1 = true;
  } else if (dist(circle2X, circle2Y, mouseX, mouseY) < (diameter / 2)) {
    fill(255, 0, 0);
    c2 = true;
  } else if (dist(circle3X, circle3Y, mouseX, mouseY) < (diameter / 2)) {
    fill(0, 255, 0);
    c3 = true;
  } else if (dist(circle4X, circle4Y, mouseX, mouseY) < (diameter / 2)) {
    fill(0, 255, 0);
    c4 = true;
  } else if (dist(circle5X, circle5Y, mouseX, mouseY) < (diameter / 2)) {
    fill(255, 255, 0);
    c5 = true;
  } else if (dist(circle6X, circle6Y, mouseX, mouseY) < (diameter / 2)) {
    fill(255, 255, 0);
    c6 = true;
  } else if (dist(circle7X, circle7Y, mouseX, mouseY) < (diameter / 2)) {
    fill(255, 150, 0);
    c7 = true;
  } else if (dist(circle8X, circle8Y, mouseX, mouseY) < (diameter / 2)) {
    fill(255, 150, 0);
    c8 = true;
  } else if (dist(circle9X, circle9Y, mouseX, mouseY) < (diameter / 2)) {
    fill(255, 0, 255);
    c9 = true;
  } else if (dist(circle10X, circle10Y, mouseX, mouseY) < (diameter / 2)) {
    fill(255, 0, 255);
    c10 = true;
  }

}

function mouseDragged() {
  /******DRAGGING SHAPES LOGIC***********/
  if (c1) {
    fill(255, 0, 0);
    circle1X = mouseX;
    circle1Y = mouseY;
  } else if (c2) {
    fill(255, 0, 0);
    circle2X = mouseX;
    circle2Y = mouseY;
  } else if (c3) {
    fill(0, 255, 0);
    circle3X = mouseX;
    circle3Y = mouseY;
  } else if (c4) {
    fill(0, 255, 0);
    circle4X = mouseX;
    circle4Y = mouseY;
  } else if (c5) {
    fill(255, 255, 0);
    circle5X = mouseX;
    circle5Y = mouseY;
  } else if (c6) {
    fill(255, 255, 0);
    circle6X = mouseX;
    circle6Y = mouseY;
  } else if (c7) {
    fill(255, 150, 0);
    circle7X = mouseX;
    circle7Y = mouseY;
  } else if (c8) {
    fill(255, 150, 0);
    circle8X = mouseX;
    circle8Y = mouseY;
  } else if (c9) {
    fill(255, 0, 255);
    circle9X = mouseX;
    circle9Y = mouseY;
  } else if (c10) {
    fill(255, 0, 255);
    circle10X = mouseX;
    circle10Y = mouseY;
  }
}

// on release, stop dragging shapes
function mouseReleased() {
  c1 = false, c2 = false, c3 = false, c4 = false, c5 = false, c6 = false, c7 = false, c8 = false, c9 = false, c10 = false;

  // menu if statement
  if (inside(menu, new Point(mouseX, mouseY)))
    window.open("https://editor.p5js.org/mmmathe4/present/Z4o3DdYJ-");
  
  // restart Btn
  if(inside(restartBtn, new Point(mouseX, mouseY))) {
    song.stop();
    setup();
  }
}

function draw() {
  background(50, 175, 255);
  let t = frameCount / 60;
  noStroke();
  //red
  fill(255, 0, 0);
  Circle1 = circle(circle1X, circle1Y, diameter);
  Circle2 = circle(circle2X, circle2Y, diameter);

  //green
  fill(0, 255, 0);
  Circle3 = circle(circle3X, circle3Y, diameter);
  Circle4 = circle(circle4X, circle4Y, diameter);

  //yellow
  fill(255, 255, 0);
  circle(circle5X, circle5Y, diameter);
  circle(circle6X, circle6Y, diameter);

  //orange
  fill(255, 150, 0);
  circle(circle7X, circle7Y, diameter);
  circle(circle8X, circle8Y, diameter);

  //purple
  fill(255, 0, 255);
  circle(circle9X, circle9Y, diameter);
  circle(circle10X, circle10Y, diameter);

  /************COLLISION LOGIC*************/
  var d = dist(circle1X, circle1Y, circle2X, circle2Y);
  if (d < diameter) {
    fill(50, 175, 255);
    circle(circle1X, circle1Y, diameter + 3);
    circle(circle2X, circle2Y, diameter + 3);
    cRed = true;
  }

  d = dist(circle3X, circle3Y, circle4X, circle4Y);
  if (d < diameter) {
    fill(50, 175, 255);
    circle(circle3X, circle3Y, diameter + 3);
    circle(circle4X, circle4Y, diameter) + 3;
    cGreen = true;
  }

  var d = dist(circle5X, circle5Y, circle6X, circle6Y);
  if (d < diameter) {
    fill(50, 175, 255);
    circle(circle5X, circle5Y, diameter + 3);
    circle(circle6X, circle6Y, diameter + 3);
    cYellow = true;
  }

  var d = dist(circle7X, circle7Y, circle8X, circle8Y);
  if (d < diameter) {
    fill(50, 175, 255);
    circle(circle7X, circle7Y, diameter + 3);
    circle(circle8X, circle8Y, diameter + 3);
    cOrange = true;
  }

  var d = dist(circle9X, circle9Y, circle10X, circle10Y);
  if (d < diameter) {
    fill(50, 175, 255);
    circle(circle9X, circle9Y, diameter + 3);
    circle(circle10X, circle10Y, diameter + 3);
    cPink = true;
  }
  //timer
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  textSize(50);
  text(timer, width / 2, height / 2);
  // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
  if ((frameCount % 60 == 0 && timer > 0) &&
    !(cRed && cGreen && cYellow && cOrange && cPink)
  ) {
    timer--;
  }
  if (timer == 0) {
    text("GAME OVER", width / 2, height * 0.7);
  }
  if (cRed && cGreen && cYellow && cOrange && cPink) {
    //confetti
    for (let i = 0; i < random(5); i++) {
      confetti.push(new Confetti());
    }
    for (let flake of confetti) {
      flake.update(t);
      flake.display();
    }
    fill(255, 255, 255);
    text('Good Job!', 300, 300);
  }
  fill(255, 255, 255);
  textSize(25);
  text('Connect the dots of the same color together!', 300, 20);

  // draw menu button
  //https://editor.p5js.org/mmmathe4/present/Z4o3DdYJ-
  menu = new Obstacle(600 - 101, 400 - 51);
  menu.clr = 'grey';
  menu.show();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text("Menu", 550, 380);

  //draw restart button
  restartBtn = new Obstacle(0, 350);
  restartBtn.clr = 'grey';
  restartBtn.show();
  //rect(0, 350, 100, 50);
  fill(255);
  textAlign(CENTER);
  text('Restart', 50, 380);
}

function Confetti() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size confetti fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete confetti if past end of screen
    if (this.posY > height) {
      let index = confetti.indexOf(this);
      confetti.splice(index, 1);
    }
  };

  this.display = function() {
    fill(150, 0, 255);
    ellipse(this.posX, this.posY, this.size);
  };
}

/***********************big line*******************/
function inside(ox, point) {
  // if the object's x coordinate < mouse or the point x coordiante
  // and point is less than x coord + width,
  return (ox.x < point.x && ox.x + ox.width > point.x) &&
    (ox.y < point.y && ox.y + ox.height > point.y);
}

class Obstacle {
  constructor(x, y, w = 100, h = 50, cr = "blue") {
    this.x = x;
    this.y = y;
    this.c = color(cr);
    this.width = w;
    this.height = h;
    this.show();
  }
  // get color
  get clr() {
    return this.c;
  }
  // change the color
  set clr(cd) {
    this.c = color(cd);
    this.show();
  }
  // display the change.
  show() {
    fill(this.c);
    rect(this.x, this.y, this.width, this.height);
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
