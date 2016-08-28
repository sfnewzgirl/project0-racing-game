var player1carImage = "http://rlv.zcache.com/sports_car_cutout-r416d3d66db574d74b2820d1e141c5ee3_x7saw_8byvr_324.jpg";
var player2carImage = "http://rlv.zcache.com/1959_retro_black_cutout-r3a9a0c3f0e934ea5ad725cb50c0e666b_x7sai_8byvr_324.jpg";

$(document).ready(function() {
  var currentGame = new Game;
  var allGamePrompts = $(".game-prompt");
  var currentGamePrompt = 0;

  $(".game-start").on("click", function handleClick() {
    var gamePromptTimer;
    function changeGamePrompts () {
      $(allGamePrompts[currentGamePrompt]).fadeIn(100, function () {
        console.log('changeGamePrompts() interval');
        if (currentGamePrompt == allGamePrompts.length - 1) {
            window.clearInterval(gamePromptTimer);
            raceClock();
        }
        else {
          currentGamePrompt++;
        }
        $(allGamePrompts[currentGamePrompt]).fadeOut(100);
      });
    }
    gamePromptTimer = window.setInterval(changeGamePrompts, 1000);
  });

  function raceClock() {
    var raceTimer;
    $("#button-wrapper").hide();

    function countdown() {
      console.log("Time is up");
      window.clearInterval(raceTimer);
    };
    raceTimer = window.setInterval(countdown, 30000);
  };
//    $("#secs").innerHTML=time;

  $(window).on("keydown", function handleKey() {
    if (event.which == 65 ) {
      console.log("a");
    }
    if (event.which == 76) {
      console.log("l");
    }
  });

//  $(" ").on("keypress", function() {
    //tap spacebar
//    increaseScore(1)
    //hold spacebar
//    increaseScore(2)
//  });

  //if keypress a = player1
  //var key = a.which;
  //a is 65
  //if keypress l = player2
  //var key = l.which;
  //l is 76

});

//object constructors and prototypes
function Car (carImage) {
  this.image = carImage;
  this.score = 0;
  this.key = "a" || "l";
  console.log("car");
};

Car.prototype.increaseScore = function (num) {
  this.score += num;
//  $(this).append(score);
  console.log("increaseScore");
};

function Game () {
  whiteCar = new Car(player1carImage, 0, "a");
  blackCar = new Car(player2carImage, 0, "l");
};

// Game.prototype.raceClock = function () {
// };

// function displayScore() {
//   if (whiteCar.score > blackCar.score) {
//     console.log("Player One, YOU WON!");
//   }
//   else {
//     console.log("Player Two, YOU WON!");
//   }
// };
