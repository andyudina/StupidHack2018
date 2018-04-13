import React from 'react'
import Button from 'components/Button'

const ShareUrl = ({url, isVisible, closeUrlSharing}) => {
  let style = {
    display: isVisible? 'initial': 'none'
  }
  return (
    <div style={style}>
      <input readOnly value={url} />
      <Button
         label="OK"
         onClick={closeUrlSharing} />
    </div>
  )
}

export default ShareUrl