import { useCallback, useEffect, useState } from 'react'
import { useAuth } from 'src/components/context/AuthContext'
import { toast } from 'react-hot-toast'
import getSuscriptionService from 'src/services/suscriptionService'
import { Suscription } from 'src/@types/Suscription'

export default function useAllSuscription() {
  const { token } = useAuth()
  const [suscriptions, setSuscriptions] = useState<Suscription[]>([])
  const [loading, setLoading] = useState(false)

  const handleFetch = useCallback(async () => {
    setLoading(true)
    try {
      const receivedSuscriptions = await getSuscriptionService(token).getAll()
      setSuscriptions(receivedSuscriptions)
    } catch (error) {
      toast.error('Error fetching suscriptions')
    } finally {
      setLoading(false)
    }
  }, [token])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return {
    suscriptions,
    refetch: handleFetch,
    loading
  }
}
