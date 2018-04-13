import React from 'react'
import Confirmation from 'components/Confirmation'
import Button from 'components/Button'


const SuccessfullyRatedView = ({emoji, onClick}) => (
  pug`
    .fit-parent.column
      .column-body.overflow-scroll.confirmation-content-wrapper
        .side-padding.share-success-content
          Confirmation(emoji=${emoji})
      .column-footer
        .side-padding
          Button(
            label='OK'
            onClick=${onClick}
            )

  `
)

export default SuccessfullyRatedView