var player1carImage = "http://rlv.zcache.com/sports_car_cutout-r416d3d66db574d74b2820d1e141c5ee3_x7saw_8byvr_324.jpg";
var player2carImage = "http://rlv.zcache.com/1959_retro_black_cutout-r3a9a0c3f0e934ea5ad725cb50c0e666b_x7sai_8byvr_324.jpg";

$(document).ready(function() {
//all the code to manipulate the DOM
//set up game board
  new Game



  $(" ").on("keypress", function() {
    //tap spacebar
    increaseScore(1)
    //hold spacebar
    increaseScore(2)
  });

  //if keypress a = player1
  //if keypress l = player2

});

//object constructors and prototypes
function Car (carImage) {
  this.image = carImage;
  this.score = 0;
  console.log("car");
}

Car.prototype.increaseScore = function (num) {
  this.score += num;
  console.log("moveForward");
}

function Game () {
  whiteCar = new Car(player1carImage);
  blackCar = new Car(player2carImage);
}

Game.prototype.raceClock = function () {
  //
}
 //winner logic function
