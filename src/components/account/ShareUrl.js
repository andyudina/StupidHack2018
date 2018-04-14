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
    display: isVisible ? 'flex': 'none'
  }
  let copyButtonText = isCopied ? 'Copied 👍': 'Copy to clipboard'
  let handleCopy = () => {
    copy(document.getElementById("url-field").innerHTML)
    onCopyToClipboard()
  }
  return pug`
  div(style=${style})
    .fit-parent.column.share-url-wrapper
      .column-body.overflow-scroll
        .row.column.fit-parent.confirmation-content
          .share-url.side-padding
            h5.share-url-title Send this link to aaall your friends
            #url-field ${url}
            .share-url-copy-button
              Button(
                label=${copyButtonText}
                onClick=handleCopy
                )
            Button(
              label="OK"
              onClick=closeUrlSharing
              color='gray'
              )

          .share-url-background.fit-parent(onClick=closeUrlSharing)
  `
}

export default ShareUrl