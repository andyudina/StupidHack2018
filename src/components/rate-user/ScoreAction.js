import React from 'react'

const ScoreAction = ({label, onClick}) => (
  <h1 onClick={onClick}>
    {label}
  </h1>
)

export default ScoreAction