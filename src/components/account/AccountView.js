import React from 'react'
import ProfileInfo from 'components/account/ProfileInfo'
import ScoreTable from 'containers/account/ScoreTable'
import Share from 'components/account/Share'
import Button from 'components/Button'


const AccountView = () => {
  return pug`
    .fit-parent.column
      .column-body.overflow-scroll
        .box
          ProfileInfo
          ScoreTable
          Share
      .column-footer
        .box
          Button
  `
}

export default AccountView