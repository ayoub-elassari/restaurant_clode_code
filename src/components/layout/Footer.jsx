import Container from "../ui/Container"

const FOOTER_LINKS = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Menu", href: "#menu" },
      { label: "Gallery", href: "#gallery" },
    ],
  },
  {
    heading: "Visit",
    links: [
      { label: "Reservations", href: "#reservation" },
      { label: "Contact", href: "#contact" },
      { label: "Private Events", href: "#contact" },
      { label: "Gift Cards", href: "#contact" },
    ],
  },
]

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    path: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM16.5 6.8a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-7.5H16l.5-3H13.5V8.3c0-.87.24-1.46 1.5-1.46H16.6V4.14C16.34 4.1 15.46 4 14.44 4 12.3 4 10.85 5.3 10.85 7.8v2.7H8.3v3h2.55V21h2.65Z",
  },
  {
    label: "Twitter",
    href: "#",
    path: "M20 6.4a6.9 6.9 0 0 1-2 .55A3.5 3.5 0 0 0 19.5 5a7 7 0 0 1-2.2.84 3.47 3.47 0 0 0-5.9 3.17A9.86 9.86 0 0 1 4.3 5.16a3.47 3.47 0 0 0 1.08 4.63 3.4 3.4 0 0 1-1.57-.43v.04a3.47 3.47 0 0 0 2.78 3.4 3.5 3.5 0 0 1-1.56.06 3.48 3.48 0 0 0 3.24 2.41A6.96 6.96 0 0 1 3 16.6a9.83 9.83 0 0 0 5.32 1.56c6.38 0 9.87-5.29 9.87-9.87l-.01-.45A7.06 7.06 0 0 0 20 6.4Z",
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-charcoal pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-2">
            <a href="#home" className="font-display text-3xl text-cream">
              Ember <span className="text-gold">&amp;</span> Oak
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-cream/60">
              A modern fire kitchen serving seasonal, live-fire cuisine in
              the heart of downtown. Join us for an evening worth savoring.
            </p>
            <div className="flex gap-3 pt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.heading} className="flex flex-col gap-4">
              <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
                {group.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/60 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-cream/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Ember &amp; Oak. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            Designed for unforgettable evenings.
          </p>
        </div>
      </Container>
    </footer>
  )
}
