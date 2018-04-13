import React from 'react'
import Confirmation from 'components/Confirmation'
import Button from 'components/Button'


const SuccessfullyRatedView = ({emoji, onClick}) => (
    <div>
      <Confirmation emoji={emoji}/>
      <Button
        label="OK"
        onClick={onClick}/>
    </div>
)

export default SuccessfullyRatedView