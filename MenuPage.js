// set variables
let CANVASX = 600;
let CANVASY = 400;

function setup() {
  // create base background and canvas
  createCanvas(CANVASX, CANVASY);
  background(200);
  
  // title
  let titleText = "Games";
  let description = "Click the game you want to play!";
  textSize(32);
  text(titleText, 250, 50);
  text(description, 75, 125);
  
  // three different rounded rectangles
  // showing the activity for each
  let actX = 150;
  let actY = 100;
  rect(80, 150, actX, actY, 20);
  rect(250, 150, actX, actY, 20);
  rect(420, 150, actX, actY, 20);
  
  // to be gear box
  text("Menu", 500, 32);
}

function draw() {
  
}

function colorfulText(text) {
  // to implement
}
