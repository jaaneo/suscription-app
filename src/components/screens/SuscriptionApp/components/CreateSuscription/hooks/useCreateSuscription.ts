import { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'
import { CreateSuscriptionPayload } from 'src/@types/Suscription'
import { useAuth } from 'src/components/context/AuthContext'
import getSuscriptionService from 'src/services/suscriptionService'

interface Props {
  onSuscriptionAdd: () => void
}

export default function useCreateSuscription({ onSuscriptionAdd }: Props) {
  const { token } = useAuth()
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleOpen = () => {
    setShowForm(true)
  }

  const handleClose = () => {
    setShowForm(false)
  }

  const handleSuscriptionSubmit = useCallback(async ({
    name, description, datePayment, image, amount }:
  CreateSuscriptionPayload) => {
    setLoading(true)
    try {
      await getSuscriptionService(token).create({
        name,
        description,
        datePayment,
        image,
        amount
      })
      onSuscriptionAdd()
      console.log(onSuscriptionAdd)
      toast.success('Suscription created')
    } catch (error) {
      console.log(error)
      toast.error('Error creating suscription')
    } finally {
      setLoading(false)
    }
  }, [onSuscriptionAdd, token])

  return {
    showForm,
    loading,
    handleOpen,
    handleClose,
    handleSuscriptionSubmit
  }
}
