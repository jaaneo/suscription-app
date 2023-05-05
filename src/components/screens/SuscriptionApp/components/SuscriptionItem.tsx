import Button from 'src/components/common/Button'
import useRemoveSuscription from '../hooks/useRemoveSuscription'

interface Props {
  name: string
  description: string
  datePayment: string
  image: string
  amount: string
  id: string
  onRemove: () => void
}

export default function SuscriptionItem({
  id,
  name,
  description,
  datePayment,
  image,
  amount,
  onRemove
}: Props) {
  const { handleRemove, loading } = useRemoveSuscription(id, onRemove)

  return (
    <div className="grid grid-cols-2">
      <div className="rounded w-full bg-slate-700 px-6 py-4">
        <p className="text-sm mb-4">
          <img src={image} alt="logo de la cuenta" className="inline-block rounded-full w-16 h-16" />
        </p>
        <h2 className="font-bold">Plataforma:</h2>
        <p className="font-light text-lg mb-4">{name}</p>
        <h2 className="font-bold">Fecha de pago:</h2>
        <p className="font-light text-lg mb-4">{datePayment}</p>
        <h2 className="font-bold">Monto a pagar: </h2>
        <p className="font-light text-lg mb-4">${amount}</p>
      </div>
      <div className="rounded w-full bg-slate-700 px-6 py-4">
        <br /><br /><br /><h2 className="font-bold">Descripción:</h2>
        <p className="font-light text-lg mb-4">{description}</p>
      </div>
      <Button variant="edit" disabled={loading}>
        Editar
      </Button>
      <Button variant="remove" onClick={handleRemove} disabled={loading}>
        Eliminar
      </Button>
    </div>
  )
}
