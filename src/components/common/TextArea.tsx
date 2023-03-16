import InputLayaout from './InputLayout'

interface Props {
  name: string
  value?: string
  placeholder?: string
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
}

export default function TextArea({
  name,
  value,
  label,
  placeholder,
  onChange,
  onBlur
}: Props) {
  return (
    <InputLayaout
      name={name}
      label={label}
    >
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        className="w-full rounded px-4 py-2 bg-slate-800 focus:ring-1 focus:ring-primary-500 focus:outline-none max-h-[250px] min-h-[100px]"
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputLayaout>
  )
}
