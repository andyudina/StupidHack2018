import React from "react";

import ShareButton from "components/account/ShareButton";

const Share = () => {
  let config = {
    'params': {
       'text': 'text',
       'url': 'url',
       'title': 'title',
    },
    'onShareSuccess': () => {
      window.location = '/shared-success'
    }
  }
  return (
    <ShareButton config={config} />
  )
}

export default Share;