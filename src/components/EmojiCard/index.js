// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojisDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-card-container">
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
