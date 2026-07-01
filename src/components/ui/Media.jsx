import { useState } from "react"

export default function Media({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  eager = false,
  compact = false,
}) {
  const [status, setStatus] = useState("loading")

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-charcoal-light via-charcoal to-ink ${className}`}
    >
      {status !== "failed" && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("failed")}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
      {status !== "loaded" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gold/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className={compact ? "h-4 w-4" : "h-10 w-10"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c-1.5 3-4 4.5-4 8a4 4 0 1 0 8 0c0-3.5-2.5-5-4-8Z"
            />
          </svg>
          {!compact && (
            <span className="text-[10px] uppercase tracking-[0.2em]">Ember &amp; Oak</span>
          )}
        </div>
      )}
    </div>
  )
}
