import React from 'react'
import { withRouter } from "react-router-dom";
import Confirmation from 'components/Confirmation'
import Button from 'components/Button'


const SuccessfullySharedView = ({history}) => {
  let redirectToMainPage =  () => {
    history.push('/')
  }

  return pug`
    .fit-parent.column
      .column-body.overflow-scroll
        .side-padding.share-success-content
          Confirmation
      .column-footer
        .side-padding
          Button(
            onClick=${redirectToMainPage}
            label="Feels good man"
            )
  `
}

export default withRouter(SuccessfullySharedView)