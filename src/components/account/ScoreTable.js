import React from 'react'
import ScoretableRow from 'components/account/ScoretableRow'


const ScoreTable = ({
    userRatingsList,
    onIncreaseRating,
    onDecreaseRating}) => (
  pug`
    div
      span.score-table-hint Your score:
      .score-table.
        ${userRatingsList.map((rating, index) => (
          <ScoretableRow
            key={index}
            {...rating}
            />
        ))}
      .score-button.score-button-increase(
        onClick=${onIncreaseRating}
        )
      .score-button.score-button-decrease(
        onClick=${onDecreaseRating}
        )
  `
)

export default ScoreTable