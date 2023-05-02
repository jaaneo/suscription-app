import { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'
import type { CreateTaskPayload } from 'src/@types/Task'
import { useAuth } from 'src/components/context/AuthContext'
import getTaskService from 'src/services/taskService'

interface Props {
  onTaskAdd: () => void
}

export default function useCreateTask({ onTaskAdd }: Props) {
  const { token } = useAuth()
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleOpen = () => {
    setShowForm(true)
  }

  const handleClose = () => {
    setShowForm(false)
  }

  const handleTaskSubmit = useCallback(async ({ title, description }: CreateTaskPayload) => {
    setLoading(true)
    try {
      await getTaskService(token).create({
        title,
        description
      })
      onTaskAdd()
      toast.success('Task created')
    } catch (error) {
      console.log(error)
      toast.error('Error creating task')
    } finally {
      setLoading(false)
    }
  }, [onTaskAdd, token])

  return {
    showForm,
    loading,
    handleOpen,
    handleClose,
    handleTaskSubmit
  }
}
