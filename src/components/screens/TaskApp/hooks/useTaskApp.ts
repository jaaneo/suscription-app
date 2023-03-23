import { useState } from 'react'
import type { Task } from 'src/@types/Task'

export default function useTaskApp() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task])
  }

  const removeTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return {
    tasks,
    addTask,
    removeTask
  }
}
