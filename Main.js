const checkersBtn = document.getElementById('checkers-btn')
checkersBtn.addEventListener('click', () => {  window.location.href = 'https://einav15.github.io/Checkers/Checkers.html'; })
checkersBtn.addEventListener('mouseenter', () => { checkersBtn.classList.add('hover') })
checkersBtn.addEventListener('mouseleave', () => { checkersBtn.classList.remove('hover') })
////amount of players
const ticTacToeBtn = document.getElementById('tic-tac-toe-btn')
ticTacToeBtn.addEventListener('click', () => { window.location.href = 'https://einav15.github.io/TicTacToe/tictactoe.html'; })
ticTacToeBtn.addEventListener('mouseenter', () => { ticTacToeBtn.classList.add('hover') })
ticTacToeBtn.addEventListener('mouseleave', () => { ticTacToeBtn.classList.remove('hover'); })