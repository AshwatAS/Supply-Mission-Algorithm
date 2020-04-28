var helicopterIMG,packageIMG;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var engine,world,helicopter
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
function setup(){
	var canvas=createCanvas(1600/4,1600/4);
	engine=Engine.create();
	world=engine.world;
	package=createSprite(800/4,200/4,20,20);
	package.addImage(packageIMG);
	package.scale=0.2;
	helicopter=createSprite(800/4,200/4,80,80);
	helicopter.addImage(helicopterIMG);
	helicopter.scale=0.6
	ground=createSprite(800/4,380,1600/4,20);
	var package_options={
		restitution:0,
		isStatic:true
	}
	packagebody=Bodies.rectangle(800/4,200/4,20,20,package_options);
	var ground_options={
		isStatic:true
	}
	groundbody=Bodies.rectangle(200,380,400,20,ground_options);
	World.add(world,packagebody);
	World.add(world,groundbody)
}
function draw(){
	background(0);
	Engine.update(engine);
	package.x=packagebody.position.x
	package.y=packagebody.position.y
	drawSprites();
}
function keyPressed(){
	if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(packagebody,false);
	}
}