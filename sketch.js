const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;

var playerSprite, playerSpriteImg1, playerSpriteImg2, playerSpriteImg3, playerSpriteImg4;
var lava1, lava2, lava3, lava4;
var potion, potionImg;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31;
function preload(){
    playerSpriteImg1 = loadImage("images/Up.png");
    playerSpriteImg2 = loadImage("images/Down.png");
    playerSpriteImg3 = loadImage("images/Left.png");
    playerSpriteImg4 = loadImage("images/Right.png");
}
function setup() {
  createCanvas(600,600);
  engine=Engine.create();
  world=engine.world;
  playerSprite=new Player(50,230,30,45);
  lava1=new Lava(345,220,70,40);
  lava2=new Lava(560,210,50,30);
  lava3=new Lava(200,375,60,40);
  lava4=new Lava(375,500,60,40);
  wall1=new Walls(60,34,20,68);
  wall2=new Walls(34,60,68,20);
  wall3=new Walls(60,566,20,68);
  wall4=new Walls(34,525,68,20);
  wall5=new Walls(540,34,20,68);
  wall6=new Walls(566,60,68,20);
  wall7=new Walls(540,566,20,68);
  wall8=new Walls(566,525,68,20);
  wall9=new Walls(270,40,20,80);
  wall10=new Walls(330,40,20,80);
  wall11=new Walls(270,560,20,80);
  wall12=new Walls(330,560,20,80);
  wall13=new Walls(165,34,20,68);
  wall14=new Walls(435,34,20,68);
  wall15=new Walls(165,566,20,68);
  wall16=new Walls(435,566,20,68);
  wall17=new Walls(165,128,20,55);
  wall18=new Walls(435,128,20,55);
  wall19=new Walls(165,472,20,55);
  wall20=new Walls(435,472,20,55);
  wall21=new Walls(500,300,20,300);
  wall22=new Walls(100,300,20,300);
  wall23=new Walls(102,300,204,20);
  wall24=new Walls(465,300,270,20);
  wall25=new Walls(150,150,160,20);
  wall26=new Walls(150,450,160,20);
  wall27=new Walls(450,150,160,20);
  wall28=new Walls(450,450,160,20);
  wall29=new Walls(59,435,20,75);
  wall30=new Walls(420,400,20,90);
  wall31=new Walls(240,215,20,150)
}

function draw(){
  background(180);
  text(mouseX+","+mouseY, mouseX, mouseY);
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();
  wall21.display();
  wall22.display();
  wall23.display();
  wall24.display();
  wall25.display();
  wall26.display();
  wall27.display();
  wall28.display();
  wall29.display();
  wall30.display();
  wall31.display();
  playerSprite.display();
  lava1.display();
  lava2.display();
  lava3.display();
  lava4.display();
  drawSprites();
  }
  function keyPressed(){
    if (keyCode == 39){
      playerSprite.body.position.x=playerSprite.body.position.x+2;
    }
    if (keyCode == 37){
      playerSprite.body.position.x=playerSprite.body.position.x-2;
    }
    if (keyCode == 40){
      playerSprite.body.position.y=playerSprite.body.position.y+2;
    }
    if (keyCode == 38){
      playerSprite.body.position.y=playerSprite.body.position.y-2;
    }
  }