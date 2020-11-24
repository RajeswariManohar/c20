var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200, 200, 100, 50);
  fixedRect=createSprite(100, 250, 50, 100);
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)
  {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  drawSprites();
}