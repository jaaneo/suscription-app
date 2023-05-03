import Button from 'src/components/common/Button'
import useRemoveSuscription from '../hooks/useRemoveSuscription'

interface Props {
  name: string
  description: string
  id: string
  onRemove: () => void
}

export default function SuscriptionItem({
  id,
  name,
  description,
  onRemove
}: Props) {
  const { handleRemove, loading } = useRemoveSuscription(id, onRemove)

  return (
    <li className="rounded w-full bg-slate-700 px-6 py-4">
      <p className="text-xs opacity-50">
        ID: {id}
      </p>
      <h2 className="font-bold">
        {name}
      </h2>
      <p className="text-sm mb-4">
        {description}
      </p>
      <Button variant="text" onClick={handleRemove} disabled={loading}>
        Eliminar
      </Button>
    </li>
  )
}
