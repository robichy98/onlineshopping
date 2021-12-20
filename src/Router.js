import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import CartPage from './pages/CartPage'

const Router = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/cart" component={CartPage} />
  </Switch>
)

export default Router