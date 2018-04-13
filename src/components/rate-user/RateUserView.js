import React from 'react'
import { withRouter } from "react-router-dom";
import ScoreAction from 'components/rate-user/ScoreAction'

const RateUserView = ({history, increaseRating, decreaseRating}) => {
  let redirectToSuccessView = () => {
    history.push('rate-success')
  }
  return pug`
    .row.column.fit-parent.confirmation-content
      .text-center
        h5.rate-title Yep, that guy is vegan. Would you give:
        .rate-button.rate-medal
          ScoreAction(
            label='🎖️'
            onClick=${
            () => {
              increaseRating();
              redirectToSuccessView();
            }})
        h6.rate-or or
        .rate-button.rate-bacon
          ScoreAction(
            label='🥓'
            onClick=${
            () => {
              decreaseRating();
              redirectToSuccessView();
            }})
  `
}

export default withRouter(RateUserView)