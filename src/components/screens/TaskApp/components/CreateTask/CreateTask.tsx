import Button from 'src/components/common/Button'
import TaskForm from './components/TaskForm'

export default function CreateTask() {
  return (
    <section className="space-y-4">
      <Button fullwidth>
        Add a new task
      </Button>
      <div className="bg-slate-700 p-4 rounded">
        <h2 className="font-bold mb-2">
          Add a Task
        </h2>
        <TaskForm />
      </div>
    </section>
  )
}
