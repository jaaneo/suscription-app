import { Toaster } from 'react-hot-toast'
import Router from './Router'
import BaseLayaout from './components/layouts/BaseLayout'

function App() {
  return (
    <>
      <BaseLayaout>
        <Router />
      </BaseLayaout>
      <Toaster />
    </>
  )
}

export default App
