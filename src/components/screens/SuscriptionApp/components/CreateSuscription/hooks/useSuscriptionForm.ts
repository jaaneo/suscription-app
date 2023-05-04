import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateSuscriptionPayload } from 'src/@types/Suscription'

interface Props {
  onSubmit: (suscription: CreateSuscriptionPayload) => void
}

const schema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(20, 'Name must be at most 20 characters'),
  description: Yup.string()
    .required('Description is required')
    .min(3, 'Description must be at least 3 characters')
    .max(100, 'Description must be at most 100 characters'),
  datePayment: Yup.string()
    .required('Date payment is required')
    .min(3, 'Date payment must be at least 3 characters')
    .max(100, 'Date payment must be at most 100 characters'),
  image: Yup.string()
    .required('Image is required')
    .min(3, 'Image must be at least 3 characters')
    .max(100, 'Image must be at most 100 characters'),
  type: Yup.string()
    .required('Type is required')
    .min(3, 'Type must be at least 3 characters')
    .max(100, 'Type must be at most 100 characters')
})

export default function useSuscriptionForm({ onSubmit }: Props) {
  const {
    register, handleSubmit, formState: { errors }, reset } = useForm<CreateSuscriptionPayload>({
    defaultValues: {
      name: '',
      description: '',
      datePayment: '',
      image: '',
      type: ''
    },
    resolver: yupResolver(schema)
  })

  const handleFormSubmit = handleSubmit(data => {
    onSubmit(data)
    console.log(data)
    reset()
  })

  return {
    register,
    errors,
    handleSubmit: handleFormSubmit
  }
}
