import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, Switch } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'
import Home from '../client/pages/Home'
import Routes from '../client/Routes'

export default req => {
  const context = {}
  const htmlMarkup = () => {
    return (
      <StaticRouter context={context} location={req.url}>
        <div>
          <Switch>{renderRoutes(Routes)}</Switch>
        </div>
      </StaticRouter>
    )
  }

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${renderToString(htmlMarkup())}</div>
    <script src="assets/js/main.js"></script>
  </body>
  </html>
  `
}
