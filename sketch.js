var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

}

function draw() {
  background(255,255,255);  
  movingRect.x=world.mousex;
  movingRect.y=world.mousey;
  drawSprites();
}