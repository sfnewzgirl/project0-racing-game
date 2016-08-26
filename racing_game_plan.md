
Creator: Misha LeClair
Location: San Francisco

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

### Project 0: Racing Game

### User Stories & Game Mechanics
1. A user is assigned a car to drive.
2. A user can move the car forward by pressing on a keyboard key.
3. If the user crosses the finish line first, they win.

### Data Structures

**Car**
  - `carImage` (string)(image)
  - `moveForward()` (Function - move (drive) the car forward with a `key`)
  - `speedUp()` (Function - increases the `moveForward` distance when the key is held down)
  - `Car(player)` (Function - constructor, create a car based on which player turn it is)

**Player**
  - `player1` (Car)
  - `player2` (Car)
  - `playerTurn(player1, player2))` (Function - starts with player1 and alternates turns of play)
  - `raceDistance()` (Function - counts the distance a player travels in set amount of time)
  - `Player()` (Function - constructor, create a player)

**Game**
  - `Game()` (Function - constructor)
  - `raceClock()` (Function - starts the clock (go!), runs the clock(race time!), stops the clock (stop!))
  - `farthestDistance()` (Function - compares `raceDistance` for `player1` and `player2` time and notes which traveled the farthest in the set amount of time)
  - `hasWon()` (Function - check if the game has been won!)
  - `celebrate()` (Function - display a win message)
  - `reset()` (Function - resets the game!)

**Button**
- `startButton` (object to click)
- `Button` (Function - constructor)

### Development Stories

1. A user can see a welcome screen.
  * Create HTML for welcome.
  * Create HTML for instructions.
  * Create car image, loaded on the screen.
  * Create `button`, click when you're ready to start.

2. A user is told to go!
  * On `button` `click`, `setTimeout`.
  * The `raceClock` starts, alerting user Go!
  * The `raceClock` counts, alerting user Race time!  
  * The user can `key` spacebar to move forward.
  * The user can hold down spacebar to move faster.
  * The `raceClock` ends, alert user Stop!
  * Alert user `raceDistance`.

3. A second user gets to race.
  * Alert `player2`it's their turn.
  * On `button` `click`, `setTimeout`.
  * The `raceClock` starts, alerting user Go!
  * The `raceClock` counts, alerting user Race time!  
  * The user can `key` spacebar to move forward.
  * The user can hold down spacebar to move faster.
  * The `raceClock` ends, alert user Stop!
  * Alert user `raceDistance`.

4. When both have taken turns.
  * Calculate `farthestDistance` by comparing `raceDistance` of `player1` and `player2`.
  * Alert `hasWon`.
  * Fire `celebrate`.
  * Insert play again button.

5. If user clicks play again button.
  * On `button` click, reset game.

###Potential Challenges / Development Questions

1. What if they get the same `raceDistance`?
2. Help delineating OOJS methods that are global is scope versus instances.
