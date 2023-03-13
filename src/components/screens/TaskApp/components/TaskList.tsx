import type { Task } from 'src/@types/Task'
import TaskItem from './TaskItem'

interface Props {
  tasks: Task[]
}

export default function TaskList({ tasks }: Props) {
  return (
    <ul className="mt-4 space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          title={task.title}
          body={task.body}
        />
      ))}
    </ul>
  )
}
