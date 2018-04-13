import React from "react";
import { withRouter } from "react-router-dom";
import ShareButton from "components/account/ShareButton";

const Share = ({history, url}) => {
  let urlWithDomain = 'http://' + window.location.host + (url || '')

  let config = {
    'params': {
       'text': "Hey, I'm vegan",
       'url': urlWithDomain,
       'title': "Hey, I'm Vegan! Give me a medal!",
    },
    'onShareSuccess': () => {
      history.push('/shared-success')
    }
  }
  return (
    <ShareButton
       config={config}
       label="I'm vegan"/>
  )
}

export default withRouter(Share);