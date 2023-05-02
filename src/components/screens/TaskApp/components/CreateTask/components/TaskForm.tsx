import TextInput from 'src/components/common/TextInput'
import TextArea from 'src/components/common/TextArea'
import Button from 'src/components/common/Button'
import type { CreateTaskPayload } from 'src/@types/Task'
import useTaskForm from '../hooks/useTaskForm'

interface Props {
  onClose: () => void
  onSubmit: (values: CreateTaskPayload) => void
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
        name="title"
        label="Title"
        placeholder='E.g. "Learn Next.js"'
        register={register}
        error={errors.title}
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
