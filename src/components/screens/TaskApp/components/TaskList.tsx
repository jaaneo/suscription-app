import type { Task } from 'src/@types/Task'
import EmptyTaskList from './EmptyTaskList'
import TaskItem from './TaskItem'

interface Props {
  tasks?: Task[]
  onTaskRemove: () => void
}

export default function TaskList({ tasks, onTaskRemove }: Props) {
  return (
    <section className="my-4">
      <h2 className="text-2xl mb-2">
        Mis tareas
      </h2>
      {!tasks?.length ? (
        <EmptyTaskList />
      ) : (
        <ul className="space-y-2">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              body={task.description}
              onRemove={onTaskRemove}
            />
          ))}
        </ul>
      )}
    </section>
  )
}
