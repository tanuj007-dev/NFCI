export default function AdminButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-lora text-sm font-medium transition-colors disabled:opacity-50'
  const variants = {
    primary: 'bg-nfci-red text-white hover:bg-nfci-red-hover',
    secondary:
      'border border-[#d4ccc0] bg-white text-[#333] hover:border-nfci-red hover:text-nfci-red',
    danger: 'bg-red-50 text-red-700 border border-red-200 hover:bg-red-100',
    ghost: 'text-nfci-red hover:bg-nfci-red/10',
  }

  return (
    <button
      type="button"
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
