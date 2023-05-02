import { useCallback, useEffect, useState } from 'react'
import { Task } from 'src/@types/Task'
import { useAuth } from 'src/components/context/AuthContext'
import getTaskService from 'src/services/taskService'
import { toast } from 'react-hot-toast'

export default function useAllTasks() {
  const { token } = useAuth()
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(false)

  const handleFetch = useCallback(async () => {
    setLoading(true)
    try {
      const receivedTasks = await getTaskService(token).getAll()
      setTasks(receivedTasks)
    } catch (error) {
      console.log(error)
      toast.error('Error fetching tasks')
    } finally {
      setLoading(false)
      console.log('hola error')
    }
  }, [token])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return {
    tasks,
    refetch: handleFetch,
    loading
  }
}
