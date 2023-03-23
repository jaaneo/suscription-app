import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'
import InputLayaout from './InputLayout'

interface Props<T extends FieldValues> {
  name: Path<T>
  label?: string
  placeholder?: string
  register: UseFormRegister<T>
  error?: FieldError
}

export default function TextArea<T extends FieldValues>({
  name,
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
      <textarea
        id={name}
        className="w-full rounded px-4 py-2 bg-slate-800 focus:ring-1 focus:ring-primary-500 focus:outline-none max-h-[250px] min-h-[100px]"
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(name)}
      />
    </InputLayaout>
  )
}
