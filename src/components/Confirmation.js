import React from 'react'
import { withRouter } from 'react-router-dom'
import Emoji from 'components/Emoji'

class Confirmation extends React.Component{

  render() {
    return pug`
      .row.column.fit-parent.confirmation-content
        .text-center
          h1.big-emoji
            Emoji(emoji=${this.props.emoji})
          h3.confirmation-text ${this.props.copy}
    `
  }
}
Confirmation.defaultProps = {
  emoji: '🤘',
  copy: 'Thank you for telling that person you\'re vegan!'
}

export default withRouter(Confirmation)