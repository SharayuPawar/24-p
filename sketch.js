const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var engine, world;
var hammer;
var stone;
var iron;
var rubber;


function setup(){
    var canvas = createCanvas(1200,600);

    

    engine = Engine.create();
    world = engine.world;

   
      
      

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(700,1,80,80);
    iron =new Iron(200,1,70,50);
    rubber =new Rubber(300,1,25);
    

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();
    
    

    
 
}