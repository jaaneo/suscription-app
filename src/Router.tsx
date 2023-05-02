import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Landing, Login, Register, TaskApp, NotFound } from './components/screens'
import PublicOnlyRoute from './components/common/PublicOnlyRoute'
import PrivateRoute from './components/common/PrivateRoute'

const BrowserRouter = createBrowserRouter([
  { path: '/', element: <PublicOnlyRoute Component={Landing} /> },
  { path: '/login', element: <PublicOnlyRoute Component={Login} /> },
  { path: '/register', element: <PublicOnlyRoute Component={Register} /> },
  { path: '/app', element: <PrivateRoute Component={TaskApp} /> },
  { path: '/*', element: <NotFound /> }
])

export default function Router() {
  return (
    <RouterProvider router={BrowserRouter} />
  )
}
