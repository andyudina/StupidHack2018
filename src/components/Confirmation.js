import React from 'react'

const Confirmation = ({emoji}) => (
  pug`
    .text-center
      h1.share-success-icon ${emoji}
  `
)
Confirmation.defaultProps = {
  emoji: '🤘'
}

export default Confirmation