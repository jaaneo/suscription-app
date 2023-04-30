import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginPayload } from 'src/@types/User'

interface Props {
  onSubmit: (payload: LoginPayload) => void
}

const schema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .max(20, 'Title must be at most 20 characters'),
  password: Yup.string()
    .required('Body is required')
    .min(3, 'Body must be at least 3 characters')
    .max(100, 'Body must be at most 100 characters')
})

export default function useLoginForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginPayload>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const handleFormSubmit = handleSubmit(data => {
    console.log(data)
    reset()
  })

  return {
    register,
    errors,
    handleSubmit: handleFormSubmit
  }
}
