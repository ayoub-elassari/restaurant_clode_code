export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignClasses =
    align === "left" ? "items-start text-left" : "items-center text-center"

  return (
    <div className={`flex flex-col ${alignClasses} gap-4`}>
      {eyebrow && (
        <div className={`divider-ornament ${align === "left" ? "self-start" : ""}`}>
          <span className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-gold">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight ${
          light ? "text-ink" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-xl text-base sm:text-lg leading-relaxed ${
            light ? "text-ink/70" : "text-cream/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
