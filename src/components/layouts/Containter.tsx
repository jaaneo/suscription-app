interface Props {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className="max-w-2xl w-full mx-auto">
      {children}
    </div>
  )
}
