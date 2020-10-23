// Fine Motor Skills Lab for ASU's FSE 100
// October 2020
// An exercise where the user draws a straight line
// from one side of the screen to the other using
// a mouse or finger

var startX, startY, finishX, finishY;

function setup() {
  createCanvas(600, 400);
  background("pink");
  
  drawRects("red");
}

function draw() {
}

function drawRects(color="red") {
  // middle box
  fill(255,255,255,0);
  rect(150, 175, 300, 50);
  //two red boxes
  fill(color);
  rect(50, 400/2 - 25, 100, 50);
  rect(450, 400/2 - 25, 100, 50);
  //add text to the red boxes
  fill("black");
  textSize(30);
  text("Start", 50+15, height/2+10);
  text("Finish", 450+10, height/2+10);
}

function mousePressed() { 
  startX = mouseX;
  startY = mouseY;
}
function mouseDragged() {
  setup();
  finishX = mouseX;
  finishY = mouseY;
  strokeWeight(10);
  stroke(0);
  line(startX, startY, finishX, finishY);
  noStroke();
}
function mouseReleased() {
  if(startY < 180 || startY > 230
     || finishY < 180 || finishY > 230)
    {
      setup();
      strokeWeight(300);
      text("X", 250, 80);
    }
  else{
    strokeWeight(300);
    text(":)", 250, 80);
    noStroke();
    drawRects("green");
  }
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

//end
