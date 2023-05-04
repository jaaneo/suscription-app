import Button from 'src/components/common/Button'
import useCreateSuscription from './hooks/useCreateSuscription'
import SuscriptionForm from './components/SuscriptionForm'

interface Props {
  onSuscriptionAdd: () => void
}

export default function CreateSuscription({ onSuscriptionAdd }: Props) {
  const {
    showForm,
    handleOpen,
    handleClose,
    handleSuscriptionSubmit
  } = useCreateSuscription({ onSuscriptionAdd })

  return (
    <section className="space-y-4">
      {showForm ? (
        <div className="bg-slate-700 p-4 rounded">
          <h2 className="font-bold mb-4 text-center">
            Agrega aquí tus cuentas de Streaming
          </h2>
          <SuscriptionForm
            onClose={handleClose}
            onSubmit={handleSuscriptionSubmit} />
        </div>
      ) : (
        <Button fullwidth onClick={handleOpen}>
          Añade una nueva suscripción streaming
        </Button>
      )}
    </section>
  )
}
