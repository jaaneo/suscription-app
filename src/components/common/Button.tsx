interface Props {
  children: React.ReactNode
}

export default function Button({ children }: Props) {
  return (
    <button className="bg-teal-500">
      { children }
    </button>
  )
}
