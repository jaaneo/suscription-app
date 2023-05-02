import Button from 'src/components/common/Button'
import useRemoveTask from '../hooks/useRemoveTask'

interface Props {
  title: string
  body: string
  id: string
  onRemove: () => void
}

export default function TaskItem({
  id,
  title,
  body,
  onRemove
}: Props) {
  const { handleRemove, loading } = useRemoveTask(id, onRemove)

  return (
    <li className="rounded w-full bg-slate-700 px-6 py-4">
      <p className="text-xs opacity-50">
        ID: {id}
      </p>
      <h2 className="font-bold">
        {title}
      </h2>
      <p className="text-sm mb-4">
        {body}
      </p>
      <Button variant="text" onClick={handleRemove} disabled={loading}>
        Eliminar
      </Button>
    </li>
  )
}
