import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import getSuscriptionService from 'src/services/suscriptionService'
import { useAuth } from 'src/components/context/AuthContext'
import { UpdateSuscriptionPayload } from 'src/@types/Suscription'
import { suscriptionSchema } from 'src/schemas/suscriptionSchema'

export default function useEditSuscriptions(id: string | undefined, refetchContacts: () => void) {
  const {
    register, handleSubmit, formState: { errors }, reset } = useForm<UpdateSuscriptionPayload>({
    resolver: yupResolver(suscriptionSchema)
  })

  const { token } = useAuth()
  const [loading, setLoading] = useState(false)
  const onSubmit: SubmitHandler<UpdateSuscriptionPayload> = async data => {
    setLoading(true)
    try {
      await getSuscriptionService(token).update(id as string, data)
      toast.success('Updating contact')
      refetchContacts()
      reset()
    } catch (error) {
      console.log(error)
      toast.error('Error updating contact')
    } finally {
      setLoading(false)
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    loading,
    errors
  }
}
