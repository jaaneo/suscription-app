import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginPayload } from 'src/@types/User'
import getAuthService from 'src/services/authService'
import { useAuth } from 'src/components/context/AuthContext'
import { toast } from 'react-hot-toast'
import { AxiosError } from 'axios'
import { ServiceError } from 'src/@types/ServiceError'

const schema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters')
    .max(100, 'Password must be at most 100 characters')
})

export default function useLoginForm() {
  const { registerToken } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginPayload>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const handleFormSubmit = handleSubmit(async data => {
    try {
      const { token } = await getAuthService().login(data)
      registerToken(token)
      toast.success('Login successful')
    } catch (error) {
      const axiosError = error as AxiosError
      const serviceErrorResponse = axiosError.response?.data as ServiceError
      toast.error(serviceErrorResponse.message)
    }
  })

  return {
    register,
    errors,
    handleSubmit: handleFormSubmit
  }
}
