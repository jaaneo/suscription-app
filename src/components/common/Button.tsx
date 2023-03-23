import clsx from 'clsx'

const VARIANTS_STYLES = {
  solid: 'bg-primary hover:bg-primary-400 transition text-white rounded px-4 py-2',
  outline: 'border border-primary-500 hover:border-primary-400',
  ghost: 'bg-transparent hover:bg-primary-300 text-primary'
}

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  fullwidth?: boolean
  onClick?: () => void
  variant?: keyof typeof VARIANTS_STYLES // es tipo las keys de VARIANTS STYLES y agrega automatica%
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
        VARIANTS_STYLES[variant] || VARIANTS_STYLES.solid,
        'transition text-white rounded px-4 py-2',
        fullwidth && 'w-full block' // condicional
      )}
      type={type}
      onClick={onClick}
    >
      { children }
    </button>
  )
}
