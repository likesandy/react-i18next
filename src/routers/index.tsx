import { RouteObject, useRoutes } from 'react-router-dom'
import Home from '../Home'

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
]

const Router = () => useRoutes(rootRouter as any)

export default Router

