import React from 'react'
import ScoreAction from 'components/rate-user/ScoreAction'

const RateUserView = ({increaseRating, decreaseRating}) => (
  <div>
    <ScoreAction
       label="Give medal"
       onClick={increaseRating}/>
    <ScoreAction
       label="Give meat"
       onClick={decreaseRating}/>
  </div>
)

export default RateUserView