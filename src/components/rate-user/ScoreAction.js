import React from 'react'

const ScoreAction = ({label, onClick}) => (
  <button onClick={onClick}>
    {label}
  </button>
)

export default ScoreAction