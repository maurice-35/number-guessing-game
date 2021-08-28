# SEI - Project 1  - Number-guessing game


# Click 👉🏽 123


# Table of Contents


- [Overview](#overview)
- [Brief](#brief)
- [Technologies](#technologies)
- [GettingStarted](#getting-started)
- [Approach](#approach)
- [Wins](#wins)
- [Challenges](#challenges)
- [Future Features](#future-features)
- [Key Learnings](#key-learnings)
- [Contribution to this Project](#contribution-to-this-project)
- [License & Copyright](#license-and-copyright)


# Overview
This was my very first project during the General Assembly Immersive course. Working solo on this project, I had 3 days to come out with a number-guessing game.
In this game, the computer generates a random number and the player has three chances to choose the correct number.The player gains points each time they choose the correct number. 

# Brief
- Write a number-guessing game which functions as follows:
- Computer generates a random number.
- Player should be able to make a guess.
- If the player chooses the correct number they win and can play again
- If the player is incorrect then they lose a life. If they lose 3 lives then the game is over.
- If you make some good progress, you can add some extra features like making the next level higher if the player wins etc. 

#  Technologies
- The game uses  
- JavaScript
- HTML
- CSS and was deployed with 
- GitHub pages.

#  Getting Started
- The site is accessible through the browser and does not require any installations or dependencies.
- Access the source code and open the index.html file on your browser to start the game.

# Approach 

## Day 1 : 
I made a rough plan and wrote the following pseudocode:
- HTML:
  - Header div,
  - Lives,
  - Score,
  - Body:
    - h1 : guess the number,
    - 10 divs with ids,
    - Class with 12 numbers grids, 1-12.
- CSS:
  - Styled as appropriate.
- JavaScript:
  - setInterval() to create a 2 second timer variable for score,
  - Variable with preset number of lives = 3,
  - Grab divs in JS with querySelectorAll,
  - forEach evenListener on each div ‘click’,
  - Grab button in JS with querySelector,
  - Grab scored,
  - Define time variable in global scope, no value assigned initially.
  - Computer generate function:
     - Generates a random number.
  - Player click function:
     - Function will run on click.
     - If the player’s choice matches the random number, the player wins and can play again.
     - If not matched, the player loses one life.
  - End game function:
    - If live = 0 run gameOver.
    - At gameOver window.alert final score.

## Day 2: 
I used Miro.com to map out the grid.

![Screenshot 2021-08-25 at 11 06 57](https://user-images.githubusercontent.com/84001897/131211534-ab035ac3-341f-467f-a6c0-db783c7ed673.png)


- Created a repo on github and cloned to my terminal. 
- Started writing some HTML, CSS & JavaScript.

## Day 3:
I coded the whole day and made adjustments where necessary.

##  Featured Code:

I started by creating a number-grid of 1 - 12 using HTML and styling with CSS.
After I was satisfied that the game functioned correctly, I increased the number of buttons to 16.


     <main class = 'numberButtons'>
              <div class = buttons id = '1'>1</div>
              <div class = buttons id = '2'>2</div>
              <div class = buttons id = '3'>3</div>
              <div class = buttons id = '4'>4</div>
              <div class = buttons id = '5'>5</div>
              <div class = buttons id = '6'>6</div>
              <div class = buttons id = '7'>7</div>
              <div class = buttons id = '8'>8</div>
              <div class = buttons id = '9'>9</div>
              <div class = buttons id = '10'>10</div>
              <div class = buttons id = '11'>11</div>
              <div class = buttons id = '12'>12</div>
              <div class = buttons id = '13'>13</div>
              <div class = buttons id = '14'>14</div>
              <div class = buttons id = '15'>15</div>
              <div class = buttons id = '16'>16</div>
     </main><br>

I created a function to grab the divs in JavaScript with querySelectorAll.

     const numberButtons = document.querySelectorAll('main div')
     
I used forEach eventListener on each div ‘click’.
     
     numberButtons.forEach(button => {
        button.addEventListener('click', handleNumberButtonsClick)
      })

The computer generates a random choice.

    function computerChooses() {
        const randomIndex = Math.floor(Math.random() * numberButtons.length)
        computer.currentChoice = randomIndex
      }
      
Player guesses a number by selecting a button. If it matches that chosen by the computer, then the guess is correct and the player’s score increases.

    if (Number(event.target.id) === computer.currentChoice) {
          outcomeDisplay.innerText = 'Correct guess, 😎 play again!'
          console.log('Match!')
          currentScore += 10
          score.innerText = currentScore
    }

If the player makes the wrong guess, they lose and the number of lives which is initially 3 reduces by 1. 
When the number of lives reaches 0, the game is over.

    if (livesRemaining === 0) {
            setTimeout(endGame, 10)
          }

# Wins
Setting JavaScript to generate random numbers.    
Setting the initial number of lives and reducing them each time a player makes the wrong guess.
The fact that I got the game working was a big win. 

# Challenges
As this was my very first project, I had difficulties setting the computer’s choice to match with the player’s choice.

# Future Features

This final output does not cover all  intentions and plans for the project. As a result, I intend to make some improvements on this project particularly on:
Getting the game to work such that if the player choses a number which is higher than the computer’s choice, all numbers higher than the player’s choice should be inactive. Likewise, if the player’s choice is lower than the computer’s choice, numbers lower than the player’s choice should be inactive. 

#  Key Learnings
I learnt how to write codes with JavaScript using DOM manipulation. Using ‘querySelectorAll’ and ‘eventListener’ functions was a great takeaway.

# Contribution to this project
I welcome any contribution or suggestions to improve on this project.

#  License and copyright
This project was built for educational purposes only. No copyright infringement is intended and all content is used under educational license.



© Maurice Kollewe

