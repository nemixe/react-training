import React from 'react'
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'

const Root = ({ route }) => {
  return renderRoutes(route.routes)
}

export default Root
