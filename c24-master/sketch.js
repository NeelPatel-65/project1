

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var tanker,enemy1,enemy2,aim,canonB;



function preload() {
    
    keyPressed();
    
}

function setup() {
    createCanvas(1200,400);
    engine = Engine.create();

    world = engine.world;
    tanker = new Tanker(200,353,200,150);
    enemy1 = new  Enemy(1190,350,50,80);
    enemy2= new  Enemy(1190,250,50,80);
    aim = new Aim(350,350,100,30);
    canonB = new CanonBall(420,350,20);
    
   
}

function draw() {

    background(0,0,0);
    Engine.update(engine);  
tanker.display();
enemy1.display();
enemy2.display();
aim.display();
canonB.display();

}


function keyPressed(){

if (keyCode === 32){

   canonB.velocityY = 0; 
   canonB.velocityX = 5;

        }      
    }

 
