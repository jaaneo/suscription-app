import Button from 'src/components/common/Button'
import { useAuth } from 'src/components/context/AuthContext'
import Container from '../../layouts/Containter'
import useAllSuscriptions from './hooks/useAllSuscriptions'
import CreateSuscription from './components/CreateSuscription/CreateSuscription'
import SuscriptionList from './components/SuscriptionList'

export default function SuscriptionApp() {
  const { suscriptions, refetch } = useAllSuscriptions()
  const { deleteToken } = useAuth()
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4 text-center py-6">Suscription App</h1>
      <CreateSuscription onSuscriptionAdd={refetch} />
      <SuscriptionList suscriptions={suscriptions} onSuscriptionRemove={refetch} />
      <Button variant="outline" onClick={deleteToken} fullwidth>
        Logout
      </Button>
    </Container>
  )
}
