var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;

var box1;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  box1 = new Box(100,100,50,50);
}

function draw() {
  background(100);
  Engine.update(engine);
  box1.show();
  
}
