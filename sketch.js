var database;
var gameState = 0;
var playerCount;
var form , player,game;
var allPlayers;
var distance = 0;
var car1,car2,car3,car4,cars;

function preload(){
    car1Img = loadImage("../images/car1.png");
    car2Img = loadImage("../images/car2.png");
    car3Img = loadImage("../images/car3.png");
    car4Img = loadImage("../images/car4.png");
    groundImg = loadImage("../images/ground.png");
    trackImg = loadImage("../images/track.jpg");
    trackImg2 = loadImage("../images/track.png");
}

function setup(){
    createCanvas(windowWidth-40,windowHeight-50);
    database = firebase.database();
    game = new Game ()
    game.getState();
    game.start();

}

function draw(){
if(playerCount === 4){
    game.update(1);
}
if(gameState === 1){
  clear ()
    game.play();
}
if(gameState === 2){
    game.End();
}
}
