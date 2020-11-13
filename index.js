// Fine Motor Skills Lab for ASU's FSE 100
// October 2020
// An exercise where the user draws a straight line
// from one side of the screen to the other using
// a mouse or finger

// MIKE TODO: fix the draw line color

/***************************************************
****************GLOBACL_VARIABLES*******************
****************************************************/
let game = 3;		// start with menu ( 0 )
/***********MENU*VARS******************************/
/***********DRAG*AND*DROP*VARS*********************/
/***********PINCH*SHAPES*VARS**********************/
/**********START*TO*FINISH*VARS********************/
let song;
let startX, startY, finishX, finishY;   // drawing the line variables
let o1, o2;                             // object variables for shapes, TODO move to 
let step = 0;


function preload() {
	switch(game){
    // menu 
    case 0:
      {

      }
      break;
    // Drag and Drop
    case 1:
      {

      }
      break;
    // Pinch Shapes
    case 2:
      {

      }
      break;
    // Start to Finish
    case 3:
      {
				song = loadSound("asset/Cool-Adventure-Intro.mp3");
				// https://p5js.org/reference/#/p5.SoundFile 
				// song From https://soundimage.org/action/
      }
      break;
    // something went wrong
    default:
      errorMsg("preload");
      return;
  }
}

/***************************************************
 * SETUP is called once at the beginning
 ***************************************************/
function setup() {
  createCanvas(600, 400);   // always have the same canvas of 600x400
  // depending on the type of game we do, change setup
  switch(game){
    // menu 
    case 0:
      {

      }
      break;
    // Drag and Drop
    case 1:
      {

      }
      break;
    // Pinch Shapes
    case 2:
      {

      }
      break;
    // Start to Finish
    case 3:
      {
        setupStartFinish();
      }
      break;
    // something went wrong
    default:
      errorMsg("setup");
      return;
  }
}

function setupStartFinish() {
  //song.play();    // play the song
  // different levels of StartFinish game
  switch (step) {
    // LEVEL 1
    case 0:
      {
        background("pink");
        // randomly set the locations of the two boxes
        let minX = 20, maxX = 450, minY = 20, maxY = 350;
        o1 = new Obstacle(random(minX,maxX/2-50), random(minY, maxY));
        o2 = new Obstacle(random(maxX/2+50,maxX), random(minY, maxY));
      }
      break;
    // ERROR HAPPENED
    default:
      errorMsg("setupStartFinish");
      return;
  }
}

/***************************************************
 * DRAW is called continually, looping onto the canvas
 ***************************************************/
function draw() {
  // different games have different draw functions
  switch(game)
  {
    // menu
    case 0:
      {

      }
      break;
    // Drag and Drop
    case 1:
      {

      }
      break;
    // Pinch Shapes
    case 2: 
      {

      }
      break;
    // Start to Finish
    case 3:
      {
        drawStartToFinish();
      }
      break;
    // ERROR MESSAGE
    default:
      errorMsg("draw");
      return;
  }
}

function drawStartToFinish()
{
  // draw a dashed line
  fill(0);
  textSize(30);
  linedash( o1.x+o1.width/2, o1.y+o1.height/2, 
            o2.x+o2.width/2, o2.y+o2.height/2, 10);
}

/***************************************************
 * User ACTIONS called when action is activated, pressing mouse etc.
 ***************************************************/
function mousePressed() {
  switch(game)
  {
    // menu
    case 0:
      {

      }
      break;
    // Drag and Drop
    case 1:
      {

      }
      break;
    // Pinch Shapes
    case 2: 
      {

      }
      break;
    // Start to Finish
    case 3:
      {
        // log the initial point
        start = new Point(mouseX, mouseY);
      }
      break;
    // ERROR MESSAGE
    default:
      errorMsg("mousePressed");
      return;
  }
}

function mouseDragged() {
	switch(game)
  {
    // menu
    case 0:
      {

      }
      break;
    // Drag and Drop
    case 1:
      {

      }
      break;
    // Pinch Shapes
    case 2: 
      {

      }
      break;
    // Start to Finish
    case 3:
      {
        // redraw the beginning
		// to prevent multiple lines drawn at once
		background("pink");
		o1.show(); o2.show();
		// log the end point
        finish = new Point(mouseX, mouseY);
        //draw the line
        stroke(0);
        line(start.x, start.y, finish.x, finish.y);
				// draw the dashed line
        fill(0);
        strokeWeight(1);
        linedash( o1.x+o1.width/2, o1.y+o1.height/2, 
        o2.x+o2.width/2, o2.y+o2.height/2, 10);
				noStroke();
        strokeWeight(10);
        fill(0);
      }
      break;
    // ERROR MESSAGE
    default:
      errorMsg("mouseDragged");
      return;
  }
}

function mouseReleased() {
  switch(game)
  {
    // menu
    case 0:
      {

      }
      break;
    // Drag and Drop
    case 1:
      {

      }
      break;
    // Pinch Shapes
    case 2: 
      {

      }
      break;
    // Start to Finish
    case 3:
      {
        STFmouseReleased();
      }
      break;
    // ERROR MESSAGE
    default:
      errorMsg("MouseReleased");
      return;
  }
}

function STFmouseReleased() {
	switch (step) {
    case 0:
      // if line is inside boxes
			if ((inside(o1, start) && inside(o2, finish))
				|| (inside(o1, finish) && inside(o2, start)) ) {
        // draw the smile face
        fill(0);
        textSize(30);
        text(":)", 250, 80);
        noStroke();
        // change boxes color to green
        o1.clr = "green";
        o2.clr = "green";
        return;
      } else {

        // redraw the beginning
				// to prevent multiple lines drawn at once
				background("pink");
				o1.show(); o2.show();
				// draw the line
				stroke(0);
        fill(0);
        strokeWeight(1);
        linedash( o1.x+o1.width/2, o1.y+o1.height/2, 
        o2.x+o2.width/2, o2.y+o2.height/2, 10);
				noStroke();
        strokeWeight(10);
        // show x;
        fill(255,0,0)
        textSize(30);
        text("X", 250, 80);
      }
      break;
    default:
      errorMsg("mouseReleased", 1);
  }
}

/*************Helper**Functions**********************/

/*
 * return true if point is inside rectangle
 */
function inside(ox, point) {
	// if the object's x coordinate < mouse or the point x coordiante
	// and point is less than x coord + width,
  return (ox.x < point.x && ox.x + ox.width > point.x) &&
    (ox.y < point.y && ox.y + ox.height > point.y);
}

function linedash(x1, y1, x2, y2, delta = 1) {
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
function errorMsg(name, debug=0) {
	console.log("Something Went Wrong:", name, "\tgame", game);
	if(debug!=0)
	{
		background(255);
		fill(255,0,0);
		textSize(50);
		textAlign(CENTER, CENTER);
		text("Something Went Wrong", name, 300, 200);
	}
}

/*************Classes*****************************/
class Obstacle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.c = color("blue");
    this.width = 100;
    this.height = 50;
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
