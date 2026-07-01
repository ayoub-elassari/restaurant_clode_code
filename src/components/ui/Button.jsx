const variants = {
  primary:
    "bg-gold text-ink hover:bg-gold-light shadow-lg shadow-gold/20 hover:shadow-gold/30",
  outline:
    "border border-gold/60 text-cream hover:bg-gold/10 hover:border-gold",
  ghost: "text-cream hover:text-gold",
  wine: "bg-wine text-cream hover:bg-wine-light shadow-lg shadow-wine/30",
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  as: Tag = "button",
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 active:scale-95 cursor-pointer select-none whitespace-nowrap ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
