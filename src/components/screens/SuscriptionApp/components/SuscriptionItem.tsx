import Button from 'src/components/common/Button'
import useRemoveSuscription from '../hooks/useRemoveSuscription'
import CreateSuscription from './CreateSuscription/CreateSuscription'

interface Props {
  name: string
  description: string
  datePayment: string
  image: string
  type: string
  id: string
  onRemove: () => void
}

export default function SuscriptionItem({
  id,
  name,
  description,
  datePayment,
  image,
  type,
  onRemove
}: Props) {
  const { handleRemove, loading } = useRemoveSuscription(id, onRemove)

  return (
    <li className="rounded w-full bg-slate-700 px-6 py-4">
      <p className="text-xs opacity-50">
        ID: {id}
      </p>
      <h2 className="font-bold">
        Cuenta: {name}
      </h2>
      <p className="text-sm mb-4">
        Descripción: {description}
      </p>
      <p className="text-sm mb-4">
        Fecha de pago: {datePayment}
      </p>
      <p className="text-sm mb-4">
        Logo: <img src={image} alt="logo de la cuenta" className="inline-block rounded-full w-16 h-16" />
      </p>
      <p className="text-sm mb-4">
        Tipo de cuenta: {type}
      </p>
      <Button variant="remove" onClick={handleRemove} disabled={loading}>
        Eliminar
      </Button>
      <Button variant="edit" disabled={loading}>
        Editar
      </Button>
    </li>
  )
}
