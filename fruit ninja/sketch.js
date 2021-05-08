var sword,swordImg,swordMp3;
var score=0;
var fruit,fruit1,fruit2,fruit3,fruit4;
var alien,alien1,alien2;
var gameState="play" 
var gameover,gameoverImg,gameoverMp3;
var position=0;
function preload(){
  swordImg=loadImage("sword.png")
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
alien1=loadImage("alien1.png")
  alien2=loadImage("alien2.png")
gameoverImg=loadImage("gameover.png")
  gameoverMp3=loadSound("gameover.mp3")
  swordMp3=loadSound("knifeSwooshSound.mp3");
}
function setup(){
  createCanvas(600,600);
  sword=createSprite(50,50)
sword.addImage(swordImg)
  sword.debug=false
  sword.setCollider("circle",0,0,45)
  sword.scale=0.75
fruitGroup=new Group()
alienGroup=new Group()
}

function draw(){
  background("lightblue")
  textSize(20);
text("Score:"+score,300,25)
  if(gameState==="play"){
     sword.x=mouseX;
  sword.y=mouseY;
  spawnFruit();
 spawnAlien();
 if(sword.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
    score=score+2
   swordMp3.play();   
  }
    if(sword.isTouching(alienGroup)){
      gameState="end"
      gameover=createSprite(300,300   ,50,50)
      gameover.addImage("go",gameoverImg);
      gameoverMp3.play();
      fruitGroup.setVelocityXEach(0)
alienGroup.setVelocityXEach(0)
    fruitGroup.destroyEach();
      alienGroup.destroyEach();
    }   
  }
  
  if(sword.isTouching(alienGroup)){
    alienGroup.destroyEach();
    score=score-2
    gameState="end"
     
  }
  drawSprites();
}
function spawnFruit(){
  if(frameCount%80===0){
  fruit=createSprite(400,200,20,20)
    position=Math.round(random (1,2))
    if(position===1){
      fruit.x=500;
      fruit.velocityX=-(7+score/4);
    }
    else if(position===2){
      fruit.x=0
      fruit.velocityX=(7+score/4)
    }
    fruitGroup.add(fruit);
    fruit.lifetime=600;
fruit.y=Math.round(random(50,550))
    var rand=Math.round(random(1,4))
    switch(rand){
      case 1:fruit.addImage(fruit1)
        break;
         case 2:fruit.addImage(fruit2)
        break;
         case 3:fruit.addImage(fruit3)
        break;
         case 4:fruit.addImage(fruit4)
        break;
        default:break;
    }
    fruit.scale=0.3
  }
}
function spawnAlien(){
  if(frameCount%80===0){
  alien=createSprite(400,200,20,20)
  alien.velocityX=-(7+score/10)
    alienGroup.add(alien);
    alien.lifetime=600;
alien.y=Math.round(random(50,550))
    var rand=Math.round(random(1,2))
    switch(rand){
      case 1:alien.addImage(alien1)
        break;
         case 2:alien.addImage(alien2)
        break;
    }
    alien.debug=false
    fruit.scale=0.3
    
  }
}