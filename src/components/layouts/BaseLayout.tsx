interface Props {
  children: React.ReactNode
}

export default function BaseLayaout({ children }: Props) {
  return (
    <div className="min-h-screen h-full bg-gray-300 flex flex-col">
      <main className="flex-1 bg-slate-800 flex flex-col justify-center text-white">
        {children}
      </main>
    </div>
  )
}
