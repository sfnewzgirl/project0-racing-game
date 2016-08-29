Misha LeClair
WDI 31
# Racing Game (Project 0)

## Objective

Create a racing game with two players who compete for the best score. The game includes a set race time and each player must use a keystroke to increase their score during the set amount of race time.

I set two main objectives for myself: use timing events and object oriented JavaScript.

I chose to use a timing event as the basis for my game to get more experience with these in JavaScript. I set a predetermined length of time for each race then let each player earn a score based on their ```keyup```, which is translated into a score in the JavaScript.

I chose to work with object oriented JavaScript as a way to solidify this new concept and see how it can really work to my benefit as a developer for clearer, more concise and easy to read code. I wanted to learn about it practical applications and flexibility.

## Links

Live URL: https://webdevmisharacetimeracinggame.bitballoon.com
GitHub Repository: https://github.com/sfnewzgirl/project0-racing-game.git

## Technologies Used
* HTML  
* CSS
* JavaScript (jQuery)

## Code Examples

The first challenge was creating a ready, set, go function so the players were ready for the clock to start. This prevents the clock from starting immediately upon page load. When the player clicks the ready button it launches the countdown - ready, set, go then starts the clock. I used ```fadeIn``` and ```fadeOut```, two methods I had not used yet and ```setInterval``` to set each to one second.

```
$(".game-start").on("click", function handleClick() {
  var gamePromptTimer;
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
  currentGamePrompt = 0;
  gamePromptTimer = window.setInterval(changeGamePrompts, 1000);
  $("#end-of-game").hide();
});
```
The next big challenge was timing the game length as well as turning the ```keyup``` function on and off.

```
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

  $(window).on("keyup", function handleKey() {
    car = currentGame.cars[event.which];
    if (car) {
      var carScore = car.increaseScore(1);
      $("#player" + event.which + "Score").text(carScore);
    }
  });
```
Originally I considered having a score increase exponentially as a player held down a key, but the scoring could be matched or equal if two players only hold down their key. So I opted for a single score and ```keyup```, so the score is logged when the key is released, again restricting any increase from a key being held down and a keyboard reading that repeatedly.
## Screenshots

![alt text](???.png)
