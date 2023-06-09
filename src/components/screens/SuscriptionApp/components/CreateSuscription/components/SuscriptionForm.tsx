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
        placeholder="Netflix, Tidal, Spotify, etc.."
        register={register}
        error={errors.name}
        />
      <TextArea
        name="description"
        label="Descripción"
        placeholder="Descripción de la cuenta"
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
        name="amount"
        label="Monto a pagar ($ CLP)"
        placeholder="10500"
        register={register}
        error={errors.amount}
        />
      <div className="flex gap-2">
        <Button type="submit" variant="default">
          Crear suscripción
        </Button>
        <Button onClick={onClose} variant="outline">
          Cancel
        </Button>
      </div>
    </form>
  )
}
