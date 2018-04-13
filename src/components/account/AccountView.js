import React from 'react'
import ProfileInfo from 'components/account/ProfileInfo'
import ScoreTable from 'components/account/ScoreTable'
import Share from 'components/account/Share'
import Button from 'components/Button'


const AccountView = () => {
  return pug`
    .row
      .col-xs-12
        .box
          ProfileInfo
          ScoreTable
          Share
          Button
  `
}

export default AccountView