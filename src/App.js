import React, { Component } from 'react'
import Router from './Router'
import { NavLink } from 'react-router-dom'

const routes = [
  {
    to: '/',
    text: 'Homepage'
  },
  {
    to: '/cart',
    text: 'Shopping cart'
  }
]
const Navigation = props => (
  <nav>
    <ul>
    {props.routes.map(route => (
      <li key={route.to}>
        <NavLink to={route.to}>{route.text}</NavLink>
      </li>
    ))}
    </ul>
  </nav>
)

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation routes={routes} />
        <Router />
      </div>
    )
  }
}

export default App