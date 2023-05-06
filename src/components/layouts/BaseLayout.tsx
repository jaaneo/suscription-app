import Header from './Header'

interface Props {
  children: React.ReactNode
}

export default function BaseLayaout({ children }: Props) {
  return (
    <div className="min-h-screen h-full bg-gray-300 flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-slate-500 to-slate-900 flex flex-col justify-center text-white">
        {children}
      </main>
      <div className="bg-white justify-center text-center dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600 p-6">
        <p>
          Desafío 4 - Fullstack MERN App- Mentoria DobleB
        </p>
      </div>
    </div>
  )
}
