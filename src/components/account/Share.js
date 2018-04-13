import React from "react";
import { withRouter } from "react-router-dom";
import ShareButton from "components/account/ShareButton";

const Share = ({history}) => {
  let config = {
    'params': {
       'text': 'text',
       'url': 'url',
       'title': 'title',
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