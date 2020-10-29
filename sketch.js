var car , wall;
var speed ,weight,height; 


function setup() {
  createCanvas(800,400);

  car = createSprite(100, 300, 50, 50);
  car.shapeColor = "white";
  car.velocityX = speed;

  wall = createSprite(700, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
}

function draw() {
  background(0);
  
  if(wall.x-car.x < (car.width+wall.width)/2 ){
    car.velocity = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor = color(225,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}