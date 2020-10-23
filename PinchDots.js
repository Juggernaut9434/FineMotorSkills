let circle1X = 150;
let circle1Y = 100;
let circle2X = 300;
let circle2Y = 300;
let circle3X = 300;
let circle3Y = 100;
let circle4X = 450;
let circle4Y = 300;
let circle5X = 450;
let circle5Y = 100;
let circle6X = 75;
let circle6Y = 200;
let circle7X = 225;
let circle7Y = 200;
let circle8X = 525;
let circle8Y = 200;
let circle9X = 375;
let circle9Y = 200;
let circle10X = 150;
let circle10Y = 300;
let diameter = 45;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50,175,255);
   
  if (dist(circle1X,circle1Y,mouseX,mouseY) < (diameter/2) && mouseIsPressed) { 
  fill(255,0,0);
    circle1X = mouseX;
    circle1Y = mouseY;
  }
   if (dist(circle2X,circle2Y,mouseX,mouseY) < (diameter/2) && mouseIsPressed) { 
  fill(255,0,0);
    circle2X = mouseX;
    circle2Y = mouseY;
  }
    if (dist(circle3X,circle3Y,mouseX,mouseY) < (diameter/2) && mouseIsPressed) { 
  fill(0,255,0);
    circle3X = mouseX;
    circle3Y = mouseY;
  }
   if (dist(circle4X,circle4Y,mouseX,mouseY) < (diameter/2) && mouseIsPressed) { 
  fill(0,255,0);
    circle4X = mouseX;
    circle4Y = mouseY;
  }
   if (dist(circle5X,circle5Y,mouseX,mouseY) < (diameter/2) && mouseIsPressed) { 
  fill(255,255,0);
    circle5X = mouseX;
    circle5Y = mouseY;
  }
  if (dist(circle6X,circle6Y,mouseX,mouseY) < (diameter/2) && mouseIsPressed) { 
  fill(255,255,0);
    circle6X = mouseX;
    circle6Y = mouseY;
  }
   if (dist(circle7X,circle7Y,mouseX,mouseY) < (diameter/2) && mouseIsPressed) { 
  fill(255,150,0);
    circle7X = mouseX;
    circle7Y = mouseY;
  }
   if (dist(circle8X,circle8Y,mouseX,mouseY) < (diameter/2) && mouseIsPressed) { 
  fill(255,150,0);
    circle8X = mouseX;
    circle8Y = mouseY;
  }
  if (dist(circle9X,circle9Y,mouseX,mouseY) < (diameter/2) && mouseIsPressed) { 
  fill(255,0,255);
    circle9X = mouseX;
    circle9Y = mouseY;
  }
   if (dist(circle10X,circle10Y,mouseX,mouseY) < (diameter/2) && mouseIsPressed) { 
  fill(255,0,255);
    circle10X = mouseX;
    circle10Y = mouseY;
  }
  
  fill(255,0,0);
  ellipse(circle1X, circle1Y, diameter, diameter);
  ellipse(circle2X, circle2Y, diameter, diameter);
  
  fill(0,255,0);
  ellipse(circle3X, circle3Y, diameter, diameter);
  ellipse(circle4X, circle4Y, diameter, diameter);
  
  fill(255,255,0);
  ellipse(circle5X, circle5Y, diameter, diameter);
  ellipse(circle6X, circle6Y, diameter, diameter);
  
  fill(255,150,0);
  ellipse(circle7X, circle7Y, diameter, diameter);
  ellipse(circle8X, circle8Y, diameter, diameter);
  
  fill(255,0,255);
  ellipse(circle9X, circle9Y, diameter, diameter);
  ellipse(circle10X, circle10Y, diameter, diameter);
}
