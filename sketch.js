var fixedrec,movingrec;
var fixedrec1,movingrec1;

function setup() {
  createCanvas(600,600);
  fixedrec=createSprite(200,200,50,80);
  fixedrec.shapeColor="green";
  movingrec=createSprite(400,200,80,30);
  movingrec.shapeColor="green";

  fixedrec1=createSprite(50,400,50,80);
  fixedrec1.shapeColor="green";
  fixedrec1.velocityX=5;
  movingrec1=createSprite(550,400,80,30);
  movingrec1.shapeColor="green";
  movingrec1.velocityX=-5;

}

function draw()
{
  background(0);
  movingrec.x=World.mouseX;
  movingrec.y=World.mouseY;

if(isTouching(movingrec,fixedrec1)){
  movingrec.shapeColor="red";
  fixedrec1.shapeColor="red";

}
else
{
  movingrec.shapeColor="green";
  fixedrec1.shapeColor="green";
}


  bounceOff(fixedrec1,movingrec
    
    
    ); 
  


  drawSprites();
}
