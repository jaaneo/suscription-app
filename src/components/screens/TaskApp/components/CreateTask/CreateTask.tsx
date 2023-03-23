import type { Task } from 'src/@types/Task'
import Button from 'src/components/common/Button'
import TaskForm from './components/TaskForm'
import useCreateTask from './hooks/useCreateTask'

interface Props {
  onTaskAdd: (task: Task) => void
  onSubmit:
}

export default function CreateTask({ onTaskAdd, onSubmit }: Props) {
  const { showForm,
    handleOpen,
    handleClose
  } = useCreateTask({ onTaskAdd })

  return (
    <section className="space-y-4">
      {showForm ? (
        <div className="bg-slate-700 p-4 rounded">
          <h2 className="font-bold mb-2">
            Add a Task
          </h2>
          <TaskForm
            onClose={handleClose} onSubmit={} />
        </div>
      ) : (
        <Button fullwidth onClick={handleOpen}>
          Add a new task
        </Button>
      )}
    </section>
  )
}
