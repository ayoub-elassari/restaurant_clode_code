import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Container from "../ui/Container"
import Button from "../ui/Button"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gold/10"
          : "bg-gradient-to-b from-ink/70 to-transparent"
      }`}
    >
      <Container className="flex h-16 sm:h-20 items-center justify-between">
        <a
          href="#home"
          className="font-display text-2xl sm:text-3xl tracking-wide text-cream"
        >
          Ember <span className="text-gold">&amp;</span> Oak
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button as="a" href="#reservation" variant="primary">
            Reserve a Table
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream lg:hidden active:scale-90 transition-transform"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="overflow-hidden bg-ink lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8 px-6 pb-20">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="font-display text-3xl text-cream transition-colors hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * NAV_LINKS.length, duration: 0.4 }}
                className="mt-4 w-full max-w-xs"
              >
                <Button
                  as="a"
                  href="#reservation"
                  variant="primary"
                  onClick={handleLinkClick}
                  className="w-full"
                >
                  Reserve a Table
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
