'use strict';

import React    from 'react';
import ReactDOM from 'react-dom';
import Routing  from 'components/routing'

ReactDOM.render(
  pug`
    .large-grid
      .small-grid
        Routing
  `
  ,
  document.querySelector('#root')
)
