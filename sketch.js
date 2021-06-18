const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, stone, stone2, rubberball, rubberball2;
var ground

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
	world = engine.world;
	hammer = new Hammer(10,100);

    ground = new Ground(600,height,1200,20)
    
    stone = new Stone(700,320,50,50);
    
    rubberball=new Rubberball(900,450,50);

    stone2 = new Stone(400,320,50,50);

    rubberball2=new Rubberball(1000,450,50);
}

function draw(){
    background(rgb(209, 209, 209));
    Engine.update(engine);
	hammer.display();
    stone.display();
    ground.display();
    stone2.display();
    rubberball.display();
    rubberball2.display();
    

    
}