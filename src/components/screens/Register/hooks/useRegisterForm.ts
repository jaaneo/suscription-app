import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterPayload } from 'src/@types/User'

const schema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  firstName: Yup.string()
    .required('First name is required')
    .min(3, 'Body must be at least 3 characters')
    .max(30, 'Body must be at most 100 characters'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(3, 'Body must be at least 3 characters')
    .max(30, 'Body must be at most 100 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Body must be at least 3 characters')
    .max(100, 'Body must be at most 100 characters'),
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

  const handleFormSubmit = handleSubmit(data => {
    console.log(data)
  })

  return {
    register,
    errors,
    handleSubmit: handleFormSubmit
  }
}
