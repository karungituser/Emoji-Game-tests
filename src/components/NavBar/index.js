// Write your code here.
import './index.css'

const NavBar = props => {
  const {isGameInProgress, currentScore, topScore} = props

  return (
    <nav className="nav-header">
      <div className="logo-name">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-total">
          <p className="score"> Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
