import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Landing, Login, Register, TaskApp, NotFound } from './components/screens'

const BrowserRouter = createBrowserRouter([
  { path: '/', element: <Landing /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/app', element: <TaskApp /> },
  { path: '/*', element: <NotFound /> }
])

export default function Router() {
  return (
    <RouterProvider router={BrowserRouter} />
  )
}
