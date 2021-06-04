function init() {
  const numberButtons = document.querySelectorAll('main div')
  const outcomeDisplay = document.querySelector('#outcome')
  const liveNum = document.querySelector('#live-Num')
  console.log('number buttons ->', numberButtons)
  const score = document.querySelector('.scoreNum')
  console.log(score)
  let currentScore = parseFloat(score.innerText)
  console.log(typeof (currentScore))
  const randomIndex = Math.floor(Math.random() * numberButtons.length)
  console.log('random index ->', randomIndex)
  const resetButton = document.querySelector('#reset')
  console.log('reset button', resetButton)
  // const choices = numberButtons
  const computer = {
    currentChoice: null
  }
  let livesRemaining = 3
  let timer
  // let cycles = 0

  function computerChooses() {
    const randomIndex = Math.floor(Math.random() * numberButtons.length)
    computer.currentChoice = randomIndex
  }
  function startResetButton(event) {
    numberButtons.disabled = true
    console.log(resetButton)
    computerChooses()
    clearInterval(timer)
    timer = setInterval(() => {
      computerChooses()
      liveNum
      // gameOverCheck()
    }, 10)
    console.log(timer)
  }
  function handleNumberButtonsClick(event) {
    computerChooses()
    startResetButton()
    console.log(event.target.id, computer.currentChoice)
    console.log('type', typeof (event.target.id), typeof (computer.currentChoice))
    if (Number(event.target.id) === computer.currentChoice) {
      outcomeDisplay.innerText = 'Correct guess, play again!'
      console.log('Match!')
      currentScore += 10
      score.innerText = currentScore
    } else {
      if (Number(event.target.id) > computer.currentChoice) {
        outcomeDisplay.innerText = 'Your guess was higher!'
      } else {
        if (Number(event.target.id) < computer.currentChoice) {
          outcomeDisplay.innerText = 'Your guess was lesser!'
        }
      }
      livesRemaining--
      liveNum.innerText = livesRemaining
      if (livesRemaining === 0) {
        setTimeout(endGame, 10)
      }
      startResetButton()
    }
    function endGame() {
      if (confirm(`GAME OVER. You scored ${currentScore}`))
        window.location.reload()
    }
  }

  numberButtons.forEach(button => {
    button.addEventListener('click', handleNumberButtonsClick)
  })
  resetButton.addEventListener('numberButtons.disabled', startResetButton)


}



window.addEventListener('DOMContentLoaded', init)

