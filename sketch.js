var cat
var catImage1,catImage3,catImage2 
var bgImage
var garden
var mouse, mouseImage1, mouseImage2, mouseImage2

function preload() {
    bgImage = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");

    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    cat = createSprite(870,600);
    cat.addAnimation("catSitting",catImg1);
    cat.scale = 0.2;
    
    mouse = createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale  = 0.15;
}
function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastly", catImg3);
        cat.x =400;
        cat.changeAnimation("catLastly");

        mouse.addAnimation("mouseLastly", mouseImg3);
        mouse.changeAnimation("mouseLastly");
    }  

    drawSprites();
}



function keyPressed(){

    //For moving and changing animation write code here
  
  
      if(keyCode === LEFT_ARROW){
          cat.position.x = cat.position.x -200; 
          cat.addAnimation("catRunnine", catImg2);
          cat.changeAnimation("catRunnine");
          
          mouse.addAnimation("mouseT", mouseImg2);
          mouse.changeAnimation("mouseT");
  
  
      }
  
    }