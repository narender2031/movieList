import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// app Components
import App from '../App'
import Movie from './Movie'

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route  path="/" component={App} exact />
        <Route  path="/movie/:id" component={Movie} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;