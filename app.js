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
        if (currentGamePrompt == allGamePrompts.length - 2) {
            window.clearInterval(gamePromptTimer);
            $("#button-wrapper").hide();
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
    var secondsTimer;
    var raceLength = 30000;
    var secondsRemaining = raceLength/1000;

    function secondsUpdate() {
      console.log("secondsUpdate");
      secondsRemaining--;
      $("#sec").text(secondsRemaining);
    };

    function countdown() {
      //      $(".gamePromptTimer").show(allGamePrompts.length - 1);
      console.log("Time is up");
      window.clearInterval(raceTimer);
      window.clearInterval(secondsTimer);
      currentGame.declareWinner();
      $("sec").text("00");
    };
    raceTimer = window.setInterval(countdown, raceLength);
    secondsTimer = window.setInterval(secondsUpdate, 1000);
  };

  $(window).on("keyup", function handleKey() {
    car = currentGame.cars[event.which];
    if (car) {
      car.increaseScore(1);
    }
//      car.text(this.score);
  });

});

//object constructors and prototypes
function Car (carImage, carName) {
  this.identity = carName;
  this.image = carImage;
  this.score = 0;
  console.log(this);
};

Car.prototype.increaseScore = function (num) {
  this.score += num;
//  $(this).append(score);
  console.log("increaseScore", this);
};

function Game () {
  this.cars = {
    65: new Car(player1carImage, "A"),
    76: new Car(player2carImage, "L")
  };
};

Game.prototype.declareWinner = function () {
    if (this.cars[65].score > this.cars[76].score) {
      console.log("Player One, YOU WON!");
    }
    else if (this.cars[65].score < this.cars[76].score) {
      console.log("Player Two, YOU WON!");
    }
    else {
      console.log("It was a tie!");
    }
    //$(".game-start").show();
};
