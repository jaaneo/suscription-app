import React from 'react'
import InputLayaout from './InputLayout'

interface Props {
  name: string
  type?: HTMLInputElement['type']
  value?: string
  placeholder?: string
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export default function TextInput({
  name,
  type = 'text',
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
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className="w-full rounded px-4 py-2 bg-slate-800"
        onChange={onChange}
        onBlur={onBlur} />
    </InputLayaout>
  )
}
