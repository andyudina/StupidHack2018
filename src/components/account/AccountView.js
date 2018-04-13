import React from 'react'
import ProfileInfo from 'components/account/ProfileInfo'
import ScoreTable from 'containers/account/ScoreTable'
import Share from 'components/account/Share'


const AccountView = () => {
  return pug`
    .fit-parent.column
      .column-body.overflow-scroll
        .side-padding
          ProfileInfo
          ScoreTable
          Share(label="I'm vegan")
      .column-footer
        .side-padding
          Share(label="I'm vegan")
  `
}

export default AccountView