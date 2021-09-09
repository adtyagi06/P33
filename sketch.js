var backgroundImg;
var snowman;




function preload(){
  backgroundImg=loadImage("snow3.jpg")
  snowmanImage=loadImage("snowman.png")


}

function setup() {
  createCanvas(1000,600);
  
 snowman=createSprite(400, 200, 50, 50);
 snowman.addImage(snowmanImage)

 snowman.velocityX=3;
 edges=createEdgeSprites()
 


}

function draw() {
  background(backgroundImg );  
  drawSprites();
  snowman.bounceOff(edges)
}
