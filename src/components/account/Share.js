import React from "react";
import { withRouter } from "react-router-dom";
import ShareButton from "components/account/ShareButton";

const Share = ({history, url, showUrl}) => {
  let config = {
    'params': {
       'text': "Hey, I'm Vegan! Give me a medal",
       'url': url,
       'title': "Hey, I'm Vegan! Give me a medal!",
    },
    'onShareSuccess': () => {
      history.push('/shared-success')
    }
  }
  return (
    <ShareButton
       config={config}
       showUrl={showUrl}
       label="I'm vegan"/>
  )
}

export default withRouter(Share);