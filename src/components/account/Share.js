import React from "react";

import ShareButton from "components/account/ShareButton";

const Share = (buttonConf) => {
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
    <ShareButton config={config} buttonConf={buttonConf}/>
  )
}

export default Share;