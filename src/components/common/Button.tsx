import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  fullwidth?: boolean
  onClick?: () => void
}

export default function Button({
  children,
  type = 'button',
  fullwidth = false,
  onClick
}: Props) {
  return (
    <button
      className={clsx(
        'bg-primary hover:bg-primary-400 transition text-white rounded px-4 py-2',
        fullwidth && 'w-full block' // condicional
      )}
      type={type}
      onClick={onClick}
    >
      { children }
    </button>
  )
}
