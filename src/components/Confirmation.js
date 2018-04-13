import React from 'react'
import { withRouter } from 'react-router-dom'

class Confirmation extends React.Component{
  componentWillMount(){
    try {
      this.emoji = this.props.history.location.state.emoji
      this.copy  = this.props.history.location.state.copy
    } catch(err) {
      this.emoji = this.props.emoji
      this.copy  = this.props.copy
    }
  }
  render(){
    return pug`
      .row.column.fit-parent.confirmation-content
        .text-center
          h1.big-emoji ${this.emoji}
          h3.confirmation-text ${this.copy}
    `
  }
}
Confirmation.defaultProps = {
  emoji: '🤘',
  copy: 'Thank you for telling that person you\'re vegan!'
}

export default withRouter(Confirmation)