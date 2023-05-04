import clsx from 'clsx'

const VARIANTS_STYLES = {
  solid: 'bg-primary hover:bg-primary-400 transition text-white rounded px-4 py-2',
  default: 'bg-primary border border-primary-500 hover:border-primary-400 mb-8',
  outline: 'border border-primary-500 hover:border-primary-400 mb-8',
  remove: 'bg-red-500 bg-opacity-10 hover:bg-red-600 text-white focus:ring-red-500',
  edit: 'bg-yellow-500 bg-opacity-10 hover:bg-yellow-600 text-white focus:ring-yellow-500'
}

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  fullwidth?: boolean
  onClick?: () => void
  variant?: keyof typeof VARIANTS_STYLES // es tipo las keys de VARIANTS STYLES y agrega automatica%
  disabled?: boolean
}

export default function Button({
  children,
  type = 'button',
  fullwidth = false,
  onClick,
  variant = 'solid',
  disabled
}: Props) {
  return (
    <button
      className={clsx(
        VARIANTS_STYLES[variant] || VARIANTS_STYLES.solid,
        'transition text-white rounded px-4 py-2',
        fullwidth && 'w-full block' // condicional
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      { children }
    </button>
  )
}
