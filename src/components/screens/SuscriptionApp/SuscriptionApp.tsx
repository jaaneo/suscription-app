import Button from 'src/components/common/Button'
import { useAuth } from 'src/components/context/AuthContext'
import Container from '../../layouts/Containter'
import CreateTask from './components/CreateSuscription/CreateSuscription'
import TaskList from './components/SuscriptionList'
import useAllSuscriptions from './hooks/useAllSuscriptions'

export default function SuscriptionApp() {
  const { suscriptions, refetch } = useAllSuscriptions()
  const { deleteToken } = useAuth()
  return (
    <main className="bg-slate-800 h-screen text-white flex flex-col justify-center">
      <Container>
        <h1 className="text-2xl font-bold mb-4 text-center">Suscription App</h1>
        <CreateTask onSuscriptionAdd={refetch} />
        <TaskList suscriptions={suscriptions} onSuscriptionRemove={refetch} />
        <Button variant="outline" onClick={deleteToken} fullwidth>
          Logout
        </Button>
      </Container>
    </main>
  )
}
