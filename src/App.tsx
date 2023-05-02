import { Toaster } from 'react-hot-toast'
import Router from './Router'
import BaseLayaout from './components/layouts/BaseLayout'
import { AuthProvider } from './components/context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BaseLayaout>
        <Router />
      </BaseLayaout>
      <Toaster />
    </AuthProvider>
  )
}

export default App
