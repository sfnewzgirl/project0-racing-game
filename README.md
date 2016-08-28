Misha LeClair
WDI 31
# Racing Game (Project 0)

## Objective

Create a racing game with two players who compete for the best score. The game includes a set race time and each player must use a keystroke to increase their score during the set amount of race time.

## Technologies Used
* HTML  
* CSS
* JavaScript (jQuery)

## Code Examples

I chose to use a timing event as the basis for my game to get more experience with these in JavaScript. I chose to set a predetermined length of time for each race then let each player earn a score based on their ```keypress```, which is turned into a score in the JavaScript.

The first challenge was creating a ready, set, go function so the players were ready for the clock to start instead of starting the clock immediately when the page loads. I did this by creating a button. When the player clicks the button it creates a ready, set, go countdown then starts the clock. I used ```fadeIn``` and ```fadeOut```, two methods I had not used yet and ```setInterval``` to set each to one second.

```
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

```

Next game the timing event for the game length.

```
code
```
Originally I considered having a score increase exponentially as a player held down a key, but the scoring could be matched or equal if two players only hold down their key. So I opted for a single score and ```keyup```, so the score is logged when the key is released, again restricting any increase from a key being held down and a keyboard reading that repeatedly.
## Screenshots

![alt text](???.png)
