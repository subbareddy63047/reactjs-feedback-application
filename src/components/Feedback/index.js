// Write your React code here.
import {Component} from 'react'

import ThankYou from '../ThankYou'

import Question from '../Question'

import './index.css'

class Feedback extends Component {
  state = {feedback: false}

  selectEmoji = () => {
    this.setState({feedback: true})
  }

  backToQuestion = () => {
    this.setState({feedback: false})
  }

  render() {
    const {feedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="main-container">
        {feedback ? (
          <ThankYou
            heartUrl={loveEmojiUrl}
            backToQuestion={this.backToQuestion}
          />
        ) : (
          <Question emojisArray={emojis} selectEmoji={this.selectEmoji} />
        )}
      </div>
    )
  }
}

export default Feedback
