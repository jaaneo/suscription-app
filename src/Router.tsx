import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/screens/Landing/Landing'
import Login from './components/screens/Login/Login'
import Register from './components/screens/Register/Register'
import { TaskApp } from './components/screens'
import NotFound from './components/screens/NotFound'

const BrowserRouter = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/app', element: <TaskApp /> },
  { path: '/404', element: <NotFound /> }
])

export default function Router() {
  return (
    <RouterProvider router={BrowserRouter} />
  )
}
