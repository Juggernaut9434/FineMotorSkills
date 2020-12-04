// Fine Motor Skills Lab for ASU's FSE 100
// October 2020
// An exercise where the user draws a straight line
// from one side of the screen to the other using
// a mouse or finger

// brief instructions in the canvas
// gamify this game.  - score / timer. ratio between correct / wrong. 

let song;
let scoreG;
let endGame;
let startX, startY, finishX, finishY; // drawing the line variables
let o1, o2; // object variables for shapes, TODO move to 
let menu;

let right = 0, wrong = 1;
let streak = 0;

function preload() {
  // song.volume(float) // between 0.0 & 1.0
  song = createAudio("asset/Cool-Adventure-Intro.mp3");
  song.volume(0.5);
  // https://p5js.org/reference/#/p5.SoundFile 
  // song From https://soundimage.org/action/
}

/***************************************************
 * SETUP is called once at the beginning
 ***************************************************/
function setup() {
  createCanvas(600, 400); // always have the same canvas of 600x400
  song.volume(0.1)
  song.play();    // play the song
  background("pink");
  // randomly set the locations of the two boxes
  let minX = 20,maxX = 450, minY = 75, maxY = 325;
  o1 = new Obstacle(random(minX, maxX / 2 - 50), random(minY, maxY));
  o2 = new Obstacle(random(maxX / 2 + 50, maxX), random(minY, maxY));
  // draw dashed line
  stroke(0);
  fill(0);
  strokeWeight(1);
  linedash(o1.x + o1.width / 2, o1.y + o1.height / 2,
    o2.x + o2.width / 2, o2.y + o2.height / 2, 10);
  
  // score
  score();
}

/***************************************************
 * DRAW is called continually, looping onto the canvas
 ***************************************************/
function draw() {
  // if game is over
  if(endGame) {
    fill("green");
    textSize(30);
    textAlign(CENTER);
    text("YOU WON!", 300, 200);
    // draw menu button
    //https://editor.p5js.org/mmmathe4/present/Z4o3DdYJ-
    menu = new Obstacle(600-101, 400-51);
    menu.clr = 'grey'; menu.show();
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text("Menu", 550, 390);
    return null;
  }
  // draw a dashed line
  fill(0);
  textSize(30);
  linedash(o1.x + o1.width / 2, o1.y + o1.height / 2,
    o2.x + o2.width / 2, o2.y + o2.height / 2, 10);
  
  // draw menu button
  //https://editor.p5js.org/mmmathe4/present/Z4o3DdYJ-
  menu = new Obstacle(600-101, 400-51);
  menu.clr = 'grey'; menu.show();
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text("Menu", 550, 390);
  textAlign(LEFT);
  // Add Instructions in the top right
  textSize(20);
  strokeWeight(0);
  stroke(0);
  fill(0);
  text("Draw line from one square to the other. 20 to win",
       25, 25, 150, 150);
}

/***************************************************
 * User ACTIONS called when action is activated, pressing mouse etc.
 ***************************************************/
function mousePressed() {
  if(endGame) return;
  // log the initial point
  start = new Point(mouseX, mouseY);
}

function mouseDragged() {
  if(endGame) return;
  // redraw the beginning
  // to prevent multiple lines drawn at once
  background("pink");
  o1.show();
  o2.show();
  
  // log the end point
  finish = new Point(mouseX, mouseY);
  
  //draw the line
  stroke(0);
  strokeWeight(10);
  line(start.x, start.y, finish.x, finish.y);
  
  // draw the dashed line
  fill(0);
  strokeWeight(1);
  linedash(o1.x + o1.width / 2, o1.y + o1.height / 2,
    o2.x + o2.width / 2, o2.y + o2.height / 2, 10);
  noStroke();
  strokeWeight(10);
  fill(0);
}

function mouseReleased() {
  // menu if statement
  if(inside(menu, new Point(mouseX, mouseY)))
  window.open("https://editor.p5js.org/mmmathe4/present/Z4o3DdYJ-");
  if(endGame) return;
  // if line is inside boxes
  if ((inside(o1, start) && inside(o2, finish)) ||
    (inside(o1, finish) && inside(o2, start))) {
    // draw the smile face
    fill(0); // color of smiley face
    textSize(30);
    text(":)", 250, 80);
    noStroke();
    // change boxes color to green
    o1.clr = "green";
    o2.clr = "green";
    // wait a few seconds and redo game
    setTimeout(() => {
      setup();
    }, 500);
    right++;
    streak++;
  } else {
    wrong++;
    streak=0;
    // redraw the beginning
    // to prevent multiple lines drawn at once
    background("pink");
    o1.show();
    o2.show();
    // draw the line
    stroke(0);
    fill(0);
    strokeWeight(1);
    linedash(o1.x + o1.width / 2, o1.y + o1.height / 2,
      o2.x + o2.width / 2, o2.y + o2.height / 2, 10);
    noStroke();
    strokeWeight(10);
    // show x;
    fill(255, 0, 0)
    textSize(30);
    text("X", 250, 80);
  }
  score();
}
/*************Helper**Functions**********************/

// draw score
function score() {
  if(streak >= 3 && wrong >= 3)
    wrong -= 2;
  if(streak >= 5)
    right++;
  // score
  scoreG = round(right/wrong, 2);
  if(scoreG >= 20) {
    endGame = true;
    return null;
  }
  fill(0);  // change color of the text
  strokeWeight(1);
  textSize(20);    //change the size of the text
  text("Score ", 425, 50);
  text(scoreG, 500, 50);
  console.log(right, wrong, streak);
  // add text for "get 5 right, get 3 points instead of 1"
  // instead of X, put a red :( 
}

/*
 * return true if point is inside rectangle
 * ox is an Obstacle, point is a Point
 */
function inside(ox, point) {
  // if the object's x coordinate < mouse or the point x coordiante
  // and point is less than x coord + width,
  return (ox.x < point.x && ox.x + ox.width > point.x) &&
    (ox.y < point.y && ox.y + ox.height > point.y);
}

function linedash(x1, y1, x2, y2, delta = 1) {
  if(endGame) return;
  // delta is both the length of a dash, the distance
  // between 2 dots/dashes, and the diameter of a round
  fill(255);
  let distance = dist(x1, y1, x2, y2);
  let dashNumber = distance / delta;
  let xDelta = (x2 - x1) / dashNumber;
  let yDelta = (y2 - y1) / dashNumber;

  for (let i = 0; i < dashNumber; i += 2) {
    let xi1 = i * xDelta + x1;
    let yi1 = i * yDelta + y1;
    let xi2 = (i + 1) * xDelta + x1;
    let yi2 = (i + 1) * yDelta + y1;
    line(xi1, yi1, xi2, yi2);
  }
}

// display error message
function errorMsg(name, debug = 0) {
  console.log("Something Went Wrong:", name, "\tgame", game);
  if (debug != 0) {
    background(255);
    fill(255, 0, 0);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Something Went Wrong", name, 300, 200);
  }
}

/*************Classes*****************************/
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

//end