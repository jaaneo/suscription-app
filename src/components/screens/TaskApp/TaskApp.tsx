import Container from '../../layouts/Containter'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'

const tasks = [
  {
    id: 1,
    title: 'Learn React',
    body: 'Learn React by building a task app'
  },
  {
    id: 2,
    title: 'Learn FaunaDB',
    body: 'Learn FaunaDB by building a task app'
  }
]

export default function TaskApp() {
  return (
    <main className="bg-slate-800 h-screen text-white flex flex-col justify-center">
      <Container>
        <h1 className="text-2xl font-bold mb-4 text-center">Task App</h1>
        <CreateTask />
        <TaskList tasks={tasks} />
      </Container>
    </main>
  )
}
