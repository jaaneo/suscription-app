import type { Task } from 'src/@types/Task'
import TaskItem from './TaskItem'

interface Props {
  tasks: Task[]
  onTaskRemove: (id: string) => void
}

export default function TaskList({ tasks, onTaskRemove }: Props) {
  return (
    <section className="mt-4">
      <h2 className="text-2xl mb-2">Mis tareas</h2>
      <ul className="space-y-2">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body}
            onRemove={onTaskRemove}
          />
        ))}
      </ul>
    </section>
  )
}
