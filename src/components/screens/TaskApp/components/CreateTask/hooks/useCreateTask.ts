import { nanoid } from 'nanoid'
import { useState } from 'react'
import type { Task } from 'src/@types/Task'

interface Props {
  onTaskAdd: (task: Task) => void
}

interface PartialTask {
  title: string
  description: string
}

export default function useCreateTask({ onTaskAdd }: Props) {
  const [showForm, setShowForm] = useState(false)

  const handleOpen = () => {
    setShowForm(true)
  }

  const handleClose = () => {
    setShowForm(false)
  }

  const handleTaskSubmit = ({ title, description }: PartialTask) => {
    const id = nanoid()
    const task: Task = { id, title, description }

    onTaskAdd(task)
  }

  return {
    showForm,
    handleOpen,
    handleClose,
    handleTaskSubmit
  }
}
