import React from 'react'

interface Props {
  name: string
  type: HTMLInputElement['type']
  value: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
}

export default function TextInput({
  name,
  type,
  value,
  placeholder,
  onChange,
  onBlur
}: Props) {
  return (
    <input
      type={type}
      id={name}
      name={name}
      className="w-full rounded px-2 py-1 bg-slate-800"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur} />
  )
}
