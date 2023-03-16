import TextInput from 'src/components/common/TextInput'
import TextArea from 'src/components/common/TextArea'
import Button from 'src/components/common/Button'

export default function CreateTask() {
  return (
    <section className="bg-slate-700 rounded p-4">
      <h2 className="font-bold mb-2">Add a Task</h2>
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
    </section>
  )
}
