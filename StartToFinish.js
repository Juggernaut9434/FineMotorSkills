// Fine Motor Skills Lab for ASU's FSE 100
// October 2020
// An exercise where the user draws a straight line
// from one side of the screen to the other using
// a mouse or finger

function setup() {
  createCanvas(600, 400);
  background("pink");
  fill("red");
  circle(100, 200, 50);
  circle(500, 200, 50);
}

function draw() {
  line(125, 200, 475, 200);
}
