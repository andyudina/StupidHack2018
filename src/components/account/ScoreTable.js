import React from 'react'
import ScoretableRow from 'components/account/ScoretableRow'


const ScoreTable = ({
    userRatingsList,
    onIncreaseRating,
    onDecreaseRating}) => (
  <div>
    <span>Your score:</span>
    <div className="score-table">
      {userRatingsList.map((rating, index) => (
        <ScoretableRow
          key={index}
          {...rating}
          />
      ))}
    </div>

    <div className="score-button score-button-increase"
         onClick={onIncreaseRating}>
    </div>
    <div className="score-button score-button-decrease"
         onClick={onDecreaseRating}>
    </div>
  </div>
)

export default ScoreTable