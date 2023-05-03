import Button from 'src/components/common/Button'
import TaskForm from './components/SuscriptionForm'
import useCreateTask from './hooks/useCreateSuscription'

interface Props {
  onSuscriptionAdd: () => void
}

export default function CreateSuscription({ onSuscriptionAdd }: Props) {
  const {
    showForm,
    handleOpen,
    handleClose,
    handleSuscriptionSubmit
  } = useCreateTask({ onSuscriptionAdd })

  return (
    <section className="space-y-4">
      {showForm ? (
        <div className="bg-slate-700 p-4 rounded">
          <h2 className="font-bold mb-2">
            Agrega una nueva cuenta de Streaming
          </h2>
          <TaskForm
            onClose={handleClose}
            onSubmit={handleSuscriptionSubmit} />
        </div>
      ) : (
        <Button fullwidth onClick={handleOpen}>
          Add a new Suscription streaming
        </Button>
      )}
    </section>
  )
}
