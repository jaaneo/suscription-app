import TextInput from 'src/components/common/TextInput'
import TextArea from 'src/components/common/TextArea'
import Button from 'src/components/common/Button'
import type { PartialTask } from 'src/@types/Task'
import useTaskForm from '../hooks/useTaskForm'

interface Props {
  onClose: () => void
  onSubmit: (values: PartialTask) => void
}

export default function TaskForm({ onClose, onSubmit }: Props) {
  const {
    title,
    body,
    handleTitleChange,
    handleBodyChange,
    handleSubmit
  } = useTaskForm({ onSubmit })
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <TextInput
        name="title"
        label="Title"
        placeholder='E.g. "Learn Next.js"'
        value={title}
        onChange={handleTitleChange}
        />
      <TextArea
        name="body"
        label="Body"
        placeholder='E.g. "Learn Next.js by building a task app"'
        value={body}
        onChange={handleBodyChange}
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
