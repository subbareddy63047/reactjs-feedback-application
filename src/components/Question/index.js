import './index.css'

const Question = props => {
  const {emojisArray, selectEmoji} = props
  console.log(emojisArray)

  const clicked = () => {
    selectEmoji()
  }

  return (
    <div className="question-container">
      <h1 className="question-title">
        How satisfied are you with our customer support performance ?
      </h1>
      <ul className="images-container">
        {emojisArray.map(eachEmoji => (
          <li className="each-emoji" onClick={clicked} key={eachEmoji.id}>
            <img src={eachEmoji.imageUrl} alt={eachEmoji.name} />
            <span>{eachEmoji.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Question
