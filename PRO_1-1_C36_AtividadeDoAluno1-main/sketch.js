var canvas;
var backgroundImage, car1img, car2img, pistaimg;
var bgImg;
var database;
var form, player;
var playercount;
var gamestate;
var carro1, carro2;
var cars=[];
var allplayers;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1img= loadImage("./assets/car1.png");
  car2img= loadImage("./assets/car2.png");
  pistaimg= loadImage("./assets/PISTA.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.mododejogo();
  game.start();
  
}

function draw() {
  background(backgroundImage);
  if(playercount==2){
  game.update(1);
}
  if(gamestate==1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
