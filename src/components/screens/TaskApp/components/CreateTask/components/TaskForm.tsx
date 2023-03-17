import TextInput from 'src/components/common/TextInput'
import TextArea from 'src/components/common/TextArea'
import Button from 'src/components/common/Button'

interface Props {
  onClose: () => void
}

export default function TaskForm({ onClose }: Props) {
  return (
    <form className="space-y-4">
      <TextInput
        name="title"
        label="Title"
        placeholder='E.g. "Learn Next.js"'
        />
      <TextArea
        name="body"
        label="Body"
        placeholder='E.g. "Learn Next.js by building a task app"' />
      <div className="flex gap-2">
        <Button type="submit">
          Crear tarea
        </Button>
        <Button onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
