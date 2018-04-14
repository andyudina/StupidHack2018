'use strict';

import React    from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Routing  from 'components/routing'
import rootReducer from './reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  pug`
    div
      // .large-grid
      // .small-grid
      Provider(store=${store})
        Routing
  `,document.querySelector('#root')
)
