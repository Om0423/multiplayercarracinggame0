var database;
var position;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
game = new Game ();
game.getState();
game.start();
 




}

function draw(){
  background("white");
    drawSprites();
  
}