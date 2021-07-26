
//declare the constants for matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//declare the engine 
let engine;
//declare the world
let world;

//declare the variables
var ground1;
var ground2;
var ground3;
var ground4;
var ball;
var pillar1;
var pillar2;

//function to setup the game
function setup() {
//create canvas of required size
createCanvas(1400, 600);

//create the engine
engine = Engine.create();
//upload the 'world' in engine
world = engine.world;

//declare behaviour of the ball
var ball_options = {
//define properties
isStatic : false,
restitution : 0.8,
frictionAir : 2,
density : 1.2 
};

//create the ball 
ball = Bodies.circle(100, 75, 50, ball_options);
World.add(world, ball);

//create the ground1
ground1 = new Ground(700, 580, 1400, 40);
//create the ground2
ground2 = new Ground(700, 20, 1400, 40);
//create the ground3
ground3 = new Ground(20, 300, 40, 600);
//create the ground4
ground4 = new Ground(1380, 300, 40, 600);

//create pillar1
pillar1 = new pillar(800, 465, 40, 190);
World.add(world, pillar1);
//create pillar2 y = 465
pillar2 = new pillar(1150, 325, 40, 460);
World.add(world, pillar2);

//define rect mode
rectMode(CENTER);
//define ellipse mode
ellipseMode(RADIUS);
}

//function to draw the objects
function draw() {
//give a suitable color to background
background(0);

//define the ellipse
fill("yellow");
ellipse(ball.position.x, ball.position.y, 50);

//display ground1
ground1.display();
//display ground2
ground2.display();
//display ground3
ground3.display();
//display ground4
ground4.display();

//display pillar1
pillar1.display();
//display pillar2
pillar2.display();

//call the function to apply the force on the ball
codeForce();

//update the engine - the last step
Engine.update(engine);
}

//function to apply force horizontally and vertically
function codeForce(){
//define the condition
if (keyCode === UP_ARROW){
//apply force on the body i.e. ball
Matter.Body.applyForce(ball, ball.position, {x : 85, y : -3});
}
}
