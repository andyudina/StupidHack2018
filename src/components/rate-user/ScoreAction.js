import React from 'react'
import Emoji from 'components/Emoji'
const ScoreAction = ({emoji, onClick}) => (
  pug`
    h1.big-emoji(
      onClick=${onClick}
    )
      Emoji(emoji=${emoji})
  `
)

export default ScoreAction