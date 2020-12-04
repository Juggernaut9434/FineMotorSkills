//fix circle first no grab rec 
let grabbed=false;
let grabbedRectangle=false;
let grabbedSquare=false; //square being grabbed set as false
let shapeA;//Square x coordinate
let shapeB;//Square y coordinate
let shapeC;//circle
let timer=15;
let shapeD;//circle
let gameIsOver=0;

let c; 
let finished=0;
let no=0;
let score=0;

 
const radius=100;
const diamter=radius*2;
let placed=false;
let placedRect=false;
let placedSquare=false;
var song; //background music
var slider; //isnt in yet need to add

var sfx; //bell for correct awnswer 
var warning; //sound for 30 second warning
var isPlaying=false;
function preload() {
  song = loadSound("p5 music/song.mp3");
  sfx = loadSound("p5 music/sfx.mp3");
  //warning = loadSound("p5 music/warning.mp3");
  gameOver = loadSound("p5 music/gameOver.mp3");
  win = loadSound("p5 music/win.mp3");
}

function setup() {
  createCanvas(600, 400);
  circleX=100; //left circle
  circleY=100; //left circle
  shapeC=500; //right circle
  shapeD=100; //right circle
  rectC=55; //left rect(x)
  rectD=200 //left rect(y)
  shapeE=455; //right rect
  shapeF=200; //right rect
   shapeA=55;
 shapeB=300;
  shapeH=460;
  shapeI=300;
  //play background music
    
  c= color(0,200,0); //color is green
 slider = createSlider(0, 1, 0.2, 0.2);
slider.position(80, 10);
  if(isPlaying){
      song.stop();
      
   }
    else{
      song.play();
    }
  if(gameIsOver==1&&isPlaying){
    win.play();
 }
      
}


function draw() {
   
  background(255,255,255) //background color
    fill(200,200,200);  //right circle color 
  circle(shapeC,shapeD,radius); //right circle
  fill(200,0,0); //left circle color
  circle(circleX,circleY,radius); //left circle
  fill(200,0,200); //left rectangle color
  rect(rectC,rectD,100,75); //left rectangle
  fill(200,200,200); //right rect color
  rect(shapeE,shapeF,100,75); //right rect
  fill(0,200,200);
  rect(shapeA,shapeB,90,90);//left square
   fill(200,200,200);
  rect(shapeH,shapeI,90,90);
textSize(15);
    fill(200,0,200); //text color for instructions
    if(finished==0&&timer>0){text("Drag the shape on the left to the matching shape on the right!",100,175);}
  fill(100,100,10);  
  if(placed){
    textSize(30);
    fill(0,100,0);
    text("",200,200);
     fill(100,10,10);
    fill(0,200,0);  // right circle color change green
  circle(shapeC,shapeD,radius); //right circle
     
    if(finished==1){
  fill(255,204,0);   
  timer=10;
      textSize(75);
    fill(0,200,0);
      text("YOU WON!",50,200);
       fill(0,200,0);
  rect(shapeH,shapeI,90,90);
     gameIsOver=1;
      isPlaying=true;
    }
 
  
 
  }
  if(placedRect){
    textSize(30);
    fill(0,100,0);
    text("",400,200);
     fill(100,10,10);
     fill(0,200,0); //right rect color
  rect(shapeE,shapeF,100,75); //right rect
  }
   textSize(30);
    fill(c);
  
  text(timer, 50, 50);//printing the timer
     
  if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
  }
  if(timer<=5){
     c=color(200,0,0); //if under 30 change color
     }


  if (timer == 0) {//if timer=0 text displays game over
   textSize(75);
    fill(200,0,0);
      text("You Lost!",150,200);

   
 }
   
  
 if(no==0&&placed==false){
   textSize(30);
    fill(200,0,0);
    text("Drag the circle!",200,370);}
 if(no==1&&placed){
    textSize(30);
    fill(200,0,200);
    text("Drag the rectangle!",200,370);
    }
  if(no==2&&placedSquare==false) { 
    textSize(30);
    fill(0,200,200);
    text("Drag the Square!",200,370);}
   textSize(30);
    fill(0,200,0);
    text("Score:"+score,250,50);
  
  song.setVolume(slider.value()/2); 
  textSize(20);
  fill(100,100,100);
    text("Volume",10,25);
   sfx.setVolume(slider.value()/2); 
  textSize(20);
  fill(100,100,100);
    text("Volume",10,25);
    //warning.setVolume(slider.value()/2); 
  textSize(20);
  fill(100,100,100);
    text("Volume",10,25);
  win.setVolume(slider.value()/2); 
  textSize(20);
  fill(100,100,100);
    text("Volume",10,25);
}


function mousePressed(){
  let d= dist(circleX,circleY,mouseX,mouseY);
  let c= dist(rectC,rectD,mouseX,mouseY);
  let e = dist(shapeA,shapeB,mouseX,mouseY);
  if (d<radius && mouseIsPressed){
    grabbed=true;
  }
  else if(c<50){
    grabbedRectangle=true;
  }
  else if(e<100){
    grabbedSquare=true;
  }
 

    else{grabbed=false;}
  if (grabed=true&&placed!=true){
    grabbedRectangle=false
    no=1;
 }
  else if(placed&&placedRect){
          no=2;
          }
  else{
    grabbedRectangle=true
     no=0;
  }
  if(placed==false&&placedRect==false){
    grabbedSquare=false;
  }
    if(grabbedRectangle==true){
   grabbedSquare=false;
  }
  
}
function mouseRealeased(){grabbed=false;
                         grabbedRectangle=false;}



function mouseDragged(){
 
  if(grabbed)    
  {circleX= mouseX;
   circleY= mouseY;
  }
  else if(grabbedRectangle){
    rectC= mouseX;
    rectD= mouseY;
  }
  else if(grabbedSquare){
    shapeA=mouseX;
    shapeB=mouseY;
  }
  if (dist(mouseX,mouseY,shapeC,shapeD)<100&&grabbed){
    placed=true;
   sfx.play();
 
    grabbed=false;
   score=1;
    
  }
 
  
  
 
  
  else if(dist(rectC,rectD,shapeE,shapeF)<100&&grabbedRectangle){
    placedRect=true;
     
    sfx.play();
  grabbedRectangle=false;
    
    

  }
  else if(dist(shapeA,shapeB,shapeH,shapeI)<90&&grabbedSquare){
    placedSquare=true;
    grabbedSqaure=false;
    sfx.play();
  }
    
  if(placed==true && placedRect==true){
  finished=0;
 score=2;
    no=2;
}
  

  if(placedSquare==true){
    finished=1;
    score=3;
    mouseDragged=false;
  }
 
  if(finished==1){
   mouseDragged=false;
     win.play();
  }
if(timer==0){
  mouseDragged=false;
}
  
   


}
