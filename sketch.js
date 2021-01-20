var fixedRectangle,movingRectangle;


function setup() {
  createCanvas(1200,800);
  fixedRectangle=createSprite(600, 400, 50, 80);
  fixedRectangle.shapeColor="cyan";
  fixedRectangle.debug=true;

  movingRectangle=createSprite(800,400,80,30);
  movingRectangle.shapeColor="cyan";
  movingRectangle.debug=true;

  movingRectangle.velocityX=- 5;
  fixedRectangle.velocityX= +5;
}

function draw() {
  background(0,0,0); 

  
  bounceOff(movingRectangle,fixedRectangle);
  drawSprites();
}

