import React from 'react'
import ScoretableRow from 'components/account/ScoretableRow'


const ScoreTable = ({
    userRatingsList,
    onIncreaseRating,
    onDecreaseRating}) => (
  <div>
    {userRatingsList.map(rating => (
      <ScoretableRow
      {...rating}
      />
    ))}
    <button onClick={onIncreaseRating}>
      Increase rating
    </button>
    <button onClick={onDecreaseRating}>
      Decrease rating
    </button>
  </div>
)

export default ScoreTable