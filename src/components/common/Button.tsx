interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, type }: Props) {
  return (
    <button
      className="bg-primary hover:bg-primary-400 transition text-white rounded px-4 py-2"
      type={type}>
      { children }
    </button>
  )
}
