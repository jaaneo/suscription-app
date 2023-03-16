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
        className="w-full rounded px-2 py-1 bg-slate-800"
        onChange={onChange}
        onBlur={onBlur}
      />
    </InputLayaout>
  )
}
