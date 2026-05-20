export default function NavbarWrapper({ variant, children }) {
  if (variant === 'absolute-top') {
    return (
      <div className="relative min-h-[120px] bg-[#01101D]/5">
        <div className="absolute top-2 left-0 z-50 w-full">{children}</div>
      </div>
    )
  }
  return <div className="relative">{children}</div>
}
