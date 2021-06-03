var fixedRect, movingRect;
var movingRect2
var movingRect3
var fixedRect2
var fixedRect3
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  movingRect2 = createSprite(0,100,80,30);
  movingRect2.shapeColor = "white";
  movingRect2.debug = true;
  movingRect2.velocityX=5;
  movingRect3 = createSprite(1200,100,80,30);
  movingRect3.shapeColor = "brown";
  movingRect3.debug = true;
  movingRect3.velocityX=-5;
  fixedRect2 = createSprite(400, 400, 50, 80);
  fixedRect2.shapeColor = "red";
  fixedRect2.debug = true;
  fixedRect3 = createSprite(800, 400, 50, 80);
  fixedRect3.shapeColor = "red";
  fixedRect3.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(fixedRect3,movingRect)) {
  movingRect.shapeColor = "lime";
  fixedRect3.shapeColor = "lime";
}else{
  movingRect.shapeColor = "blue";
  fixedRect3.shapeColor = "red";  
}

  
bounceOff(movingRect2,movingRect3);


  drawSprites();
}

