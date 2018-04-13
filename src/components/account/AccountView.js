import React from 'react'
import ProfileInfo from 'components/account/ProfileInfo'
import ScoreTable from 'containers/account/ScoreTable'
import Share from 'containers/account/Share'


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
          Share
  `
}

export default AccountView