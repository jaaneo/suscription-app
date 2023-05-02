import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginPayload } from 'src/@types/User'
import getAuthService from 'src/services/authService'

const schema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Body is required')
    .min(3, 'Body must be at least 3 characters')
    .max(100, 'Body must be at most 100 characters')
})

export default function useLoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginPayload>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const handleFormSubmit = handleSubmit(async data => {
    const responseBody = await getAuthService().login(data)
    console.log(responseBody)
  })

  return {
    register,
    errors,
    handleSubmit: handleFormSubmit
  }
}
