import React from 'react'
import ProfileInfo from 'components/account/ProfileInfo'
import ScoreTable from 'components/account/ScoreTable'
import Share from 'components/account/Share'
import Button from 'components/Button'


const AccountView = () => (
  <div>
    <ProfileInfo />
    <ScoreTable />
    <Share />
    <Button />
  </div>
)

export default AccountView