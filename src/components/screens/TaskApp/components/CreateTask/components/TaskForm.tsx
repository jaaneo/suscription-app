import TextInput from 'src/components/common/TextInput'
import TextArea from 'src/components/common/TextArea'
import Button from 'src/components/common/Button'

export default function TaskForm() {
  return (
    <form action="">
      <TextInput
        name="title"
        label="Title"
        placeholder='E.g. "Learn Next.js"'
        />
      <TextArea
        name="body"
        label="Body"
        placeholder='E.g. "Learn Next.js by building a task app"' />
      <Button type="submit">
        Crear tarea
      </Button>
    </form>
  )
}
