import React  from 'react'
import copy   from 'copy-to-clipboard';
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
  let handleCopy = () => {
    copy(document.getElementById("url-field").value)
    onCopyToClipboard()
  }
  return pug`
    div(style=${style})
      input#url-field(readOnly value=url)
      span(style=copyStyle) Copied
      Button(
        label="copy to clipboard"
        onClick=handleCopy
        )
      Button(
        label="OK"
        onClick=closeUrlSharing
        color='gray'
        )
  `
}

export default ShareUrl