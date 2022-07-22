var backgroundImg
var bp1,bp2,bp3
var mp1, mp2, mp3
var tp1,tp2, tp3

function preload(){
  backgroundImg = loadImage("Background.jpeg");
  bp1= loadImage("botton piece 1.jpeg");
  bp2= loadImage("bottom piece 2.jpeg");
  bp3= loadImage("bottom piece 3.jpeg");

  mp1= loadImage("Middle piece 1.jpeg");
  mp2= loadImage("Middle Piece 2.jpeg");
  mp3= loadImage("middle piece 3.jpeg");

  tp1= loadImage("top peice 1.jpeg");
  tp2= loadImage("top piece 2.jpeg");
  tp3= loadImage("top piece 3.jpeg");
}




function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(130,200,200,200);
  createSprite(350,200,200,200);
  createSprite(570,200,200,200);
  createSprite(130,410,200,200);
  createSprite(350,410,200,200);
  createSprite(570,410,200,200);
  createSprite(130,620,200,200);
  createSprite(350,620,200,200);
  createSprite(570,620,200,200);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}