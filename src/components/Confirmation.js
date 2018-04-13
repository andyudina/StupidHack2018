import React from 'react'

const Confirmation = ({emoji}) => (
  pug`
    .row.fit-parent.confirmation-content
      .text-center
        h1.confirmation-icon ${emoji}
        h3.confirmation-text Successfully shared!
  `
)
Confirmation.defaultProps = {
  emoji: '🤘'
}

export default Confirmation