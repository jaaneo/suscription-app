import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { toast } from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterPayload } from 'src/@types/User'
import getAuthService from 'src/services/authService'
import { AxiosError } from 'axios'
import { ServiceError } from 'src/@types/ServiceError'

const schema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  firstName: Yup.string()
    .required('First name is required')
    .min(3, 'Firstname must be at least 3 characters')
    .max(30, 'Firstname must be at most 100 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(3, 'Lastname must be at least 3 characters')
    .max(30, 'Lastname must be at most 100 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters')
    .max(100, 'Password must be at most 100 characters'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Password confirmation is required')
})

type RegisterFormData = {
  passwordConfirm: string
} & RegisterPayload

export default function useRegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const handleFormSubmit = handleSubmit(async data => {
    try {
      const responseBody = await getAuthService().register({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password
      })
      console.log(responseBody)
      toast.success('Register successful')
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
