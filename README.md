# Rock Paper Scissors Lizard Spock


"Rock Paper Scissors Lizard Spock" game is game inspired by legendary "rock paper scissors" game and taken from popular **"The Big Bang"** series.

It is a simple game suitable for both children and adults. And it should help them to make decisions as well in game as well in real life.

![Alt text](/assets/images/amiresponsive-screenshot.png "Am i Responsive")



# Features

## Header


![Alt text](/assets/images/heading.png "header")

+ Header contains simply name of the game.
+ It contains also short instructions on how to play the game.

## Game Area


![Alt text](/assets/images/game-area.png "game area")

+ Game area contains hand-emoji who represent hand signs for each of choices.
+ It is build as interactive button for user to click on it and 'make' a move.

## Move Area


![Alt text](/assets/images/move-area.png "move area")

+ It is hidden in the beginning of game as neither player or computer have make the first move.
+ As player choose and click on one of the icons the choosen move will be represented in "move area" on the left side along with computers move on the       right side.
+ The bold text will display the result after it compare within JS code('You Win', 'You Lose' or 'Tie').

## Score Area

![Alt text](/assets/images/score-area.png "score area")

+ It contains three fields "Wins", "Losses" and "Ties" and it updates after every move according to achieved result.

## Start Again button

+ By pressing "Start Again" button player reset the game and score and can start from the beginning.


# Testing


+ I have tested and confirm that game works in different browsers.
+ The responsivness is good on all standard screen sizes and it looks good.
+ All buttons works and result is always correct.


# Validation

+ HTML
    - no errors were returned when passing through official W3C validator

![Alt text](/assets/images/HTMLcheck.png "HTML check")

+ CSS
    - no errors were returned when passing through official (Jigsaw) validator

![Alt text](/assets/images/CSScheck.png "CSS check")

+ JSHint
    - 18 warnings as result when testing in JSHint that warns about possible different versions of JS used.

![Alt text](/assets/images/JSHintcheck.png "JSHint check")

+ accesibility
    - I confirm that fonts and colors are easy to read and accessible by running through lighthouse in devtools.

![Alt text](/assets/images/lighthouse-test.png "lighthouse test")



+ The site was deployed to Github pages with following steps:
    - In GitHub repository navigate to Settings.
    - In Settings choose Pages.
    - In Source drop menu choose "Deply from branch" and in Branch drop menu choose "main".
    - Once everything is selected the page will provide the link to completed site.

+ link to completed game site
    - https://lukagajic2.github.io/the-game/


## Media

Emoji icons a taken from www.emojipedia.org
