
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle1, particle2, particle3, particle4, particle5;

var plane;

var block1, block2;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    var plane_options = {
		isStatic:true
	}

	var block1_options = {
		isStatic:true
	}

	var block2_options = {
		isStatic:true
	}

	var particle1_options = {
		restitution: 0.95,
		frictionAir:0.01
	}

    var particle2_options = {
		restitution: 0.95,
		frictionAir:0.01
	}

	var particle3_options = {
		restitution: 0.95,
		frictionAir:0.01
	}

	var particle4_options = {
		restitution: 0.95,
		frictionAir:0.01
	}

	var particle5_options = {
		restitution: 0.95,
		frictionAir:0.01
	}

    plane = Bodies.rectangle(800, 400, 800, 20, plane_options)
  World.add(world,plane);

  block1 = Bodies.rectangle(200, 200, 400, 20, block1_options)
  World.add(world,block1);

  block2 = Bodies.rectangle(200, 200, 400, 20, block2_options)
  World.add(world,block2);

	particle1 = Bodies.circle(370,10,20,particle1_options);
  World.add(world,particle1);

  particle2 = Bodies.circle(400,10,20,particle2_options);
  World.add(world,particle2);

  particle3 = Bodies.circle(450,10,20,particle3_options);
  World.add(world,particle3);

  particle4 = Bodies.circle(500,10,20,particle4_options);
  World.add(world,particle4);

  particle5 = Bodies.circle(550,10,20,particle5_options);
  World.add(world,particle5);

	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("cyan");
  
  drawSprites();
 
  ellipse(particle1.position.x,particle1.position.y, 20);
  
  ellipse(particle2.position.x,particle2.position.y, 20);
  
  ellipse(particle3.position.x,particle3.position.y, 20);
  
  ellipse(particle4.position.x,particle4.position.y, 20);

  ellipse(particle5.position.x,particle5.position.y, 20);
 
 
  rect(plane.position.x, plane.position.y, 800, 20);

  rect(block1.position.x, block2.position.y, 400, 20);

  rect(block2.position.x, block2.position.y, 400, 20);
}



