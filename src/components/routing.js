import   React          from 'react'
import { BrowserRouter,
         Switch,
         Route,
         Link }         from 'react-router-dom'
import AccountView from './account/AccountView'
import SuccessfulllySharedView from './account/SuccessfullySharedView'
import RateUserView from './rate-user/RateUserView'
import SuccessfulllyRatedView from './rate-user/SuccessfullyRatedView'

const Routing = () => {
  return pug`
    BrowserRouter
      Switch(location=${location})
        Route(exact
              path='/'
              component=${AccountView})
        Route(exact
              path='/shared-success'
              component=${SuccessfulllySharedView})
        Route(path='/rate'
              component=${RateUserView})
        Route(path='/rate-success'
              component=${SuccessfulllyRatedView})
  `
}

export default Routing