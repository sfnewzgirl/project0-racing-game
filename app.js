var player1carImage = "http://rlv.zcache.com/sports_car_cutout-r416d3d66db574d74b2820d1e141c5ee3_x7saw_8byvr_324.jpg";
var player2carImage = "http://rlv.zcache.com/1959_retro_black_cutout-r3a9a0c3f0e934ea5ad725cb50c0e666b_x7sai_8byvr_324.jpg";
var currentGame = new Game;
var allGamePrompts = ["Ready?", "Set...", "GO!"];
var currentGamePrompt;
var secondsRemaining;
var gamePromptTimer;

function initApp() {
  $("#end-of-game").hide();
//game start prompt: counts down with ready, set go
  $(".game-start").on("click", handleClick);
}

function secondsUpdate() {
  console.log("secondsUpdate");
  secondsRemaining--;
  $("#sec").text(secondsRemaining);
};

//when the clock ends: checks for winner, starts some resets
function countdown() {
  console.log("Time is up");
  $(window).off("keyup");
  window.clearInterval(raceTimer);
  window.clearInterval(secondsTimer);
  $("#end-of-game").show();
  currentGame.declareWinner();
  $("#game-start-button").text("Play again?");
  $("#button-wrapper").show();
  $("#sec").text("00");
};

function handleClick() {
  currentGamePrompt = 0;
  gamePromptTimer = window.setInterval(changeGamePrompts, 1000);
  $("#end-of-game").hide();
}

function changeGamePrompts () {
  $(".game-prompt").fadeOut(100);
  console.log('changeGamePrompts() interval');
  if (currentGamePrompt == allGamePrompts.length) {
    window.clearInterval(gamePromptTimer);
    $("#button-wrapper").fadeOut(100);
    $(".game-prompt").text("");
    raceClock();
  }
  else {
    $(".game-prompt").text(allGamePrompts[currentGamePrompt]);
    currentGamePrompt++;
  }
  $(".game-prompt").fadeIn(100);
}

//while the clock is running: logs keyup and counts player score
function raceClock() {
  var raceTimer;
  var secondsTimer;
  var raceLength = 30000;
  secondsRemaining = raceLength/1000;

  $(window).on("keyup", function handleKey() {
    car = currentGame.cars[event.which];
    if (car) {
      var carScore = car.increaseScore(1);
      $("#player" + event.which + "Score").text(carScore);
    }
  });

  raceTimer = window.setInterval(countdown, raceLength);
  secondsTimer = window.setInterval(secondsUpdate, 1000);
};

//object constructors and prototypes
function Car (carImage, carName) {
  this.identity = carName;
  this.image = carImage;
  this.score = 0;
  console.log(this);
};

Car.prototype.increaseScore = function (num) {
  this.score += num;
  console.log("increaseScore", this);
  return this.score;
};

Car.prototype.setScore = function (score) {
  this.score = score;
  return this.score;
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
      $("#winner-declaration").text("Player One, YOU WON!");
    }
    else if (this.cars[65].score < this.cars[76].score) {
      console.log("Player Two, YOU WON!");
      $("#winner-declaration").text("Player Two, YOU WON!");
    }
    else {
      console.log("It was a tie!");
      $("winner-declaration").text("It was a tie!");
    }
    this.cars[65].setScore(0);
    this.cars[76].setScore(0);
};
