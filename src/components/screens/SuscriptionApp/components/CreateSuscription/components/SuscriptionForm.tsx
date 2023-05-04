import TextInput from 'src/components/common/TextInput'
import TextArea from 'src/components/common/TextArea'
import Button from 'src/components/common/Button'
import { CreateSuscriptionPayload } from 'src/@types/Suscription'
import useSuscriptionForm from '../hooks/useSuscriptionForm'

interface Props {
  onClose: () => void
  onSubmit: (values: CreateSuscriptionPayload) => void
}

export default function SuscriptionForm({ onClose, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    errors
  } = useSuscriptionForm({ onSubmit })
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <TextInput
        name="name"
        label="Nombre de la cuenta de streaming"
        placeholder="Netflix, Tidal o Disney +"
        register={register}
        error={errors.name}
        />
      <TextArea
        name="description"
        label="Descripción"
        placeholder="Cuenta de peliculas y series o cuenta de música en alta calidad"
        register={register}
        error={errors.description}
        />
      <TextInput
        name="datePayment"
        label="Fecha de pago"
        type="date"
        placeholder="04-05-2023"
        register={register}
        error={errors.datePayment}
        />
      <TextInput
        name="image"
        label="Imagen"
        placeholder="url-de-la-imagen"
        register={register}
        error={errors.image}
        />
      <TextInput
        name="type"
        label="Tipo de cuenta"
        placeholder="Música, Serie, Peliculas"
        register={register}
        error={errors.type}
        />
      <div className="flex gap-2">
        <Button type="submit">
          Crear tarea
        </Button>
        <Button onClick={onClose} variant="outline">
          Cancel
        </Button>
      </div>
    </form>
  )
}
