var player1carImage = "http://rlv.zcache.com/sports_car_cutout-r416d3d66db574d74b2820d1e141c5ee3_x7saw_8byvr_324.jpg";
var player2carImage = "http://rlv.zcache.com/1959_retro_black_cutout-r3a9a0c3f0e934ea5ad725cb50c0e666b_x7sai_8byvr_324.jpg";

$(document).ready(function() {
  var currentGame = new Game;
  var allGamePrompts = $(".game-prompt");
  var currentGamePrompt = 0;

  $(".game-start").on("click", function handleClick() {

    function changeGamePrompts () {
      $(allGamePrompts[currentGamePrompt]).fadeIn(100, function () {
        if(currentGamePrompt == allGamePrompts.length - 1) {
          currentGamePrompt = 0;
        }
        else {
          currentGamePrompt++;
        }
        $(allGamePrompts[currentGamePrompt]).fadeOut(100);
      });
    }
    $(currentGamePrompt);
    var gamePromptTimer = setInterval(changeGamePrompts, 1000);
});

//  $(" ").on("keypress", function() {
    //tap spacebar
//    increaseScore(1)
    //hold spacebar
//    increaseScore(2)
//  });

  //if keypress a = player1
  //var key = a.which;
  //if keypress l = player2
  //var key = l.which;

});

//object constructors and prototypes
function Car (carImage) {
  this.image = carImage;
  this.score = 0;
  console.log("car");
};

Car.prototype.increaseScore = function (num) {
  this.score += num;
//  $(this).append(score);
  console.log("increaseScore");
};

function Game () {
  whiteCar = new Car(player1carImage);
  blackCar = new Car(player2carImage);
};

//Game.prototype.raceClock = function () {
  //
//  $(".clock")
//}

 //winner logic function
