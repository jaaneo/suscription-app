import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'
import InputLayaout from './InputLayout'

interface Props<T extends FieldValues> {
  name: Path<T>
  type?: HTMLInputElement['type']
  label?: string
  placeholder?: string
  register: UseFormRegister<T>
  error?: FieldError
}

export default function TextInput<T extends FieldValues>({
  name,
  type = 'text',
  label,
  placeholder,
  register,
  error
}: Props<T>) {
  return (
    <InputLayaout
      name={name}
      label={label}
      errorMessage={error?.message}
    >
      <input
        id={name}
        type={type}
        className="w-full rounded px-4 py-4 bg-slate-800 focus:ring-1 focus:ring-primary-500 focus:outline-none"
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(name)}
      />
    </InputLayaout>
  )
}
