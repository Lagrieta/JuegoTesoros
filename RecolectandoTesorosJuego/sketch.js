var road,runner,cash,diamonds,jwellery,sword;
var roadImg,runnerImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashGroup,diamondsGroup,jwelleryGroup,swordGroup;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  roadImg = loadImage("Road.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
road=createSprite(200,200);
road.addImage(roadImg);
road.velocityY = 4;

runner = createSprite(70,470,20,20);
runner.addAnimation("SahilRunning",runnerImg);
runner.scale=0.08;

cashGroup=new Group();
diamondsGroup=new Group();
jwelleryGroup=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  runner.x = World.mouseX;
  
  edges= createEdgeSprites();
  runner.collide(edges);
  
  //código para reiniciar el fondo
  if(road.y > 400 ){
    road.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashGroup.isTouching(runner)) {
      cashGroup.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsGroup.isTouching(runner)) {
      diamondsGroup.destroyEach();

      
    }else if(jwelleryGroup.isTouching(runner)) {
      jwelleryGroup.destroyEach();

      
    }else{
      if(swordGroup.isTouching(runner)) {

    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesoros: "+ treasureCollection,220,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashGroup.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsGroup.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryGroup.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}