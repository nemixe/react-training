import Home from './pages/Home'
import Root from './Root'

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]

export default routes
