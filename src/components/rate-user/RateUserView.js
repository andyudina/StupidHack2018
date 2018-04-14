import React from 'react'
import { withRouter } from "react-router-dom";
import ScoreAction from 'components/rate-user/ScoreAction'

const RateUserView = ({
    history,
    increaseRating,
    decreaseRating,
    setConfirmation,
   }) => {
  let redirectToSuccessView = () => {
    history.push({
      pathname: '/rate-success',
    })
  }
  return pug`
    .row.column.fit-parent.confirmation-content
      .text-center
        h5.rate-title Yep, that guy is vegan. Would you give:
        .rate-button.rate-medal
          ScoreAction(
            emoji='🎖'
            onClick=${
            () => {
              increaseRating();
              setConfirmation(
                '🎖',
                'And off your medal goes'
              );
              redirectToSuccessView();
            }})
        h6.rate-or or
        .rate-button.rate-bacon
          ScoreAction(
            emoji='🥓'
            onClick=${
            () => {
              decreaseRating();
              setConfirmation(
                '🥓',
                'You know you\'re an awful person, right?'
                );
              redirectToSuccessView();
            }})
  `
}

export default withRouter(RateUserView)