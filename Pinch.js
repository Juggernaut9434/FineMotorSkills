//red
let circle1X = 150;
let circle1Y = 100;
let circle2X = 300;
let circle2Y = 300;
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
let diameter = 45;

function setup() {
  song = loadSound()
  createCanvas(600, 400);
}
function mouseDragged(){
  if (dist(circle1X,circle1Y,mouseX,mouseY) < (diameter/2) ) { 
  fill(255,0,0);
    circle1X = mouseX;
    circle1Y = mouseY;
  }
  else if (dist(circle2X,circle2Y,mouseX,mouseY) < (diameter/2) ) { 
  fill(255,0,0);
    circle2X = mouseX;
    circle2Y = mouseY;
  }
  else if (dist(circle3X,circle3Y,mouseX,mouseY) < (diameter/2) ) { 
  fill(0,255,0);
    circle3X = mouseX;
    circle3Y = mouseY;
  }
  else if (dist(circle4X,circle4Y,mouseX,mouseY) < (diameter/2) ) { 
  fill(0,255,0);
    circle4X = mouseX;
    circle4Y = mouseY;
  }
  
  else if (dist(circle5X,circle5Y,mouseX,mouseY) < (diameter/2) ) { 
  fill(255,255,0);
    circle5X = mouseX;
    circle5Y = mouseY;
  }
  else if (dist(circle6X,circle6Y,mouseX,mouseY) < (diameter/2) ) { 
  fill(255,255,0);
    circle6X = mouseX;
    circle6Y = mouseY;
  }
  else if (dist(circle7X,circle7Y,mouseX,mouseY) < (diameter/2) ) { 
  fill(255,150,0);
    circle7X = mouseX;
    circle7Y = mouseY;
  }
  else if (dist(circle8X,circle8Y,mouseX,mouseY) < (diameter/2) ) { 
  fill(255,150,0);
    circle8X = mouseX;
    circle8Y = mouseY;
  }
  else if (dist(circle9X,circle9Y,mouseX,mouseY) < (diameter/2) ) { 
  fill(255,0,255);
    circle9X = mouseX;
    circle9Y = mouseY;
  }
  else if (dist(circle10X,circle10Y,mouseX,mouseY) < (diameter/2) ) { 
  fill(255,0,255);
    circle10X = mouseX;
    circle10Y = mouseY;
  }
  
}
function draw() {
  background(50,175,255);
  noStroke();
  //red
  fill(255,0,0);
  Circle1 = circle(circle1X, circle1Y, diameter);
  Circle2 = circle(circle2X, circle2Y, diameter);
  
  //green
  fill(0,255,0);
  Circle3 = circle(circle3X, circle3Y, diameter);
  Circle4 = circle(circle4X, circle4Y, diameter);
  
  //yellow
  fill(255,255,0);
  circle(circle5X, circle5Y, diameter);
  circle(circle6X, circle6Y, diameter);
  
  //orange
  fill(255,150,0);
  circle(circle7X, circle7Y, diameter);
  circle(circle8X, circle8Y, diameter);
  
  //purple
  fill(255,0,255);
  circle(circle9X, circle9Y, diameter);
  circle(circle10X, circle10Y, diameter);
  
  
  var d = dist(circle1X, circle1Y, circle2X, circle2Y);
  if (d < diameter){
    fill(50,175,255);
    circle(circle1X, circle1Y, diameter);
    circle(circle2X, circle2Y, diameter);
  }
  
  var d = dist(circle3X, circle3Y, circle4X, circle4Y);
  if (d < diameter){
    fill(50,175,255);
    circle(circle3X, circle3Y, diameter);
    circle(circle4X, circle4Y, diameter);
  }
  
  var d = dist(circle5X, circle5Y, circle6X, circle6Y);
  if (d < diameter){
    fill(50,175,255);
    circle(circle5X, circle5Y, diameter);
    circle(circle6X, circle6Y, diameter);
  }
  
  var d = dist(circle7X, circle7Y, circle8X, circle8Y);
  if (d < diameter){
    fill(50,175,255);
    circle(circle7X, circle7Y, diameter);
    circle(circle8X, circle8Y, diameter);
  }
  
  var d = dist(circle9X, circle9Y, circle10X, circle10Y);
  if (d < diameter){
    fill(50,175,255);
    circle(circle9X, circle9Y, diameter);
    circle(circle10X, circle10Y, diameter);
  }
}
