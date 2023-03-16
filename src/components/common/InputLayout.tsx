interface Props {
  children: React.ReactNode
  name: string
  label: string
}

export default function InputLayaout({ children, name, label }: Props) {
  return (
    <div className="mb-2">
      <label htmlFor="title" className="block mb-1 text-sm">
        {label}
      </label>
      {children}
    </div>
  )
}
