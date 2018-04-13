import React from 'react'
import { withRouter } from "react-router-dom";
import Confirmation from 'components/Confirmation'
import Button from 'components/Button'


const SuccessfullySharedView = ({history}) => {
  let redirectToMainPage =  () => {
    history.push('/')
  }

  return (
    <div>
      <Confirmation />
      <Button
        onClick={redirectToMainPage}
        label="OK"/>
    </div>
  )
}

export default withRouter(SuccessfullySharedView)