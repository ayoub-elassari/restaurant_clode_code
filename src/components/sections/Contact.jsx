import Container from "../ui/Container"
import SectionHeading from "../ui/SectionHeading"

const CONTACT_ITEMS = [
  {
    label: "Address",
    value: "128 Ember Lane, Downtown District, Metro City",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21Z M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
    ),
  },
  {
    label: "Phone",
    value: "+1 (555) 042-8891",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5c0 9 7 16 16 16l3-4-6-3-2 2c-2-1-4-3-5-5l2-2-3-6-4 1z"
      />
    ),
  },
  {
    label: "Email",
    value: "hello@emberandoak.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 6h18v12H3V6Zm0 0 9 7 9-7"
      />
    ),
  },
  {
    label: "Hours",
    value: "Tue – Sun, 5:00 PM – 11:00 PM",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
]

function MapPlaceholder() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-gold/15 bg-charcoal sm:h-full sm:min-h-80">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,162,75,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,75,0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink/20 via-transparent to-ink/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
        <span className="flex h-14 w-14 animate-pulse items-center justify-center rounded-full bg-gold/15 text-gold">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21Z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          </svg>
        </span>
        <p className="max-w-52 text-sm text-cream/60">
          128 Ember Lane, Downtown District
          <br />
          <span className="text-xs text-cream/40">Map preview — open in Maps app</span>
        </p>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-16 bg-ink py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find Your Way to the Table"
          description="Right in the heart of downtown — walk-ins welcome, reservations recommended."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CONTACT_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 rounded-2xl border border-cream/10 bg-charcoal p-5 sm:p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                  >
                    {item.icon}
                  </svg>
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold/80">
                    {item.label}
                  </span>
                  <span className="text-sm leading-relaxed text-cream/80">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <MapPlaceholder />
        </div>
      </Container>
    </section>
  )
}
