import   React          from 'react'
import { BrowserRouter,
         Switch,
         Route,
         Link }         from 'react-router-dom'

const Routing = () => {
  return pug`
    BrowserRouter
      Switch(location=${location})
        Route(exact
              path='/'
              component=${Home})
        Route(path='/path'
              component=${Path})
  `
}

const Home = () => {
  return pug`
    div
      h1 Home sweet home
      Link(to='/path') Link
  `
}

const Path = () => {
  return pug`
    div
      h2 Hello world!
      Link(to='/') Back
  `
}

export default Routing