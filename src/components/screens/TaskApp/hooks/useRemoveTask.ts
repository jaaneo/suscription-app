import { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAuth } from 'src/components/context/AuthContext'
import getTaskService from 'src/services/taskService'

export default function useRemoveTask(id: string, onTaskRemove: () => void) {
  const { token } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleRemove = useCallback(async () => {
    setLoading(true)
    try {
      await getTaskService(token).remove(id)
      onTaskRemove()
    } catch (error) {
      console.log(error)
      toast.error('Error removing task')
    } finally {
      setLoading(false)
    }
  }, [token, id, onTaskRemove])

  return {
    loading,
    handleRemove
  }
}
