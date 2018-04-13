import React from 'react'
import ProfileInfo from 'components/account/ProfileInfo'
import ScoreTable from 'containers/account/ScoreTable'
import Share from 'components/account/Share'


const AccountView = () => {
  return pug`
    .fit-parent.column
      .column-body.overflow-scroll
        .box
          ProfileInfo
          ScoreTable
          Share(label='Im VEGAAN')
      .column-footer
        .box
          Share(label='Im VEGAAN')
  `
}

export default AccountView