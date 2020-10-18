//Create variables here
var canvas
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var target;
var bg;
var bow,arrow;
function preload()
{
  //load images here
  bg=loadImage("images/background2.jpg");
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  engine = Engine.create();
  world = engine.world;
target=new Target (330,500,200,350);
bow = new Bow (displayWidth - 150, displayHeight-300,100,350)
arrow=new Arrow(displayWidth - 150, displayHeight-300,300,50)
}


function draw() {  
  background(bg);
  Engine.update(engine);
target.display();
bow.display();
arrow.display();








  drawSprites();
  //add styles here

}



