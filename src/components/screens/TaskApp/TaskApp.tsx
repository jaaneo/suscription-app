import Button from 'src/components/common/Button'
import { useAuth } from 'src/components/context/AuthContext'
import Container from '../../layouts/Containter'
import CreateTask from './components/CreateTask/CreateTask'
import TaskList from './components/TaskList'
import useAllTasks from './hooks/useAllTasks'

export default function TaskApp() {
  const { tasks, refetch } = useAllTasks()
  const { deleteToken } = useAuth()
  return (
    <main className="bg-slate-800 h-screen text-white flex flex-col justify-center">
      <Container>
        <h1 className="text-2xl font-bold mb-4 text-center">Task App</h1>
        <CreateTask onTaskAdd={refetch} />
        <TaskList tasks={tasks} onTaskRemove={refetch} />
        <Button variant="outline" onClick={deleteToken} fullwidth>
          Logout
        </Button>
      </Container>
    </main>
  )
}
