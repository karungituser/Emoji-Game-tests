// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-container">
      <div className="image-section">
        <img src={imageUrl} alt="win or lose" className="won-lose" />
      </div>
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score-card">{score}/12</p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="play-again-button"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
