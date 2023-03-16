interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, type }: Props) {
  return (
    <button
      className="bg-teal-500 rounded px-4 py-2 transform"
      type={type}>
      { children }
    </button>
  )
}
