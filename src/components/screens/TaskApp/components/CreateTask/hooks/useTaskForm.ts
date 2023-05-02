import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateTaskPayload } from 'src/@types/Task'

interface Props {
  onSubmit: (task: CreateTaskPayload) => void
}

const schema = Yup.object({
  title: Yup.string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(20, 'Title must be at most 20 characters'),
  description: Yup.string()
    .required('Body is required')
    .min(3, 'Body must be at least 3 characters')
    .max(100, 'Body must be at most 100 characters')
})

export default function useTaskForm({ onSubmit }: Props) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateTaskPayload>({
    defaultValues: {
      title: '',
      description: ''
    },
    resolver: yupResolver(schema)
  })

  const handleFormSubmit = handleSubmit(data => {
    onSubmit(data)
    reset()
  })

  return {
    register,
    errors,
    handleSubmit: handleFormSubmit
  }
}
