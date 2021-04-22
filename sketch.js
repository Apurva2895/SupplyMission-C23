var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1, side2, side3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	side1=createSprite(width,20,height/40 );
    side1.x = 525;
	side1.y = 610;
	side1.shapeColor = "red";

	side2=createSprite( width,20,height/40 );
	side2.x = 225;
	side2.y = 610;
	side2.shapeColor = "red";

	side3=createSprite();
	side3.width = 282;
	side3.height = 20;
	side3.x = 375;
	side3.y = 650;
	side3.shapeColor = "red";

	packageSprite=createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	side3 = Bodies.rectangle(width/2, 625, width, 10 , {isStatic:true} );
 	World.add(world, side3);

	 
	 
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 
  drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Engine.run(engine);
  }
}



