import React from 'react'
import { withRouter } from "react-router-dom";
import ScoreAction from 'components/rate-user/ScoreAction'

const RateUserView = ({history, increaseRating, decreaseRating}) => {
  let redirectToSuccessView = () => {
    history.push('rate-success')
  }
  return (
  <div>
    <ScoreAction
       label="🎖️"
       onClick={
        () => {
          increaseRating();
          redirectToSuccessView();
        }}/>
    <ScoreAction
      label="🥓"
      onClick={
        () => {
          decreaseRating();
          redirectToSuccessView();
        }
      }
      />
  </div>)
}

export default withRouter(RateUserView)