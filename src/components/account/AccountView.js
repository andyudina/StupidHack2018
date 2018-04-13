import React from 'react'
import ProfileInfo from 'containers/account/ProfileInfo'
import ScoreTable from 'containers/account/ScoreTable'
import Share from 'containers/account/Share'
import ShareUrl from 'containers/account/ShareUrl'

const AccountView = () => {
  return pug`
    .fit-parent.column
      .column-body.overflow-scroll
        .side-padding
          ProfileInfo
          ScoreTable
          ShareUrl
      .column-footer
        .side-padding
          Share
  `
}

export default AccountView