import React from 'react'
import ProfileInfo from './ProfileInfo'
import ScoreTable from './ScoreTable'
import Share from './Share'
import Button from '../Button'


const AccountView = () => (
  <div>
    <ProfileInfo />
    <ScoreTable />
    <Share />
    <Button />
  </div>
)

export default AccountView