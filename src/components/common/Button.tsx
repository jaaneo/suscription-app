import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  fullwidth?: boolean
  onClick?: () => void
  variant?: 'solid' | 'outline'
}

export default function Button({
  children,
  type = 'button',
  fullwidth = false,
  onClick,
  variant = 'solid'
}: Props) {
  return (
    <button
      className={clsx(
        variant === 'solid' && 'bg-primary hover:bg-primary-400 transition text-white rounded px-4 py-2',
        variant === 'outline' && 'border border-primary-500 hover:border-primary-400 transition text-white rounded px-4 py-2',
        fullwidth && 'w-full block' // condicional
      )}
      type={type}
      onClick={onClick}
    >
      { children }
    </button>
  )
}
