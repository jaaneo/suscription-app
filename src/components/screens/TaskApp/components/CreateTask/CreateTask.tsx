import Button from 'src/components/common/Button'
import TaskForm from './components/TaskForm'
import useCreateTask from './hooks/useCreateTask'

export default function CreateTask() {
  const { showForm,
    handleOpen,
    handleClose
  } = useCreateTask()

  return (
    <section className="space-y-4">
      <Button fullwidth onClick={handleOpen}>
        Add a new task
      </Button>
      {showForm && (
      <div className="bg-slate-700 p-4 rounded">
        <h2 className="font-bold mb-2">
          Add a Task
        </h2>
        <TaskForm
          onClose={handleClose}
        />
      </div>
      )}

    </section>
  )
}
