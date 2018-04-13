import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from 'components/Button'

const ShareUrl = ({
      url, isVisible,
      closeUrlSharing,
      onCopyToClipboard,
      isCopied
  }) => {
  let style = {
    display: isVisible? 'initial': 'none'
  }
  let copyStyle = {
    display: isCopied? 'initial': 'none'
  }
  return (
    <div style={style}>
      <input readOnly value={url} />
      <span style={copyStyle}>
        Copied
      </span>
      <CopyToClipboard text={url}
          onCopy={onCopyToClipboard}>
          <button>"Copy to clipboard"</button>
      </CopyToClipboard>
      <Button
         label="OK"
         onClick={closeUrlSharing} />
    </div>
  )
}

export default ShareUrl