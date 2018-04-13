import React from 'react'
import ProfileInfo from 'components/account/ProfileInfo'
import ScoreTable from 'containers/account/ScoreTable'
import Share from 'containers/account/Share'


const AccountView = () => {
  return pug`
    .fit-parent.column
      .column-body.overflow-scroll
        .side-padding
          ProfileInfo
          ScoreTable
      .column-footer
        .side-padding
          Share
  `
}

export default AccountView