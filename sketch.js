const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myWorld,myEngine;
var ground,ball;


function setup() {
  createCanvas(800,400);
  

  myEngine = Engine.create();
  myWorld = myEngine.world;
  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(myWorld,ground);
  var ball_options={
    restitution:1 
  }
 ball = Bodies.circle(400,100,30,ball_options);
 World.add(myWorld,ball);
}

function draw() {
  background(0); 
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  
}