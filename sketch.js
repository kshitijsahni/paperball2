const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var d3;
function setup(){
	createCanvas(1200,600);

	keyPressed();

	engine=Engine.create();
	world=engine.world;
	paper1= new paper(100,450,70);
	ground1= new Ground(600,500,1200,20);
	d3= new dustbin(880,370,180,230);

	Engine.run(engine);
}

function draw(){
	rectMode(CENTER);
	background(180);
	paper1.display();
	ground1.display();
	d3.display();
}

function keyPressed(){

	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.postion,{x:4,y:-5.5})

	}
}
