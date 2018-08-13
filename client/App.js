import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Home from './pages/Home'
import Routes from './Routes'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>{renderRoutes(Routes)}</Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
