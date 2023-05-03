import TextInput from 'src/components/common/TextInput'
import TextArea from 'src/components/common/TextArea'
import Button from 'src/components/common/Button'
import { CreateSuscriptionPayload } from 'src/@types/Suscription'
import useTaskForm from '../hooks/useSuscriptionForm'

interface Props {
  onClose: () => void
  onSubmit: (values: CreateSuscriptionPayload) => void
}

export default function TaskForm({ onClose, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    errors
  } = useTaskForm({ onSubmit })
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <TextInput
        name="name"
        label="Name account streaming"
        placeholder='E.g. "Netflix", "Tidal" or "Disney +"'
        register={register}
        error={errors.name}
        />
      <TextArea
        name="description"
        label="Description"
        placeholder='E.g. "Learn Next.js by building a task app"'
        register={register}
        error={errors.description}
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
