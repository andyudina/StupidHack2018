import React from 'react'

const Confirmation = ({emoji}) => (
  pug`
    .row.column.fit-parent.confirmation-content
      .text-center
        h1.big-emoji ${emoji}
        h3.confirmation-text Thank you for telling that person you're vegan!
  `
)
Confirmation.defaultProps = {
  emoji: '🤘'
}

export default Confirmation