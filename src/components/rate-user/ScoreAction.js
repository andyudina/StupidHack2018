import React from 'react'

const ScoreAction = ({label, onClick}) => (
  pug`
    h1.big-emoji(
      onClick=${onClick}
    ) ${label}
  `
)

export default ScoreAction