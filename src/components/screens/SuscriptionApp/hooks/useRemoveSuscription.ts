import { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'
import getSuscriptionService from 'src/services/suscriptionService'
import { useAuth } from 'src/components/context/AuthContext'

export default function useRemoveSuscription(id: string, onSuscriptionRemove: () => void) {
  const { token } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleRemove = useCallback(async () => {
    setLoading(true)
    try {
      await getSuscriptionService(token).remove(id)
      onSuscriptionRemove()
    } catch (error) {
      console.log(error)
      toast.error('Error removing suscription')
    } finally {
      setLoading(false)
    }
  }, [token, id, onSuscriptionRemove])

  return {
    loading,
    handleRemove
  }
}
