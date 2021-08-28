# project-1

# Project 1 Readme - Number-guessing game
# Click 👉🏽 123
# Table of Contents
# Overview
# Brief
# Technologies
# Getting Started
# Approach
# Wins
# Challenges/Bugs
# Future features
# Key Learnings/Takeaway
# Contribution to this Project
# License & Copyright


## Overview
This was my very first project during the General Assembly Immersive course. Working solo on this project, I had 3 days to come out with a number-guessing game.
In this game, the computer generates a random number and the player has three chances to choose the correct number.The player gains points each time they choose the correct number. 

## Brief
- Write a number-guessing game which functions as follows:
- Computer generates a random number.
- Player should be able to make a guess.
- If the player chooses the correct number they win and can play again
- If the [player is incorrect then they lose a life. If they lose 3 lives then the game is over.
- If you make some good progress, you can add some extra features like making the next level higher if the player wins etc. 

##  Technologies
- The game uses  
- JavaScript
- HTML
- CSS and was deployed with 
- GitHub pages.

##  Getting Started
- The site is accessible through the browser and does not require any installations or dependencies.
- Access the source code and open the index.html file on your browser to start the game.

## Approach 
Day 1 : I made a rough plan and wrote the following pseudocode:
- HTML:
  header div,
  Lives,
  Score,
  Body:
  h1 : guess the number,
  10 divs with ids,
  Class with 12 numbers grids, 1-12.
- CSS:
Styled as appropriate.
- JavaScript:
setInterval() to create a 2 second timer variable for score,
Variable with preset number of lives = 3,
Grab divs in JS with querySelectorAll,
forEach evenListener on each div ‘click’,
Grab button in JS with querySelector,
Grab scored,
Define time variable in global scope, no value assigned initially.
* Computer generate function:
Generates a random number.
* Player click function:
Function will run on click,
If the player’s choice matches the random number, the player wins and can play again.
If not matched, the player loses one life.
* End game function:
If live = 0 run gameOver.
At gameOver window.alert final score.
