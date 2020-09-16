const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1,base2,groundObj;
var bgImg;
var boxObj1,boxObj2,boxObj3,boxObj4,boxObj5,boxObj6,boxObj7,boxObj8,boxObj9,boxObj10,boxObj11,boxObj12,boxObj13,boxObj14,boxObj15;
var boxObj16,boxObj17,boxObj18,boxObj19,boxObj20,boxObj21,boxObj22,boxObj23,boxObj24,boxObj25,boxObj26,boxObj27,boxObj28,boxObj29,boxObj30;
var slingshotObj,polygon
var bg = "light.jpg";
var score = 0;
var backgroundImg

function preload() {
bgImg = loadImage("bg.jpg")
polyImg = loadImage("polygon.jpg")
getBackgroundImg();
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;

  groundObj = new ground(600,600,1400,20);
  base1 = new ground(500, 400, 400, 10);
  base2 = new ground(1000, 300, 400, 10);

  boxObj1 = new box1(500,300,40,40);
  boxObj2 = new box1(450,300,40,40);
  boxObj3 = new box1(400,300,40,40);
  boxObj4 = new box1(550,300,40,40);
  boxObj5 = new box1(600,300,40,40);

  boxObj6 = new box2(425,250,40,40);
  boxObj7 = new box2(525,250,40,40);
  boxObj8 = new box2(475,250,40,40);
  boxObj9 = new box2(575,250,40,40);

  boxObj10 = new box3(500,200,40,40);
  boxObj11 = new box3(450,200,40,40);
  boxObj12 = new box3(550,200,40,40);

  boxObj13 = new box4(475,150,40,40);
  boxObj14 = new box4(525,150,40,40);

  boxObj15 = new box5(500,100,40,40);


  boxObj16 = new box1(1000,200,40,40);
  boxObj17 = new box1(950,200,40,40);
  boxObj18 = new box1(900,200,40,40);
  boxObj19 = new box1(1050,200,40,40);
  boxObj20 = new box1(1100,200,40,40);

  boxObj21 = new box2(925,150,40,40);
  boxObj22 = new box2(1025,150,40,40);
  boxObj23 = new box2(975,150,40,40);
  boxObj24 = new box2(1075,150,40,40);

  boxObj25 = new box3(1000,100,40,40);
  boxObj26 = new box3(950,100,40,40);
  boxObj27 = new box3(1050,100,40,40);

  boxObj28 = new box4(975,50,40,40);
  boxObj29 = new box4(1025,50,40,40);

  boxObj30 = new box5(1000,0,40,40);

 
  var options = {
    restitution:0.5,
    friction:0.01,
    density:0.4
}
polygon = Bodies.circle(50,200,20,options);
World.add(world,polygon);
  slingshotObj = new slingshot(this.polygon,{x:200,y:200});

}

function draw() {
 
  if(backgroundImg)
  background(backgroundImg);

  textSize(25);
  fill(0);
  stroke(255);
  text("Score  " + score, 750, 40)
  text("Tower Siege - 3 : by Sai ",450,50);
  text("Press space to have another chance ",600,500);

  Engine.update(engine);

  imageMode(CENTER);
  image(polyImg,polygon.position.x,polygon.position.y,50,50);

  slingshotObj.display();
  groundObj.display();
  base1.display();
  base2.display();

  strokeWeight(2)
  stroke(15)
  fill("skyblue")
  
  boxObj1.display();
  boxObj2.display();
  boxObj3.display();
  boxObj4.display();
  boxObj5.display();
  boxObj6.display();
  boxObj7.display();
  boxObj8.display();
  boxObj9.display();
  boxObj10.display();
  boxObj11.display();
  boxObj12.display();
  boxObj13.display();
  boxObj14.display();
  boxObj15.display();

  boxObj16.display();
  boxObj17.display();
  boxObj18.display();
  boxObj19.display();
  boxObj20.display();
  boxObj21.display();
  boxObj22.display();
  boxObj23.display();
  boxObj24.display();
  boxObj25.display();
  boxObj26.display();
  boxObj27.display();
  boxObj28.display();
  boxObj29.display();
  boxObj30.display();

  
  boxObj1.score();
  boxObj2.score();
  boxObj3.score();
  boxObj4.score();
  boxObj5.score();
  boxObj6.score();
  boxObj7.score();
  boxObj8.score();
  boxObj9.score();
  boxObj10.score();
  boxObj11.score();
  boxObj12.score();
  boxObj13.score();
  boxObj14.score();
  boxObj15.score();

  boxObj16.score();
  boxObj17.score();
  boxObj18.score();
  boxObj19.score();
  boxObj2.score();
  boxObj21.score();
  boxObj22.score();
  boxObj23.score();
  boxObj24.score();
  boxObj25.score();
  boxObj26.score();
  boxObj27.score();
  boxObj28.score();
  boxObj29.score();
  boxObj30.score();

  drawSprites();

 


  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY });
}

function mouseReleased(){
  slingshotObj.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(this.polygon,{x:200,y:200})
    slingshotObj.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "light.jpg";
  }
  else{
      bg = "dark.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}