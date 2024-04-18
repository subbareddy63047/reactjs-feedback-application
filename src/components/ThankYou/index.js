import './index.css'

const ThankYou = props => {
  const {heartUrl, backToQuestion} = props

  const goBack = () => {
    backToQuestion()
  }

  return (
    <div className="heart-container">
      <div className="heart-img-text-container">
        <img src={heartUrl} alt="love emoji" />
        <h1>Thank you</h1>
      </div>
      <p className="feed-text">
        We will use your feedback to improve our customer support <br />
        Performance
      </p>
      <button type="button" className="back" onClick={goBack}>
        back
      </button>
    </div>
  )
}
export default ThankYou
